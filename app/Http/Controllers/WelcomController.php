<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class WelcomController extends Controller
{
    public function index(Request $request)
    {
        $searchTerm = $request->input('search');
        $category = $request->input('category');
        $products = Product::with('user')
            ->where(function ($query) use ($searchTerm) {
                $query->where('title', 'like', "%{$searchTerm}%")
                    ->orWhere('description', 'like', "%{$searchTerm}%");
            })
            ->when($category && $category !== 'all', function ($query) use ($category) {
                $query->where('categories', 'like', "%{$category}%");
            })
            ->latest('id')
            ->get();
        return Inertia::render('Welcome', [
            'user' => auth()->user(),
            'isAuthenticated' => auth()->check(),
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'products' => $products,
            'searchValue' => $searchTerm,
            'categoryValue' => $category,
        ]);
    }
}