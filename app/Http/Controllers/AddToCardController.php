<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class AddToCardController extends Controller
{
    public function index()
    {
        return Inertia::render('Auth/AddToCard');
    }
}
