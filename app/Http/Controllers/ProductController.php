<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $searchTerm = $request->input('search');
        $products = Product::with('user')->where('title', 'like', "%{$searchTerm}%")
            ->orWhere('description', 'like', "%{$searchTerm}%")->latest('id')->get();

        return Inertia::render('Auth/Admin/Product/Products', [
            'products' => $products,
            'searchValue' => $searchTerm,
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
            'city' => $request->city,
        ]);

        return redirect()->route('products.index')->with('status', 'success');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $product = Product::with('user')->find($id);
        return Inertia::render('Auth/ShowProduct',
            [
                'product' => $product,
            ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $product = Product::find($id);
        return Inertia::render('Auth/Admin/Product/EditProduct', [
            'product' => $product,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, $id)
    {
        $product = Product::find($id);
        if (!$product) {
            return redirect()->back()->withErrors(['error' => 'Product not found']);
        }
        $photoPath = '';
        if ($request->hasFile('photo')) {
            $oldPhotoPath = $product->photo;
            if ($oldPhotoPath) {
                $relativePath = str_replace('/storage/', '', $oldPhotoPath);
                if (Storage::disk('public')->exists($relativePath)) {
                    Storage::disk('public')->delete($relativePath);
                }
            }
            $file = $request->file('photo');
            $photo = $file->store('images', 'public');
            $photoPath = Storage::url($photo);
            $product->photo = $photoPath;
        }

        $product->title = $request->title;
        $product->categories = $request->categories['name'];
        $product->description = $request->description;
        $product->price = $request->price;
        $product->city = $request->city;
        $product->save();
        return redirect()->route('products.index')->with('status', 'success');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $product = Product::find($id);
        $oldPhotoPath = $product->photo;
        if ($oldPhotoPath) {
            $relativePath = str_replace('/storage/', '', $oldPhotoPath);
            if (Storage::disk('public')->exists($relativePath)) {
                Storage::disk('public')->delete($relativePath);
            }
        }
        $product->delete();
        return back()->with('status', 'delete success');
    }
}