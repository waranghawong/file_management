<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\FolderName;

class Files extends Model
{
    use HasFactory;

    protected $table = 'files';

    protected $fillable = [
        'user_id',
        'file_name',
        'file_path',
        'folder_dir',
        'description',
    ];

    protected $guarded = [];

    protected $with = ['user'];

    
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function folder()
    {
        return $this->belongsTo(FolderName::class, 'folder_name_id', 'id');
    }
    
}
