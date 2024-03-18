<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Pmr;

class Competitive extends Model
{
    use HasFactory;

    protected $table = 'competitive';

    protected $fillable = [
        'pmr_id',
        'pre_proc_conf',
        'elligibilty_check',
        'post_quality',
        'contract_signing',
        'posting_on_philgeps',
        'opening_canvass',
        'date_of_bac',
        'notice_of_proceed',
        'pre_bid_conf',
        'bid_eveluation',
        'notice_of_award',
    ];

    protected $guarded = [];


    public function pmr()
    {
        return $this->belongsTo(Pmr::class);
    }
}
