<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'product_id',
        'phone',
        'address',
        "payment",
        'total_price',
        "evidence",
        "status",
        'cart_number',
    ];

    /**
     * Get the user that owns the order.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the product associated with the order.
     */
    public function products()
    {
        return $this->belongsToMany(Product::class, 'order_products')
            ->withTimestamps();
    }
    public function orderProducts()
    {
        return $this->hasMany(OrderProduct::class);
    }
}
