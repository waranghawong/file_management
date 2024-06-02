<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Pmr;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Amp extends Model
{
    use HasFactory;

    protected $table = 'amp';

    
    protected $fillable = [
        'pmr_id',
        'pr_recieved',
        'pr_for_rfqs',
        'rfq_for_posting',
        'rfq_for_canvass',
        'rfq_returned',
        'rfq_for_deliberation',
        'rfq_for_abstract',
        'original_abstract',
        'bac_resolution',
        'noa_contract_supply',
        'justification',
        'pr_supply',
        'pr_end_user',
        'amp_others',
    ];

   

    protected $guarded = [];

    public function pmr() : BelongsTo
    {
        return $this->belongsTo(Pmr::class);
    }


}
