<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Pedido;
use Illuminate\Http\Request;

class PedidoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Pedido::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return Pedido::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Pedido $producto)
    {
        return $producto;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Pedido $producto)
    {
        return $producto->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pedido $producto)
    {
        $producto->delete();
        return response()->json(['message' => 'Pedido deleted successfully']);
    }
}
