<?php

namespace App;

use App\Cart\CartItem;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    protected $with = ['items'];

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
