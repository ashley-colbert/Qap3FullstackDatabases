--create statement for the Orders table

CREATE TABLE public."Orders"
(
    "orderID" serial NOT NULL,
    "orderDate" date NOT NULL,
    "quantityOrdered" integer NOT NULL,
    "staffID" integer,
    "itemID" integer NOT NULL,
    PRIMARY KEY ("orderID")
);

ALTER TABLE IF EXISTS public."Orders"
    OWNER to postgres;

    --foreign key statements

ALTER TABLE "Orders"
ADD CONSTRAINT FKey
FOREIGN KEY ("staffID") REFERENCES "Staff"("staffID");

ALTER TABLE "Orders"
ADD CONSTRAINT FKey2
FOREIGN KEY ("itemID") REFERENCES "Supplies"("itemID");