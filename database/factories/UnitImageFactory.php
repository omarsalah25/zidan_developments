<?php

namespace Database\Factories;

use App\Models\UnitImage;
use App\Models\Unit;
use Illuminate\Database\Eloquent\Factories\Factory;

class UnitImageFactory extends Factory
{
    protected $model = UnitImage::class;

    public function definition(): array
    {
        return [
            'unit_id' => Unit::inRandomOrder()->first()->id ?? Unit::factory(),
            'image' => 'unit-images/' . $this->faker->image('public/storage/unit-images', 640, 480, null, false),
        ];
    }
}
