<?php

namespace App\Http\Controllers\CustomerPanel;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Pmr;
use App\Models\Files;

class CustomerController extends Controller
{
    public function index()
    {
        $users =  User::all()->count();
        $pmr =  Pmr::all()->count();
        $files =  Files::all()->count();

        return Inertia::render('Customer/Dashboard', [
            'users' => $users,
            'pmr'=> $pmr,
            'files'=> $files,
        ]);
    }
}
