<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@admin.com',
            'role' => 0,
        ]);

        \App\Models\User::factory()->create([
            'name' => 'Customer',
            'email' => 'customer@customer.com',
            'role' => 2,
        ]);

        \App\Models\User::factory()->create([
            'name' => 'producer',
            'email' => 'producer@producer.com',
            'role' => 1,
        ]);

        \App\Models\User::factory(5)->create();
        \App\Models\Product::factory(5)->create();
        \App\Models\Order::factory(5)->create();
        \App\Models\OrderProduct::factory(5)->create();
    }
}
