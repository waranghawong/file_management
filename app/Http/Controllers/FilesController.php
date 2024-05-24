<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Models\Files;
use App\Models\SubFolder;
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
            $files->folder_name_id=$id;
            $files->description=$request->input('description');
            $files->file_path=$request->file('file')->store($folder);
            $files->save();
        }

    }

    function uploadfilesubfolder(Request $request)
    { 
        $files = new Files;
        $asd = SubFolder::where('id', $request['subfolder_id'])->exists();

        $folder = $request['folder_name'];

        if($asd){

            $files->user_id=$request->input('uploader_id');
            $files->file_name=$request->input('file_name');
            $files->folder_name_id=$request->input('folder_id');
            $files->description=$request->input('description');
            $files->subfolder_name_id=$request->input('subfolder_id');
            $files->file_path=$request->file('file')->store($folder);
            $files->save();
            
        }
        elseif(empty($request['subfolder_name'])){
            $files->user_id=$request->input('uploader_id');
            $files->file_name=$request->input('file_name');
            $files->folder_name_id=$request->input('folder_id');
            $files->description=$request->input('description');
            $files->subfolder_name_id=$request->input('subfolder_id');
            $files->file_path=$request->file('file')->store($folder);
            $files->save();
        }
        else{
         
        
            $folder_name = new SubFolder;
            $folder_name->folder_id=$request['folder_id'];
            $folder_name->folder_name=$request['subfolder_name'];
            $folder_name->user_id=$request['uploader_id'];
            $folder_name->save();

            $id = $folder_name->id;

            $files->user_id=$request->input('uploader_id');
            $files->file_name=$request->input('file_name');
            $files->subfolder_name_id=$id;
            $files->description=$request->input('description');
            $files->folder_name_id=$request->input('folder_id');
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
            'folder_name' => $data == false ? '' : ucfirst($data->folder_name)
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

    public function destroy(string $id)
    {

        $user=Files::find($id);
        $user->delete(); 

        return redirect()->route('admin.upload');
    }

    public function show_files(string $id){
        $get_file = Files::where('subfolder_name_id', $id)->with('folder')->paginate(10);
        $get_subfolder = SubFolder::select(['id as value','folder_name as label'])->where('folder_id', $id)->get();

        return Inertia::render('SubFolder',[
            'get_file' => $get_file,
            'subfolder' => $get_subfolder
         ]);
    }

    public function show_folder(string $id){
        $get_file = Files::where('folder_name_id', $id)->where('subfolder_name_id', null)->with('folder')->get();
        $get_subfolder = SubFolder::select(['id as value','folder_name as label'])->where('folder_id', $id)->get();
        
        return Inertia::render('Files',[
            'get_file' => $get_file,
            'subfolder' => $get_subfolder
         ]);
    }
}
 