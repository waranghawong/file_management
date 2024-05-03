<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Amp;
use App\Models\Competitive;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Pmr extends Model
{
    use HasFactory;

    protected $table = 'pmr';

    protected $fillable = [
        'id',
        'user_id',
        'pr_number',
        'rfq_number',
        'procurement_project',
        'end_user',
        'source_of_funds' ,
        'supplier',
        'abc',
        'contract_amount',
        'status', 
    ];

    protected $guarded = [];

    protected $with = ['user', 'amps', 'competitive'];


    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function amps()
    {
        return $this->hasOne(Amp::class, 'pmr_id', 'id');
    }
    public function competitive()
    {
        return $this->hasOne(Competitive::class, 'pmr_id', 'id');
    }
}
