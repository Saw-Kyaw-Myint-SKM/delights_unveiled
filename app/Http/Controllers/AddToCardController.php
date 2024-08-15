<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class AddToCardController extends Controller
{
    public function index()
    {
        if (auth()->check() && auth()->user()->role == 0) {
            return redirect()->route('welcome');
        }

        return Inertia::render('Auth/AddToCard');
    }
}