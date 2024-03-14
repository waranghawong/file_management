<?php

namespace App\Http\Controllers\AdminPanel;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use App\Http\Requests\UpdateUserRequest;
use App\Models\User;


class UsersController extends Controller
{
    public function index()
    {
        $users =  User::latest()->paginate(10);
        
        return Inertia::render('Admin/Users', [
            'users' => $users
        ]);
    }

    public function store(Request $request)
    {
       $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'role' => 'required|string',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => $request->role,
        ]);
        return redirect()->route('users');
    }

    public function create()
    {
        return Inertia::render('Admin/CreateUser'); 
    }

    public function edit(User $userprofile) 
    {
        return  Inertia::render('Profile/EditUser',[
            "userprofile" => $userprofile,
        ]);
    }

    public function update(Request $request, $id)
    {
        $user = User::where('id',$id)->update([
            'name' => $request->name,
            'email' => $request->email,
            'role' => $request->role,
        ]);
        
     
        // $data['role '] = $request->role;
        // $data['name '] = $request->name;
        // $data['email '] = $request->email;
        // $data['id'] = $id;

    }
}
