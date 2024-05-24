<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Files;

class SubFolder extends Model
{
    use HasFactory;
    protected $table = 'sub_folder';

    protected $fillable = [
        'id',
        'user_id',
        'folder_id',
        'folder_name',
    ];

    protected $guarded = [];

    protected $primaryKey = 'id';

    public function files() : BelongsTo
    {
        return $this->hasMany(File::class);
    }


}
