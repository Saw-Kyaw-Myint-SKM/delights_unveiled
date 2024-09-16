<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('photo');
            $table->string('title');
            $table->text('description');
            $table->string('city');
            $table->integer('rating')->default(3);
            $table->integer('totalStars')->default(5);
            $table->enum('categories', ['food', 'furniture']);
            $table->bigInteger('total_order')->default(0);
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->bigInteger('price');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};