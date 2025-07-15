<?php

namespace Database\Factories;

use App\Models\Unit;
use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UnitFactory extends Factory
{
    protected $model = Unit::class;

    public function definition(): array
    {
        return [
            'project_id' => Project::inRandomOrder()->first()->id ?? Project::factory(),
            'title' => $this->faker->sentence(2),
            'title_ar' => 'وحدة ' . $this->faker->word(),
            'desc' => $this->faker->paragraph(),
            'desc_ar' => 'تفاصيل ' . $this->faker->sentence(),
            'slug'=>Str::slug($this->faker->word()),
            'thumbnail' => 'units/' . $this->faker->image('public/storage/units', 640, 480, null, false),
            'location' => $this->faker->address(),
            'location_ar' => 'الموقع: ' . $this->faker->city(),
            'construction_update' => '<p>' . $this->faker->paragraph() . '</p>',
            'construction_update_ar' => '<p>' . 'تحديث: ' . $this->faker->sentence() . '</p>',
        ];
    }
}

