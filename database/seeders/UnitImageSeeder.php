<?php

namespace Database\Seeders;


use Illuminate\Database\Seeder;
use Unit;
use UnitImage;

class UnitImageSeeder extends Seeder
{
    public function run(): void
    {
        Unit::all()->each(function ($unit) {
            UnitImage::factory()->count(4)->create([
                'unit_id' => $unit->id,
            ]);
        });
    }
}
