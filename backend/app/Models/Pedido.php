<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    protected $fillable = [
        "cliente_id",
        "estado",
        "numero_pedido",
    ];

    public function cliente()
    {
        return $this->belongsTo(Cliente::class, "cliente_id", "telefono");
    }

    public function producto(){
        return $this->belongsToMany(Producto::class, "pedido_producto")
                    ->withPivot("cantidad", "observaciones")
                    ->withTimestamps();
    }
}
