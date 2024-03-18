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





