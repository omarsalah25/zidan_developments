<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            ProjectSeeder::class,
            UnitSeeder::class,
            UnitImageSeeder::class,
            AmenitySeeder::class,
            AmenityUnitSeeder::class,
            ConstructionUpdateSeeder::class,
            UserSeeder::class,


        ]);
    }

}
