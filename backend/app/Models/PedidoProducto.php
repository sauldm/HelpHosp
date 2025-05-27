<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PedidoProducto extends Model
{
    protected $fillable = [
        'pedido_id',
        'producto_id',
        'cantidad',
        'observaciones',
    ];
    protected $table = 'pedido_productos';
}
