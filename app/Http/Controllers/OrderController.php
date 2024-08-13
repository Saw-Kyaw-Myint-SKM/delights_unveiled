<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOrderRequest;
use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $searchTerm = $request->input('search');
        $orders = Order::with(['user', 'product'])
            ->whereHas('user', function ($query) use ($searchTerm) {
                $query->where('name', 'like', "%{$searchTerm}%");
            })
            ->latest('id')
            ->get();
        return Inertia::render('Auth/Admin/Order/Orders', [
            'orders' => $orders,
            'searchValue' => $searchTerm,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreOrderRequest $request)
    {
        $userId = auth()->id();
        $firstLetter = substr(auth()->user()->name, 0, 1);
        $randomNumber = mt_rand(1000, 9999);
        $cart_number = $userId . $firstLetter . $randomNumber;

        foreach ($request->orders as $key => $order) {
            Order::create([
                'user_id' => auth()->user()->id,
                'product_id' => $order['id'],
                'quantity' => $order['quantity'],
                'price' => $order['price'],
                'payment' => $request->payment,
                'total_price' => $request->total_price,
                'cart_number' => $cart_number,
            ]);
        }

        return redirect()->route('welcome')->with('status', 'Order is successful');
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $order = Order::find($id);
        $order->delete();
        return back()->with('status', 'delete order');
    }
}