<?php


namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Pedido;
use App\Models\Cliente;

class PedidoSeeder extends Seeder
{
    public function run(): void
    {
        $cliente1 = Cliente::where('telefono', '666123456')->first();
        $cliente2 = Cliente::where('telefono', '677654321')->first();

        Pedido::create([
            'cliente_telefono' => $cliente1->telefono,
            'formaDeEncargo' => "Domicilio"
        ]);

        Pedido::create([
            'cliente_telefono' => $cliente2->telefono,
            'formaDeEncargo' => "Recoger"
        ]);
    }
}
