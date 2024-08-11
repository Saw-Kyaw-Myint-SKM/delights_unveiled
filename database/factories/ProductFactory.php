<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'photo' => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAgS_C07GNqBfFcnJUdyG4fdg4YHgsaLd34w&s",
            'title' => $this->faker->word,
            'description' => $this->faker->paragraph,
            'categories' => $this->faker->randomElement(['food', 'furniture']),
            'total_order' => $this->faker->numberBetween(100, 1000), // Random float with 2 decimal places
            'user_id' => User::factory(),
            'price' => $this->faker->numberBetween(100, 10000),
        ];
    }
}