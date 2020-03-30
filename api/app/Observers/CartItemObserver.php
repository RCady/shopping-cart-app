<?php

namespace App\Observers;

use App\Cart\CartItem;

class CartItemObserver
{
    public function creating(CartItem $item)
    {
        $this->setTotal($item);
    }

    public function saving(CartItem $item)
    {
        $this->setTotal($item);
    }

    public function updating(CartItem $item)
    {
        $this->setTotal($item);
    }

    public function deleting(CartItem $item)
    {
        $this->setTotal($item);
    }

    protected function setTotal(CartItem $item)
    {
        $item->line_total = round($item->product->price * $item->qty, 2);
    }
}
