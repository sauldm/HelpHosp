<?php


namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Pedido;
use App\Models\Cliente;
use App\Models\PedidoProducto;
use App\Models\Producto;

class PedidoSeeder extends Seeder
{
    public function run(): void
    {
        $producto1 = Producto::first();
        $producto2 = Producto::skip(1)->first();

        $cliente1 = Cliente::where('telefono', '666123456')->first();
        $cliente2 = Cliente::where('telefono', '677654321')->first();

        $pedido1 = Pedido::create([
            'cliente_telefono' => $cliente1->telefono,
            'formaDeEncargo' => "Domicilio"
        ]);

        $pedido2 = Pedido::create([
            'cliente_telefono' => $cliente2->telefono,
            'formaDeEncargo' => "Recoger"
        ]);

       PedidoProducto::insert([
    [
        'pedido_id' => $pedido1->id,
        'producto_id' => $producto1->id,
        'cantidad' => 1,
        'observaciones' => 'Sin cebolla',
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'pedido_id' => $pedido2->id,
        'producto_id' => $producto1->id,
        'cantidad' => 2,
        'observaciones' => 'Con extra queso',
        'created_at' => now(),
        'updated_at' => now(),
    ],
]);

    }
}
