<?php

namespace App\Cart;

use Illuminate\Database\Eloquent\Model;
use App\Cart;

class CartItem extends Model
{
    public function cart()
    {
        return $this->belongsTo(Cart::class);
    }
}
