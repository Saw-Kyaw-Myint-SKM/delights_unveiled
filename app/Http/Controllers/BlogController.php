<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class BlogController extends Controller
{
    public function index()
    {
        return Inertia::render('Blog');
    }

    public function contact()
    {
        return Inertia::render('Contact');
    }
}
