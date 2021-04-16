CREATE TABLE staff (
  "staff_id" int NOT NULL,
  "fname" varchar(30) NOT NULL,
  "lname" varchar(30) NOT NULL,
  "staff_email" varchar(50) NOT NULL,
  "staff_role" varchar(20) NOT NULL,
  PRIMARY KEY ("staff_id")
);

CREATE TABLE category (
  "cat_id" int NOT NULL,
  "cat_name" varchar(20) NOT NULL,
  PRIMARY KEY ("cat_id")
);

CREATE TABLE product (
  "prod_id" int NOT NULL,
  "cat_id" int NOT NULL,
  "sku" varchar(11) NOT NULL,
  "prod_name" varchar(80) NOT NULL,
  "prod_brand" varchar(50) NOT NULL,
  "prod_size" varchar(20) NULL,
  "colour" varchar(10) NULL,
  "prod_price" decimal(5,2) NOT NULL,
  "location" varchar(3) NULL,
  "prod_descrip" varchar(150) NULL,
  "is_available" boolean NOT NULL,
  "available_quantity" int NOT NULL,
  "is_discount" boolean NOT NULL,
  "discount" decimal(3,2) NULL,
  "manufactured" date NOT NULL,
  PRIMARY KEY ("prod_id")
);

CREATE TABLE supplier (
  "supplier_id" int NOT NULL,
  "supplier_name" varchar(30) NOT NULL,
  "supplier_address" varchar(50) NOT NULL,
  "supplier_telephone" varchar(15) NOT NULL,
  "supplier_email" varchar(50) NOT NULL,
  PRIMARY KEY ("supplier_id")
);

CREATE TABLE purchase (
  "purchase_id" int NOT NULL,
  "purchase_date" date NOT NULL,
  "purchase_amount" decimal(6,2) NOT NULL,
  PRIMARY KEY ("purchase_id")
);

CREATE TABLE productOrder (
  "order_id" int NOT NULL,
  "staff_id" int NOT NULL REFERENCES staff(staff_id),
  "order_date" date NOT NULL,
  PRIMARY KEY ("order_id")
);

CREATE TABLE orderDetails (
  "order_id" int NOT NULL REFERENCES productOrder(order_id),
  "prod_id" int NOT NULL REFERENCES product(prod_id),
  "supplier_id" int NOT NULL,
  "supplier_price" decimal(5,2) NOT NULL,
  "order_quantity" int NOT NULL,
  "order_total" decimal(7,2) NOT NULL
);

CREATE TABLE productSupplier (
  "prod_id" int NOT NULL REFERENCES product(prod_id),
  "supplier_id" int NOT NULL REFERENCES supplier(supplier_id)
);

CREATE TABLE purchaseProduct (
  "purchase_id" int NOT NULL REFERENCES purchase(purchase_id),
  "prod_id" int NOT NULL REFERENCES product(prod_id),
  "purchase_quantity" int NOT NULL
);
