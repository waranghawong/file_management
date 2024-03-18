<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Files extends Model
{
    use HasFactory;

    protected $table = 'files';

    protected $fillable = [
        'user_id',
        'file_name',
        'file_path',
        'description',
    ];

    protected $guarded = [];

    protected $with = ['user'];

    
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    
}
