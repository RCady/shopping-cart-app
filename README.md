## A simple shopping cart application

### Setting up the project for development
1. `git clone git@github.com:RCady/shopping-cart-app.git`
2. Setup the API
    1. From project root: `cd api`
    2. `cp .env.example .env`
    3. `composer install`
    4. `php artisan key:generate`
    5. Configure `.env` to point to a local database
    6. `php artisan migrate:fresh --seed`
    7. `php artisan serve`
3. Setup the Frontend (Gatsby)
    1. From project root: `cd frontend`
    2. `npm i`
    3. `npm run develop`

The API is accessible at `http://localhost:8001/api`

The Gatsby frontend is accessible at `http://localhost:8000`

Copyright 2020 Ryan Cady All rights served
