<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Files;
use Inertia\Inertia;

class FilesController extends Controller
{
    public function index()
    {
        $files =  Files::paginate(10);
        return Inertia::render('InsertFile', [
            'files' => $files
        ]);
    }


    function addFiles(Request $request)
    {
        $files = new Files;
        $files->user_id=$request->input('user_id');
        $files->file_name=$request->input('file_name');
        $files->description=$request->input('description');
        $files->file_path=$request->file('file')->store('files');
        $files->save();
        return $files;
    }
}
 