<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Files;

class FolderName extends Model
{
    use HasFactory;
    protected $table = 'dir_folder';

    protected $fillable = [
        'id',
        'folder_name',
    ];

    protected $guarded = [];

    protected $primaryKey = 'id';

    public function files() : BelongsTo
    {
        return $this->hasMany(File::class);
    }


}
