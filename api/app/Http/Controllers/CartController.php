<?php

namespace App\Http\Controllers;

use App\Cart;
use App\Cart\CartItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class CartController extends Controller
{
    public function __construct()
    {
        // If a cart doesn't exist, we should create one
        $this->middleware(function ($request, $next) {
            if (!session()->has('cart')) {
                $cart = Cart::create();
            } else {
                $sessionCart = session()->get('cart');
                $cart = Cart::find($sessionCart->id);
                if (!$cart) {
                    $cart = Cart::create();
                }
            }

            session(['cart' => $cart]);
            return $next($request);
        });
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $cart = $request->session()->get('cart');
        return response()->json([ 'data' => $cart ]);
    }

    public function addToCart(Request $request)
    {
        $cart = $request->session()->get('cart');

        if ($request->has('product_id')) {
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

            $cart->save();
        }

        $cart = Cart::find($cart->id);
        return response()->json([ 'data' => $cart ]);
    }

    public function removeFromCart(Request $request, $id)
    {
        $cart = $request->session()->get('cart');
        if ($id) {
            $item = $cart->items->where('id', $id)->first();
            if ($item) {
                $item->delete();
                $cart->save();
            }
        }

        $cart = Cart::find($cart->id);
        return response()->json([ 'data' => $cart ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateCartItem(Request $request, $id)
    {
        $cart = $request->session()->get('cart');
        if ($id && $request->has('qty')) {
            $item = $cart->items->where('id', $id)->first();
            if ($item) {
                $item->qty = $request->get('qty');
                $item->save();
            }
        }

        $cart = Cart::find($cart->id);
        return response()->json([ 'data' => $cart ]);
    }
}
