<?php

namespace Database\Seeders;

use Amenity;
use Illuminate\Database\Seeder;

class AmenitySeeder extends Seeder
{
    public function run(): void
    {
        $names = ['Swimming Pool', 'Gym', 'Parking', 'Security'];
        $names_ar = ['حمام سباحة', 'صالة ألعاب رياضية', 'موقف سيارات', 'أمن'];

        foreach ($names as $index => $name) {
            Amenity::create([
                'name' => $name,
                'name_ar' => $names_ar[$index],
                'icon' => 'icon-placeholder.png',
            ]);
        }
    }
}


