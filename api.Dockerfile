FROM php:7.3-fpm

RUN apt-get update && apt-get install -y \
    build-essential \
    git \
    curl

RUN docker-php-ext-install pdo_mysql
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

CMD ["php-fpm"]
