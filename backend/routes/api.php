<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PedidosController;
use App\Http\Controllers\Api\PagosController;
use App\Http\Controllers\Api\EstadisticasController;

Route::get('/pedidos', [PedidosController::class, 'index']);
Route::get('/pagos', [PagosController::class, 'index']);
Route::get('/estadisticas', [EstadisticasController::class, 'index']);
