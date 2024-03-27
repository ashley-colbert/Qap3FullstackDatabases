-- Queries used in the DAL functions

-- Orders queries

SELECT * FROM "Orders"

SELECT "orderID" AS id, "orderDate", "quantityOrdered", "staffID", "itemID" FROM "Orders" WHERE "orderID" = $1

"INSERT INTO "Orders"("orderID", "orderDate", "quantityOrdered", "staffID", "itemID") VALUES ($1, $2, $3, $4, $5);"

UPDATE "Orders" SET "orderDate"=$2, "quantityOrdered"=$3, "staffID"=$4, "itemID"=$5 WHERE "orderID" = $1

"DELETE FROM "Orders" WHERE "orderID" = $1;"

-- Staff queries

SELECT "staffID", name, "streetAdd", name, city, prov, phone, email FROM "Staff"

"SELECT * FROM "Staff" WHERE "staffID" = $1"

"INSERT INTO "Staff"("staffID", name, "streetAdd", city, prov, phone, email) VALUES ($1, $2, $3, $4, $5, $6, $7)"

"UPDATE "Staff" SET name=$2, "streetAdd"=$3, city=$4, prov=$5, phone=$6, email=$7 WHERE "staffID"=$1;"

DELETE FROM "Staff" WHERE "staffID" = $1;

-- Supplies queries

SELECT "itemID", name, quantity, "reorderPoint", department FROM "Supplies"

"SELECT "itemID", name, quantity, "reorderPoint", department FROM "Supplies" WHERE "itemID" = $1"

INSERT INTO "Supplies"("itemID", name, quantity, "reorderPoint", department) VALUES ($1, $2, $3, $4, $5)

UPDATE "Supplies" SET name=$2, quantity=$3, "reorderPoint"=$4, department=$5 WHERE "itemID"=$1;

DELETE FROM "Supplies" WHERE "itemID" = $1;