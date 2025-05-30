<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{

    protected $table = "pedidos";
    protected $fillable = [
        "cliente_telefono",
        "estado",
        "formaDeEncargo",
        
    ];

    public function cliente()
    {
        return $this->belongsTo(Cliente::class, "cliente_telefono", "telefono");
    }

    public function productos()
    {
        return $this->belongsToMany(Producto::class, "pedido_productos")
            ->withPivot("cantidad", "observaciones")
            ->withTimestamps();
    }
}
