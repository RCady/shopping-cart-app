<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Product;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    $faker->addProvider(new \Bezhanov\Faker\Provider\Commerce($faker));
    return [
        'name' => $faker->productName(),
        'short_description' => $faker->sentences(2, true),
        'description' => $faker->paragraphs(4, true),
        'price' => $faker->randomFloat(2, 0, 100),
    ];
});
