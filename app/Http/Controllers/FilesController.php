<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Files;
use Inertia\Inertia;

class FilesController extends Controller
{
    public function index()
    {
        $files = Files::with('user:users.id,name')->paginate(10);
        return Inertia::render('InsertFile', [
            'files' => $files
        ]);
    }


    function addFiles(Request $request)
    {   
        $files = new Files;
        $files->user_id=$request->input('uploader_id');
        $files->file_name=$request->input('file_name');
        $files->description=$request->input('description');
        $files->file_path=$request->file('file')->store('files');
        $files->save();
        return $files;
    }

    function storePmr(Request $request){
        return 'pmr';
    }
}
 