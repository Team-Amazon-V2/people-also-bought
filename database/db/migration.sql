DROP DATABASE IF EXISTS people_also_bought;

CREATE DATABASE people_also_bought;
\c people_also_bought
DROP TABLE IF EXISTS related_products;

CREATE TABLE related_products(
    id SERIAL UNIQUE PRIMARY KEY,
    picture TEXT,
    product_name TEXT,
    rating NUMERIC,
    reviews INTEGER,
    category TEXT,
    price NUMERIC,
);

