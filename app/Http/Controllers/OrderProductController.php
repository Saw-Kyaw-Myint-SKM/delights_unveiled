<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Inertia\Inertia;

class OrderProductController extends Controller
{
    public function show($id)
    {
        $order = Order::with('orderProducts.product')->find($id);
        // dd($order->toArray());
        return Inertia::render('Auth/Admin/Order/Products', [
            'order' => $order,
        ]);
    }
}
