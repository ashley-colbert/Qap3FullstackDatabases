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