# shop-inventory

# system requirements
1. Install PostgreSQL (https://www.postgresql.org/download/)

# backend setup
1. install dependencies: `npm install`
2. migrate the database `npm run migrate`

# create database
Enter commands into terminal to initialize the database:
1. Creates an empty database.
`` 
2. Populates the tables with data.
``
createdb shopinventory
psql -f schema.sql shopinventory && psql -f seed.sql shopinventory
``
