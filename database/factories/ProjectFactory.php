<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\Models\Project;

class ProjectFactory extends Factory
{
    protected $model = Project::class;

    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence(3),
            'title_ar' => 'عنوان ' . $this->faker->word(),
            'desc' => $this->faker->paragraph(),
            'desc_ar' => 'وصف ' . $this->faker->sentence(),
            'image' => 'projects/' . $this->faker->image('public/storage/projects', 640, 480, null, false),
            'status' => $this->faker->randomElement(['active', 'inactive']),
        ];
    }
}

