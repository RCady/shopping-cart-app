<?php

namespace App;

use App\Cart\CartItem;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    protected $with = ['items'];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($cart) {
            $cart->{$cart->getKeyName()} = (string) \Str::uuid();
        });
    }

    public function items()
    {
        return $this->hasMany(CartItem::class);
    }

    public function getIncrementing()
    {
        return false;
    }

    public function getKeyType()
    {
        return 'string';
    }
}
