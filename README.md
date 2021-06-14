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
4. Update the primary key serial sequence in PSQL:
``BEGIN; ``
-- protect against concurrent inserts while you update the counter
``LOCK TABLE product IN EXCLUSIVE MODE;``
-- Update the sequence
``SELECT setval('product_prod_id_seq', COALESCE((SELECT MAX(prod_id)+1 FROM product), 1), false);
COMMIT;
``
createdb shopinventory
psql -f schema.sql shopinventory && psql -f seed.sql shopinventory
``
