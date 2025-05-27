<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    protected $fillable = [
        "nombre",
        "ingredientes",
        "precio",
        "disponibilidad",
    ];

    public function pedidos()
    {
        return $this->belongsToMany(Pedido::class, "pedido_producto")
                    ->withPivot("cantidad", "observaciones")
                    ->withTimestamps();
    }
}
