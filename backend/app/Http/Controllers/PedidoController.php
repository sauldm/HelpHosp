<?php

namespace App\Http\Controllers;

use App\Models\Pedido;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PedidoController extends Controller
{
    public function index()
    {
        return Pedido::with("cliente")->get();
    }

    public function store(Request $request)
{
    $validated = $request->validate([
        'cliente_telefono' => 'required|exists:clientes,telefono',
        'estado' => 'required|string',
        'formaDeEncargo' => 'required',
        'productos' => 'required|array',
        'productos.*.producto_id' => 'required|exists:productos,id',
        'productos.*.cantidad' => 'required|integer|min:1',
        'productos.*.observaciones' => 'nullable|string',
    ]);

    DB::beginTransaction();

    try {
        // Crear pedido
        $pedido = Pedido::create([
            'cliente_telefono' => $validated['cliente_telefono'],
            'estado' => $validated['estado'],
            'formaDeEncargo' => $validated['formaDeEncargo'],
        ]);

        // Iterar sobre los productos
        foreach ($validated['productos'] as $item) {
            $productoId = $item["producto_id"];
            $cantidad = $item['cantidad'];
            $observaciones = $item['observaciones'] ?? null;

            // Buscar si ya existe ese producto con esa observación
            $existente = $pedido->productos()
                ->wherePivot('producto_id', $productoId)
                ->wherePivot('observaciones', $observaciones)
                ->first();

            if ($existente) {
                $nuevaCantidad = $existente->pivot->cantidad + $cantidad;
                $pedido->productos()->updateExistingPivot($productoId, [
                    'cantidad' => $nuevaCantidad,
                    'observaciones' => $observaciones
                ]);
            } else {
                $pedido->productos()->attach($productoId, [
                    'cantidad' => $cantidad,
                    'observaciones' => $observaciones
                ]);
            }
        }

        DB::commit();

        return response()->json($pedido->load('productos', 'cliente'), 201);
    } catch (\Exception $e) {
        DB::rollBack();
        return response()->json(['error' => 'No se pudo crear el pedido', 'detalle' => $e->getMessage()], 500);
    }
}

    public function show($id)
    {
        return Pedido::with('cliente', 'productos')->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $pedido = Pedido::findOrFail($id);

        $validated = $request->validate([
            'estado' => 'required|string',
            'formaDeEncargo' => 'required',
            'productos' => 'required|array',
            'productos.*.producto_id' => 'required|exists:productos,id',
            'productos.*.cantidad' => 'required|integer|min:1',
            'productos.*.observaciones' => 'nullable|string',
        ]);

        $pedido->update([
            'estado' => $validated['estado'],
            'formaDeEncargo' => $validated['formaDeEncargo'],
        ]);

        if (isset($validated['productos'])) {
            $productosSync = [];
            foreach ($validated['productos'] as $item) {
                $productosSync[$item['producto_id']] = [
                    'cantidad' => $item['cantidad'],
                    'observaciones' => $item['observaciones'] ?? null,
                ];
            }
            $pedido->productos()->sync($productosSync);
        }

        return response()->json($pedido->load('productos', 'cliente'));
    }

    public function destroy($id)
    {
        $pedido = Pedido::findOrFail($id);
        $pedido->delete();

        return response()->json(['mensaje' => 'Pedido eliminado']);
    }


    public function resetPedidos()
    {
        try {
            DB::table('pedido_producto')->delete();

            Pedido::truncate();

            DB::commit();
            return response()->json(['message' => 'Todos los pedidos han sido eliminados.'], 200);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['error' => 'Error al eliminar pedidos.'], 500);
        }
    }
}
