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
            'telefono' => [
                'required',
                'unique:clientes',
                'regex:/^[0-9]{9}$/'
            ],

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
        $request->validate([
            'nombre' => 'required',
            'domicilio' => 'nullable',
        ]);
        $cliente = Cliente::findOrFail($telefono);
        $cliente->update($request->only(['nombre', 'domicilio']));

        return $cliente;
    }

    public function destroy($telefono)
    {
        Cliente::destroy($telefono);
        return response()->json(['mensaje' => 'Cliente eliminado']);
    }
}
