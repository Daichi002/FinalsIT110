<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Onlineshop;
use Illuminate\Support\Facades\Http;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('create',[Onlineshop::class,'create']);
Route::post('login',[Onlineshop::class,'login']);
Route::post('details',[Onlineshop::class,'details']);

Route::post('deleteuser', [Onlineshop::class, 'deleteuser']);

Route::post('updateUserDetails/{userid}/{username}', [Onlineshop::class, 'updateUserDetails']);


Route::post('geteditDetails', [Onlineshop::class, 'geteditDetails']);

Route::post('getdetails', [Onlineshop::class, 'getdetails']);

Route::post('receipt',[Onlineshop::class,'receipt']);

Route::post('receiptlog',[Onlineshop::class,'receiptlog']);

Route::post('isused',[Onlineshop::class,'isused']);


Route::post('active',[Onlineshop::class,'active']);