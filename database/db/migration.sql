DROP DATABASE IF EXISTS people_also_bought;

CREATE DATABASE people_also_bought;
\c people_also_bought
DROP TABLE IF EXISTS related_products;

CREATE TABLE related_products(
    id SERIAL UNIQUE PRIMARY KEY,
    asin_id VARCHAR,
    picture TEXT,
    product_name TEXT,
    rating NUMERIC,
    reviews INTEGER,
    category TEXT,
    price NUMERIC
);

INSERT INTO related_products (asin_id, picture, product_name, rating, reviews, category, price)
    VALUES
    ('B09V3HN1KC', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-11-select-wifi-silver-202104_FMT_WHH?wid=1945&hei=2000&fmt=jpeg&qlt=95&.v=1617126626000',
    '2021 Apple 11-inch iPad Pro (Wi-Fi, 128GB) - Silver',
    4.9, 5180, 'Electronics', 749.00);
