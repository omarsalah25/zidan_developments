<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('units', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('desc')->nullable();
            $table->string('title_ar');
            $table->text('desc_ar')->nullable();
            $table->string('thumbnail')->nullable();
            $table->json('images')->nullable(); // for optional gallery (or you can manage separately)
            $table->foreignId('project_id')->constrained()->onDelete('cascade');
            $table->string('location')->nullable();
            $table->string('location_ar')->nullable();
            $table->longText('construction_update')->nullable(); // for initial update content
            $table->longText('construction_update_ar')->nullable();
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('units');
    }
};
