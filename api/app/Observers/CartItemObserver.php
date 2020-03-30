<?php

namespace App\Observers;

use App\Cart\CartItem;

class CartItemObserver
{
    public function creating(CartItem $item)
    {
        $this->setTotals($item);
    }

    public function saving(CartItem $item)
    {
        $this->setTotals($item);
    }

    public function updating(CartItem $item)
    {
        $this->setTotals($item);
    }

    public function deleting(CartItem $item)
    {
        $this->setTotals($item);
    }

    protected function setTotals(CartItem $item)
    {
        $item->line_total = round($item->product->price * $item->qty, 2);
    }
}
