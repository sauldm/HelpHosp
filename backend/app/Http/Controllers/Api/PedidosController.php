<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PedidosController extends Controller
{
    public function index()
    {
        return response()->json(['message' => 'PedidosController endpoint funcionando']);
    }
}
