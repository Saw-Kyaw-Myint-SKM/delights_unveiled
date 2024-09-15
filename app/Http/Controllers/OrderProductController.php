<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Inertia\Inertia;

class OrderProductController extends Controller
{
    public function show($id)
    {
        $order = null;
        if (auth()->user()->role == 0) {
            $order = Order::with('orderProducts.product')->find($id);
        }
        if (auth()->user()->role == 1) {
            $order = Order::with(['orderProducts' => function ($query) {
                $query->whereHas('product', function ($query) {
                    $query->where('user_id', auth()->user()->id); // Exclude products created by the authenticated user
                });
            }, 'orderProducts.product'])->find($id);
        }
        if (auth()->user()->role == 2) {
            $order = $order = Order::with('orderProducts.product')->where('user_id', auth()->user()->id)->find($id);
            return Inertia::render('Auth/Customer/Order/Products', [
                'order' => $order,
            ]);
        }
        return Inertia::render('Auth/Admin/Order/Products', [
            'order' => $order,
        ]);
    }
}