<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    protected $fillable = [
        "telefono",
        "domicilio",
        "numero",
        "productos"
    ];
}
