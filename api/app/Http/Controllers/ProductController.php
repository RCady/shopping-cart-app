<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $products = Product::all();
        return response()->json([
            'data' => $products
        ]);
    }

    public function show(Request $request, Product $product)
    {
        return response()->json([
            'data' => $product
        ]);
    }
}
