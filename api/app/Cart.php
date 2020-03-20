<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Cart\CartItem;

class Cart extends Model
{
    public function items()
    {
        return $this->hasMany(CartItem::class);
    }
}
