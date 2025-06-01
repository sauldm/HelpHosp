<?php

use App\Http\Controllers\ClienteController;
use App\Http\Controllers\PedidoController;
use App\Http\Controllers\ProductoController;
use Illuminate\Support\Facades\Route;

Route::apiResource("/productos", ProductoController::class);
Route::apiResource("/pedidos", PedidoController::class);
Route::apiResource("/clientes", ClienteController::class);
Route::delete('/pedidos', [PedidoController::class, 'resetPedidos']);
