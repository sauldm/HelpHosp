<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Producto;

class ProductoSeeder extends Seeder
{
    public function run(): void
    {
        $productos = [
            ['nombre' => 'Hamburguesa Clásica', 'precio' => 7.50],
            ['nombre' => 'Pizza Margarita', 'precio' => 8.00],
            ['nombre' => 'Tortilla Española', 'precio' => 5.50],
            ['nombre' => 'Croquetas de Jamón', 'precio' => 6.00],
            ['nombre' => 'Ensalada César', 'precio' => 6.50],
            ['nombre' => 'Bocadillo de Calamares', 'precio' => 5.00],
            ['nombre' => 'Cerveza', 'precio' => 2.00],
            ['nombre' => 'Agua', 'precio' => 1.50],
        ];

        foreach ($productos as $producto) {
            Producto::create($producto);
        }
    }
}

