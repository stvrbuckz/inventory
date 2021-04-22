# shop-inventory overview
This is an inventory that will track the store's stock items and levels. 

# system requirements
1. Install PostgreSQL 13.2 (https://www.postgresql.org/download/)
2. Knex.js: a JS library for creating DB schemas and queries

# backend setup
1. install dependencies: `npm install`
2. migrate the database `npm run migrate`
3. seed the database

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
