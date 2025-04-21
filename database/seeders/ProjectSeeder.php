<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Project;

class ProjectSeeder extends Seeder
{
    public function run(): void
    {
        Project::factory()->count(5)->create();
    }
}

