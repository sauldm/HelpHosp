<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Cliente;

class ClienteSeeder extends Seeder
{
    public function run(): void
    {
        Cliente::create([
            'telefono' => '666123456',
            'nombre' => 'Carlos Fernández',
            'domicilio' => 'Calle Mayor 123',
        ]);

        Cliente::create([
            'telefono' => '677654321',
            'nombre' => 'Ana López',
            'domicilio' => 'Avenida Central 45',
        ]);
    }
}
