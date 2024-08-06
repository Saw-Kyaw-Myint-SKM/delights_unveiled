<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::with('user')->latest('id')->get();
        return Inertia::render('Auth/Admin/Product/Products', [
            'products' => $products,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia::render('Auth/Admin/Product/CreateProduct');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        $file = $request->file('photo');
        $photo = $file->store('images', 'public');
        $photoPath = Storage::url($photo);
        $product = Product::create([
            'photo' => $photoPath,
            'title' => $request->title,
            'categories' => $request->categories['name'],
            'description' => $request->description,
            'user_id' => auth()->user()->id,
            'price' => $request->price,
        ]);

        return redirect()->route('products.index')->with('status', 'success');
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        return Inertia::render('Auth/ShowProduct');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
