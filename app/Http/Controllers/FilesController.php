<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Models\Files;
use App\Models\FolderName;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class FilesController extends Controller
{
    public function index()
    {
        $files = Files::with('user:users.id,name')->paginate(10);
        $folder_name = FolderName::select(['id as value','folder_name as label'])->get();
        return Inertia::render('InsertFile', [
            'files' => $files,
            'folder_name' => $folder_name
        ]);
    }


    function addFiles(Request $request)
    {   
        $files = new Files;
        $asd = FolderName::where('id', $request['folder_id'])->exists();

        $folder = $request['folder_name'];

        if($asd){

            $files->user_id=$request->input('uploader_id');
            $files->file_name=$request->input('file_name');
            $files->folder_name_id=$request->input('folder_id');
            $files->description=$request->input('description');
            $files->file_path=$request->file('file')->store($folder);
            $files->save();
            
        }
        else{
         
        
            $folder_name = new FolderName;
            $folder_name->folder_name=$request['folder_name'];
            $folder_name->save();

            $id = $folder_name->id;

            $files->user_id=$request->input('uploader_id');
            $files->file_name=$request->input('file_name');
            $files->folder_name_id=$request->input('folder_id');
            $files->description=$request->input('description');
            $files->file_path=$request->file('file')->store($folder);
            $files->save();
        }

    }

    function storePmr(Request $request){
        return 'pmr';
    }

    public function edit(string $id){
        $get_file = Files::where('id', $id)->with('folder')->get();

        foreach($get_file as $data){
            $data = $data->folder;
        }


        return Inertia::render('Admin/EditFile', [
            'get_file' => $get_file == false ? '' : $get_file[0],
            'folder_name' => ucfirst($data->folder_name)
        ]);
        
    }

    public function viewpdf(string $id){
        $get_file = Files::where('id', $id)->with('folder')->get();
        foreach($get_file as $data){
            $dir = $data->file_path;
        }
        $path = Storage::path($dir);
        return response()->file($path);
    }
}
 