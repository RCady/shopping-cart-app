<?php

namespace App\Observers;

use App\Cart;

class CartObserver
{
    public function creating(Cart $cart)
    {
        $cart->{$cart->getKeyName()} = (string) \Str::uuid();
        $this->setTotals($cart);
    }

    public function updating(Cart $cart)
    {
        $this->setTotals($cart);
    }

    public function saving(Cart $cart)
    {
        $this->setTotals($cart);
    }

    protected function setTotals(Cart $cart)
    {
        $cart->load('items');
        $total_price = 0;
        $total_items = 0;
        foreach ($cart->items as $item) {
            $total_price += $item->line_total;
            $total_items += $item->qty;
        }

        $cart->total_price = $total_price;
        $cart->total_items = $total_items;
    }
}
