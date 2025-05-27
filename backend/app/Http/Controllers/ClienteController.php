<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use Illuminate\Http\Request;

class ClienteController extends Controller
{
    public function index()
    {
        return Cliente::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'telefono' => 'required|unique:clientes',
            'nombre' => 'required',
            'domicilio' => 'nullable',
        ]);

        return Cliente::create($request->all());
    }

    public function show($telefono)
    {
        return Cliente::findOrFail($telefono);
    }

    public function update(Request $request, $telefono)
    {
        $cliente = Cliente::findOrFail($telefono);
        $cliente->update($request->all());

        return $cliente;
    }

    public function destroy($telefono)
    {
        Cliente::destroy($telefono);
        return response()->json(['mensaje' => 'Cliente eliminado']);
    }
}
