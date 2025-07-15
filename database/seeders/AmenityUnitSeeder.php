<?php

namespace Database\Seeders;

use App\Models\Amenity;
use App\Models\Unit;
use Illuminate\Database\Seeder;

class AmenityUnitSeeder extends Seeder
{
    public function run(): void
    {
        $amenities = Amenity::all();

        Unit::all()->each(function ($unit) use ($amenities) {
            $unit->amenities()->attach(
                $amenities->random(rand(1, 3))->pluck('id')->toArray()
            );
        });
    }
}



