<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class AddToCardController extends Controller
{
    public function index()
    {
        if (auth()->user()->role == 0) {
            return redirect()->route('welcom');
        }

        return Inertia::render('Auth/AddToCard');
    }
}
