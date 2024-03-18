<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Pmr;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('competitive', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Pmr::class);
            $table->date('pre_proc_conf');
            $table->date('elligibilty_check');
            $table->date('post_quality');
            $table->date('contract_signing');
            $table->date('posting_on_philgeps');
            $table->date('opening_canvass');
            $table->date('date_of_bac');
            $table->date('notice_of_proceed');
            $table->date('pre_bid_conf');
            $table->date('bid_eveluation');
            $table->date('notice_of_award');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('competitive');
    }
};
