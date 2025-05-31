<?php

namespace App\Http\Controllers;

use App\Models\Pedido;
use App\Models\PedidoProducto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class PedidoController extends Controller
{
    public function index()
    {
        return Pedido::with("cliente")->get();
    }

    public function store(Request $request)
    {
        Log::info('Creando pedido');
        $validated = $request->validate([
            'cliente_telefono' => 'required|exists:clientes,telefono',
            'formaDeEncargo' => 'string',
            'productos' => 'required|array',
            'productos.*.producto_id' => 'required|exists:productos,id',
            'productos.*.cantidad' => 'integer|min:1',
            'productos.*.observaciones' => 'nullable|string',
        ]);

        Log::info('Pedido creado exitosamente');



        DB::beginTransaction();

        try {
            // Crear pedido
            $pedido = Pedido::create([
                'cliente_telefono' => $validated['cliente_telefono'],
                'formaDeEncargo' => $validated['formaDeEncargo'],
            ]);

            foreach ($validated['productos'] as $item) {
                $productoId = $item['producto_id'];
                $cantidad = $item['cantidad'] ?? 1;
                $observaciones = trim($item['observaciones'] ?? '');

                if ($observaciones === '') {
                    // Agrupar sin observaciones
                    $existente = PedidoProducto::where('pedido_id', $pedido->id)
                        ->where('producto_id', $productoId)
                        ->where(function ($query) {
                            $query->whereNull('observaciones')
                                ->orWhere('observaciones', '');
                        })
                        ->first();

                    if ($existente) {
                        $existente->cantidad += $cantidad;
                        $existente->save();
                    } else {
                        PedidoProducto::create([
                            'pedido_id'     => $pedido->id,
                            'producto_id'   => $productoId,
                            'cantidad'      => $cantidad,
                            'observaciones' => '',
                        ]);
                    }
                } else {
                    // Observaciones presentes, nueva fila
                    PedidoProducto::create([
                        'pedido_id'     => $pedido->id,
                        'producto_id'   => $productoId,
                        'cantidad'      => $cantidad,
                        'observaciones' => $observaciones,
                    ]);
                }
            }

            DB::commit();
            // mostrar por consola mensaje de éxito
            Log::info('Pedido creado exitosamente', ['pedido_id' => $pedido->id]);

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
            'productos' => 'sometimes|array',
            'productos.*.producto_id' => 'required|exists:productos,id',
            'productos.*.cantidad' => 'integer|min:1',
            'productos.*.observaciones' => 'nullable|string',
        ]);

        $pedido->update([
            'estado' => $validated['estado'],
            'formaDeEncargo' => $validated['formaDeEncargo'],
        ]);

        if (!empty($validated['productos'])) {
            $productosSync = [];
            foreach ($validated['productos'] as $item) {
                $productosSync[$item['producto_id']] = [
                    'cantidad' => $item['cantidad'] ?? 1,
                    'observaciones' => $item['observaciones'] ?? '',
                ];
            }
            $pedido->productos()->sync($productosSync);
            Log::info('Pedido creado exitosamente',$productosSync);
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
        DB::beginTransaction();
        try {
            DB::table('pedido_productos')->delete(); // nombre correcto tabla pivote
            Pedido::truncate();
            DB::commit();
            return response()->json(['message' => 'Todos los pedidos han sido eliminados.'], 200);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['error' => 'Error al eliminar pedidos.'], 500);
        }
    }
}
