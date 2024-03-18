-- Database create statement for the Happy Restaurant

-- create statement for the Supplies table

CREATE TABLE public."Supplies"
(
    "itemID" serial NOT NULL,
    name character varying(64) NOT NULL,
    quantity integer NOT NULL,
    "reorderPoint" integer,
    department character varying(64),
    PRIMARY KEY ("itemID")
);

ALTER TABLE IF EXISTS public."Supplies"
    OWNER to postgres;

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

--create statement for the Staff table

CREATE TABLE public."Staff"
(
    "staffID" serial NOT NULL,
    name character varying(40) NOT NULL,
    "streetAdd" character varying(40),
    city character varying(40),
    prov character varying(40),
    phone character varying(10) NOT NULL,
    email character varying(40),
    PRIMARY KEY ("staffID")
);

ALTER TABLE IF EXISTS public."Staff"
    OWNER to postgres;

--foreign key statements

ALTER TABLE "Orders"
ADD CONSTRAINT FKey
FOREIGN KEY ("staffID") REFERENCES "Staff"("staffID");

ALTER TABLE "Orders"
ADD CONSTRAINT FKey2
FOREIGN KEY ("itemID") REFERENCES "Supplies"("itemID");