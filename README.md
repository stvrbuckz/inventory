# shop-inventory overview
This is an inventory that will track the store's stock items and levels. 

# system requirements
1. Install PostgreSQL 13.2 (https://www.postgresql.org/download/)
2. Knex.js: a JS library for creating DB schemas and queries

# create inventory database
1. Create an empty database in psql shell
`` CREATE DATABASE inventory
2. Connect to the database
`` \c inventory

# backend setup
1. install dependencies: `npm install`
2. migrate the database: `npm run migrate`
3. seed the database: `\i` followed by the relative path of the backend/db/seed.sql file. e.g C:/Users/user/Documents/Project/WebApp/V.2/backend/db/seed.sql (must be forward slashes / )
OR
copy and paste contents of 'seed.sql' into the psql shell 


    # create database
    Enter commands into terminal to initialize the database:
    1. Creates an empty database.
    `` CREATE DATABASE inventory
    2. Connect to the database
    `` \c inventory
    3. Copy and paste the contents of the seed.sql file into the psql shell

createdb shopinventory
psql -f schema.sql shopinventory && psql -f seed.sql shopinventory
``
