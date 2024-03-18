<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Pmr extends Model
{
    use HasFactory;

    protected $table = 'pmr';

    protected $fillable = [
        'user_id',
        'pr_number',
        'rfq_number',
        'procurement_project',
        'end_user',
    ];

    protected $guarded = [];

    protected $with = ['user'];


    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
