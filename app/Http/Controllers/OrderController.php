<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOrderRequest;
use App\Models\Order;
use App\Models\OrderProduct;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $searchTerm = $request->input('search');
        if (auth()->user()->role == 2) {
            $orders = Order::with(['user', 'products'])
                ->where('user_id', auth()->user()->id)
                ->whereHas('user', function ($query) use ($searchTerm) {
                    $query->where('name', 'like', "%{$searchTerm}%");
                })
                ->latest('id')
                ->get();

            return Inertia::render('Auth/Customer/Order/Orders', [
                'orders' => $orders,
                'searchValue' => $searchTerm,
            ]);
        }

        $orders = Order::with(['user', 'products'])
            ->when(auth()->user()->role == 1, function ($query) {
                $query->whereHas('products', function ($query) {
                    $query->where('user_id', auth()->id()); // Apply this filter if role is 1
                });
            })
            ->whereHas('products', function ($query) use ($searchTerm) {
                $query->where('title', 'like', "%{$searchTerm}%");
            })
            ->latest('id')
            ->get();

        return Inertia::render('Auth/Admin/Order/Orders', [
            'orders' => $orders,
            'searchValue' => $searchTerm,
        ]);
    }

    /**
     *
     * the form for creating a new resource.
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
        // dd($request->toArray());
        $userId = auth()->id();
        $firstLetter = substr(auth()->user()->name, 0, 1);
        $randomNumber = mt_rand(1000, 9999);
        $cart_number = $userId . $firstLetter . $randomNumber;

        $photoPath = '';
        if ($request->hasFile('evidence')) {
            $file = $request->file('evidence');
            $photo = $file->store('images', 'public');
            $photoPath = Storage::url($photo);
        }
        $order = Order::create(['user_id' => auth()->user()->id,
            'phone' => $request->phone,
            'address' => $request->address,
            'payment' => $request->payment,
            'total_price' => $request->total_price,
            'evidence' => $photoPath,
            'cart_number' => $cart_number,
        ]);
        foreach ($request->orders as $key => $product) {
            OrderProduct::create([
                "order_id" => $order->id,
                "product_id" => $product['id'],
                "quantity" => $product['quantity'],
                "price" => $product['price'],
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
    public function updateStatus(Request $request, $id)
    {
        $order = Order::find($id);
        $status = $request->status == "new" ? "complete" : "new";
        $order->update([
            "status" => $status,
        ]);

        return back()->with('status', "status is successfully");
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