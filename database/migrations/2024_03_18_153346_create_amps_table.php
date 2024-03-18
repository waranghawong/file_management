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
        Schema::create('amps', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->foreignIdFor(Pmr::class);
            $table->bigInteger('pr_recieved');
            $table->bigInteger('pr_for_rfqs');
            $table->bigInteger('rfq_for_posting');
            $table->bigInteger('rfq_for_canvass');
            $table->bigInteger('rfq_returned');
            $table->bigInteger('rfq_for_deliberation');
            $table->bigInteger('rfq_for_abstract');
            $table->bigInteger('original_abstract');
            $table->bigInteger('bac_resolution');
            $table->bigInteger('noa_contract_supply');
            $table->bigInteger('justification');
            $table->bigInteger('pr_supply');
            $table->bigInteger('pr_end_user');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('amps');
    }
};
