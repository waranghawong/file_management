<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\FolderName;
use App\Models\SubFolder;

class Files extends Model
{
    use HasFactory;

    protected $table = 'files';

    protected $fillable = [
        'user_id',
        'file_name',
        'file_path',
        'subfolder_name_id',
        'folder_dir',
        'description',
    ];

    protected $guarded = [];

    protected $with = ['user','folder','subfolder'];

    
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function folder()
    {
        return $this->belongsTo(FolderName::class, 'folder_name_id', 'id');
    }

    public function subfolder(){
        return $this->belongsTo(SubFolder::class, 'subfolder_name_id', 'id');
    }
    
}
