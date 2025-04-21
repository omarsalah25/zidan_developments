<?php

namespace Database\Factories;

use App\Models\ConstructionUpdate;
use App\Models\Unit;
use Illuminate\Database\Eloquent\Factories\Factory;

class ConstructionUpdateFactory extends Factory
{
    protected $model = ConstructionUpdate::class;

    public function definition(): array
    {
        return [
            'unit_id' => Unit::inRandomOrder()->first()->id ?? Unit::factory(),
            'construction_update' => '<p>' . $this->faker->paragraph() . '</p>',
            'construction_update_ar' => '<p>' . 'تحديث: ' . $this->faker->sentence() . '</p>',
        ];
    }
}

