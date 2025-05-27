<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{

    protected $table = "productos";
    protected $fillable = [
        "nombre",
        "ingredientes",
        "precio",
        "disponibilidad",
    ];

    public function pedidos()
    {
        return $this->belongsToMany(Pedido::class, "pedido_productos")
                    ->withPivot("cantidad", "observaciones")
                    ->withTimestamps();
    }
}
