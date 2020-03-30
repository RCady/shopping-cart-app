<?php

namespace App\Providers;

use App\Cart;
use App\Cart\CartItem;
use App\Observers\CartObserver;
use App\Observers\CartItemObserver;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Cart::observe(CartObserver::class);
        CartItem::observe(CartItemObserver::class);
    }
}
