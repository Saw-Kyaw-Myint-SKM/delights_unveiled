<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactRequest;
use App\Mail\ContactMial;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store(StoreContactRequest $request)
    {
        $adminMail = env('Admin_Email');
        $description = [
            "name" => $request->name,
            "email" => $request->email,
            "description" => $request->description,
        ];
        Mail::to($adminMail)->send(new ContactMial($description));

        return back()->with('status', "success mail");
    }
}
