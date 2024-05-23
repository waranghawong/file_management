<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\User;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pmr', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class);
            $table->string('pr_number');
            $table->string('rfq_number');
            $table->string('procurement_project');
            $table->string('end_user')->nullable();
            $table->string('source_of_funds')->nullable();
            $table->string('abc')->nullable();
            $table->string('contract_amount')->nullable();
            $table->string('supplier')->nullable();
            $table->enum('status',['awarded', 'failed', 'close', 'partially_awarded', 'cancelled', 'inprocess', 'others'])->nullable('');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pmr');
    }
};
