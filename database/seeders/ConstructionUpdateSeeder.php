<?php

namespace Database\Seeders;

use App\Models\ConstructionUpdate;
use App\Models\Unit;
use Illuminate\Database\Seeder;

class ConstructionUpdateSeeder extends Seeder
{
    public function run(): void
    {
        Unit::all()->each(function ($unit) {
            ConstructionUpdate::create([
                'unit_id' => $unit->id,
                'construction_update' => '<p>Initial update in English</p>',
                'construction_update_ar' => '<p>تحديث مبدئي بالعربية</p>',
            ]);
        });
    }
}



