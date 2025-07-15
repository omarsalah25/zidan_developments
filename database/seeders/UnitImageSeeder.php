<?php

namespace Database\Seeders;

use App\Models\Unit;
use App\Models\UnitImage;
use Illuminate\Database\Seeder;


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
