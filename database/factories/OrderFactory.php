<?php

namespace Database\Factories;

use App\Models\Order;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Order>
 */
class OrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $cartNumber = $this->faker->unique()->numberBetween(1, 10000);
        return [
            'user_id' => User::factory(),
            'phone' => "09" . $this->faker->numberBetween(100000000, 999999999),
            'payment' => 'cash',
            'address' => 'ddd',
            'address' => 1,
            'total_price' => $this->faker->randomFloat(2, 1, 100),
            'cart_number' => "$cartNumber",
        ];
    }
}