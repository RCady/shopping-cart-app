<?php

namespace App\Http\Controllers;

use App\Cart;
use App\Cart\CartItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class CartController extends Controller
{
    public function store(Request $request)
    {
        $cart = Cart::create();
        $request->validate([
            'product_id' => 'exists:products,id',
            'qty' => 'integer'
        ]);

        if ($request->has('product_id')) {
            $cart->items()->create([
                'product_id' => $request->get('product_id'),
                'qty' => $request->get('qty') ?? 1,
            ]);

        }

        $cart->refresh();
        return response()->json([ 'data' => $cart ]);
    }

    public function show(Request $request, Cart $cart)
    {
        return response()->json([ 'data' => $cart ]);
    }

    public function addItemToCart(Request $request, Cart $cart)
    {
        $request->validate([
            'product_id' => 'required|exists:products,id',
            'qty' => 'integer'
        ]);

        $qty = 1;
        if ($request->has('qty')) {
            $qty = $request->get('qty');
        }

        $existingItem = $cart->items->where('product_id', $request->product_id)->first();
        if ($existingItem) {
            $existingItem->qty += $qty;
            $existingItem->save();
        } else {
            $cart->items()->create([
                'product_id' => $request->product_id,
                'qty' => $qty
            ]);
        }

        $cart->push();
        return response()->json([ 'data' => $cart ]);
    }

    public function deleteCartItem(Request $request, Cart $cart, CartItem $cartItem)
    {
        $cart->items()->where('id', $cartItem->id)->delete();
        $cart->push();

        $cart->refresh();
        return response()->json([ 'data' => $cart ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateCartItem(Request $request, Cart $cart, CartItem $cartItem)
    {
        $request->validate([
            'qty' => 'required|integer'
        ]);

        $cartItem->update([
            'qty' => $request->get('qty')
        ]);
        $cart->push();

        $cart->refresh();
        return response()->json([ 'data' => $cart ]);
    }
}
