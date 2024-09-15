<?php

use App\Http\Controllers\AddToCardController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderProductController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\WelcomController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::get('/', [WelcomController::class, 'index'])->name('welcome');

Route::get('/add-to-cart', [AddToCardController::class, 'index'])->name('add-to-card');
Route::get('/blog', [BlogController::class, 'index'])->name('blog');
Route::get('/contact', [BlogController::class, 'contact'])->name('contact');
Route::get('/product/{id}/show', [ProductController::class, 'show'])->name('product.show');
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::get('/user/profile', [ProfileController::class, 'userProfile'])->name('user.profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'checkrole:1,2'])->group(function () {
    Route::post('/orders', [OrderController::class, 'store'])->name('order.store');
});
Route::middleware(['auth', 'checkrole:0,1'])->group(function () {

    // order
    Route::get('/orders', [OrderController::class, 'index'])->name('orders.index');
    Route::get('/order/{id}/products', [OrderProductController::class, 'show'])->name('order.products.show');
    Route::delete('/orders/{id}/delete', [OrderController::class, 'destroy'])->name('order.destroy');
    Route::post('/orders/{id}/status', [OrderController::class, 'updateStatus'])->name('order.status');

    //product
    Route::get('/products', [ProductController::class, 'index'])->name('products.index');
    Route::get('/product/create', [ProductController::class, 'create'])->name('product.create');
    Route::delete('/product/{id}/delete', [ProductController::class, 'destroy'])->name('product.destroy');
    Route::get('/product/{id}/edit', [ProductController::class, 'edit'])->name('product.edit');
    Route::post('/product/{id}/update', [ProductController::class, 'update'])->name('product.update');
    Route::post('/product/create', [ProductController::class, 'store'])->name('product.store');
});

Route::middleware(['auth', 'checkrole:0'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

// User
    Route::get('/users', [UserController::class, 'index'])->name('users.index');
    Route::get('/user/create', [UserController::class, 'create'])->name('user.create');
    Route::post('/user/create', [UserController::class, 'store'])->name('user.store');
    Route::delete('/user/{id}/delete', [UserController::class, 'destroy'])->name('user.destroy');
    Route::get('/user/{id}/edit', [UserController::class, 'edit'])->name('user.edit');
    Route::post('/user/{id}/update', [UserController::class, 'update'])->name('user.update');
});

require __DIR__ . '/auth.php';