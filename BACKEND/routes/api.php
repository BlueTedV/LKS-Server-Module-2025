<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\Auth\LoginController;

Route::prefix('v1')->group(function () {
    Route::post('/auth/login', LoginController::class);
});