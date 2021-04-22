const Knex = require('knex');

/**
 * @param {Knex} knex 
 */

// \i C:/Users/priya/Documents/Uni/Third/Project/WebApp/V.2/backend/db/seed.sql

// created_at, updated_at and deleted_at timestamp columns
function addDefaultDates(table) {
  table.timestamps(false, true);
  table.datetime('deleted_at');
}

// foreign key connector
function references(table, tableName, columnName, notNullable = true) {
  const definition = table
    .integer(`${columnName || tableName}`)
    .unsigned()
    .references(columnName)
    .inTable(tableName)
    .onDelete('cascade');
  return definition;
}

// creates tables into postgres database
exports.up = async (knex) => {
  await Promise.all([
    knex.schema.createTable('staff', (table) => {
      table.increments('staff_id').notNullable();
      table.string('fname', 30).notNullable();
      table.string('lname', 30).notNullable();
      table.string('staff_email', 254).notNullable().unique();
      table.string('password', 200).notNullable();
      table.string('role', 20).notNullable();
      addDefaultDates(table);
    }),
    knex.schema.createTable('category', (table) => {
      table.increments('cat_id').notNullable();
      table.string('cat_name', 20).notNullable().unique();
      addDefaultDates(table);
    }),
    knex.schema.createTable('supplier', (table) => {
      table.increments('supplier_id').notNullable();
      table.string('supplier_name', 30).notNullable();
      table.string('supplier_address', 50).notNullable();
      table.string('supplier_city', 50).notNullable();
      table.string('supplier_telephone', 15).notNullable();
      table.string('supplier_email', 254).notNullable().unique();
      addDefaultDates(table);
    }),
    await knex.schema.createTable('purchase', (table) => {
      table.increments('purchase_id').notNullable();
      table.datetime('purchase_date').notNullable();
      table.decimal('purchase_amount', 6, 2).notNullable();
      addDefaultDates(table);
    })
  ]);

  await knex.schema.createTable('product', (table) => {
    table.increments('prod_id').notNullable();
    references(table, 'category', 'cat_id');
    table.string('sku', 15).notNullable();
    table.string('prod_name', 80).notNullable();
    table.string('prod_brand', 50).notNullable();
    table.string('prod_size', 20);
    table.string('colour', 10);
    table.decimal('prod_price', 5, 2).notNullable();
    table.string('location', 4);
    table.string('prod_descrip', 150);
    table.boolean('is_available').notNullable();
    table.integer('available_quantity').notNullable();
    table.boolean('is_discount').notNullable();
    table.decimal('discount', 3, 2);
    table.date('manufactured');
    addDefaultDates(table);
  });

  await knex.schema.createTable('productorder', (table) => {
    table.increments('order_id').notNullable();
    references(table, 'staff', 'staff_id');
    table.datetime('order_date').notNullable();
    addDefaultDates(table);
  });

  await knex.schema.createTable('orderdetails', (table) => {
    table.integer('order_id').unsigned().notNullable();
    table.integer('prod_id').unsigned().notNullable();
    table.integer('supplier_id').unsigned().notNullable();
    table.decimal('supplier_price', 5, 2).notNullable();
    table.integer('order_quantity').notNullable();
    table.decimal('order_total', 7, 2).notNullable();
    addDefaultDates(table);
  });

  await knex.schema.createTable('productsupplier', (table) => {
    table.integer('prod_id').unsigned().notNullable();
    table.integer('supplier_id').unsigned().notNullable();
    addDefaultDates(table);
  });

  await knex.schema.createTable('purchaseproduct', (table) => {
    table.integer('purchase_id').unsigned().notNullable();
    table.integer('prod_id').unsigned().notNullable();
    table.integer('purchase_quantity').notNullable();
    addDefaultDates(table);
  });

  knex.schema.alterTable('orderdetails', (table) => {
    order_id.references(column.inTable(productorder));
    prod_id.references(column.inTable(product));
    supplier_id.references(column.inTable(supplier));
  });

  knex.schema.alterTable('productsupplier', (table) => {
    prod_id.references(column.inTable(product));
    supplier_id.references(column.inTable(supplier));
  });

  knex.schema.alterTable('productsupplier', (table) => {
    purchase_id.references(column.inTable(purchase));
    prod_id.references(column.inTable(product));
  });
};

exports.down = async (knex) => {
  await Promise.all([
    'product', 
    'productorder',
    'orderdetails',
    'productsupplier',
    'purchaseproduct',
    'staff',
    'category',
    'supplier',
    'purchase',
  ].map((tableName) => knex.schema.dropTable(tableName)));
};
