<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
  // database/migrations/xxxx_add_slug_to_projects_and_units_tables.php
public function up()
{
    Schema::table('projects', function (Blueprint $table) {
        $table->string('slug')->nullable()->after('name');
    });

    Schema::table('units', function (Blueprint $table) {
        $table->string('slug')->nullable()->after('name');
    });
}

public function down()
{
    Schema::table('projects', function (Blueprint $table) {
        $table->dropColumn('slug');
    });

    Schema::table('units', function (Blueprint $table) {
        $table->dropColumn('slug');
    });
}

};
