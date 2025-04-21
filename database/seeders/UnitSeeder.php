<?php

namespace Database\Seeders;

use Unit;
use Project;
use Illuminate\Database\Seeder;

class UnitSeeder extends Seeder
{
    public function run(): void
    {
        Project::all()->each(function ($project) {
            Unit::factory()->count(3)->create([
                'project_id' => $project->id,
            ]);
        });
    }
}

