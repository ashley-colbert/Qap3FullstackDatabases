--insert statements for the staff table data

insert into "Staff" ("staffID", name, "streetAdd", city, prov, phone, email) values (1, 'Olly Duffett', '79324 Sutteridge Road', 'Burgeo', 'Newfoundland and Labrador', '590-752-5037', 'oduffett0@google.ca');
insert into "Staff" ("staffID", name, "streetAdd", city, prov, phone, email) values (2, 'Tucker Arsmith', '9 Texas Parkway', 'Bonavista', 'Newfoundland and Labrador', '854-341-0856', 'tarsmith1@techcrunch.com');
insert into "Staff" ("staffID", name, "streetAdd", city, prov, phone, email) values (3, 'Terrijo Trunby', '4459 Park Meadow Street', 'Catalina', 'Newfoundland and Labrador', '696-404-0398', 'ttrunby2@ted.com');
insert into "Staff" ("staffID", name, "streetAdd", city, prov, phone, email) values (4, 'Elaina Catherine', '64 Bayside Terrace', 'Bonavista', 'Newfoundland and Labrador', '227-573-3088', 'ecatherine3@cocolog-nifty.com');
insert into "Staff" ("staffID", name, "streetAdd", city, prov, phone, email) values (5, 'Jaclin Ayrton', '1 Sloan Center', 'Labrador City', 'Newfoundland and Labrador', '162-964-1625', 'jayrton4@dagondesign.com');
insert into "Staff" ("staffID", name, "streetAdd", city, prov, phone, email) values (6, 'Adeline Band', '0 Mosinee Avenue', 'Torbay', 'Newfoundland and Labrador', '788-890-0651', 'aband5@cornell.edu');
insert into "Staff" ("staffID", name, "streetAdd", city, prov, phone, email) values (7, 'Estell Cypler', '78975 Brickson Park Court', 'Pasadena', 'Newfoundland and Labrador', '178-739-8629', 'ecypler6@typepad.com');
insert into "Staff" ("staffID", name, "streetAdd", city, prov, phone, email) values (8, 'Rafael Coombs', '10953 Heath Center', 'Lewisporte', 'Newfoundland and Labrador', '505-779-8923', 'rcoombs7@discuz.net');
insert into "Staff" ("staffID", name, "streetAdd", city, prov, phone, email) values (9, 'Essie Filippello', '7 Browning Drive', 'Carbonear', 'Newfoundland and Labrador', '105-525-9554', 'efilippello8@nature.com');
insert into "Staff" ("staffID", name, "streetAdd", city, prov, phone, email) values (10, 'Madonna Fawlkes', '27 Westridge Road', 'Labrador City', 'Newfoundland and Labrador', '858-176-6878', 'mfawlkes9@tamu.edu');
insert into "Staff" ("staffID", name, "streetAdd", city, prov, phone, email) values (11, 'Harry Kolczynski', '7445 Warbler Park', 'Bay Roberts', 'Newfoundland and Labrador', '366-259-4144', 'hkolczynskia@themeforest.net');
insert into "Staff" ("staffID", name, "streetAdd", city, prov, phone, email) values (12, 'Maia Gentil', '27270 Clove Center', 'Harbour Breton', 'Newfoundland and Labrador', '148-528-4255', 'mgentilb@mozilla.com');


--data for supplies table
insert into "Supplies" ("itemID", name, quantity, "reorderPoint", department) values (1, 'burger buns', 36, 3, 'kitchen');
insert into "Supplies" ("itemID", name, quantity, "reorderPoint", department) values (2, 'burger patties', 33, 3, 'kitchen');
insert into "Supplies" ("itemID", name, quantity, "reorderPoint", department) values (3, 'potatoes', 15, 4, 'kitchen');
insert into "Supplies" ("itemID", name, quantity, "reorderPoint", department) values (4, 'oil', 7, 5, 'kitchen');
insert into "Supplies" ("itemID", name, quantity, "reorderPoint", department) values (5, 'chicken fingers', 18, 3, 'kitchen');
insert into "Supplies" ("itemID", name, quantity, "reorderPoint", department) values (6, 'steak', 48, 3, 'kitchen');
insert into "Supplies" ("itemID", name, quantity, "reorderPoint", department) values (7, 'mixed vegetables', 48, 5, 'kitchen');
insert into "Supplies" ("itemID", name, quantity, "reorderPoint", department) values (12, 'dish soap', 29, 4, 'cleaning');
insert into "Supplies" ("itemID", name, quantity, "reorderPoint", department) values (8, 'floor cleaner', 16, 5, 'cleaning');
insert into "Supplies" ("itemID", name, quantity, "reorderPoint", department) values (10, 'grill cleaner', 22, 3, 'cleaning');
insert into "Supplies" ("itemID", name, quantity, "reorderPoint", department) values (9, 'bathroom cleaner', 43, 5, 'cleaning');
insert into "Supplies" ("itemID", name, quantity, "reorderPoint", department) values (11, 'sponges', 38, 4, 'cleaning');
insert into "Supplies" ("itemID", name, quantity, "reorderPoint", department) values (15, 'paper', 30, 5, 'office');
insert into "Supplies" ("itemID", name, quantity, "reorderPoint", department) values (16, 'receipt paper', 21, 3, 'office');
insert into "Supplies" ("itemID", name, quantity, "reorderPoint", department) values (17, 'pens', 38, 3, 'office');
insert into "Supplies" ("itemID", name, quantity, "reorderPoint", department) values (14, 'ink', 40, 4, 'office');

--data for the Orders table
insert into "Orders" ("orderID", "orderDate", "quantityOrdered", "staffID", "itemID") values (1, '5/14/2023', 29, 3, 17);
insert into "Orders" ("orderID", "orderDate", "quantityOrdered", "staffID", "itemID") values (2, '2/3/2023', 30, 11, 8);
insert into "Orders" ("orderID", "orderDate", "quantityOrdered", "staffID", "itemID") values (3, '8/7/2023', 30, 2, 9);
insert into "Orders" ("orderID", "orderDate", "quantityOrdered", "staffID", "itemID") values (4, '7/10/2023', 8, 2, 1);
insert into "Orders" ("orderID", "orderDate", "quantityOrdered", "staffID", "itemID") values (5, '9/17/2023', 47, 4, 14);
insert into "Orders" ("orderID", "orderDate", "quantityOrdered", "staffID", "itemID") values (6, '12/12/2023', 13, 2, 8);
insert into "Orders" ("orderID", "orderDate", "quantityOrdered", "staffID", "itemID") values (7, '12/26/2023', 44, 9, 10);
insert into "Orders" ("orderID", "orderDate", "quantityOrdered", "staffID", "itemID") values (8, '9/18/2023', 17, 2, 10);
insert into "Orders" ("orderID", "orderDate", "quantityOrdered", "staffID", "itemID") values (9, '1/14/2024', 26, 1, 12);
insert into "Orders" ("orderID", "orderDate", "quantityOrdered", "staffID", "itemID") values (10, '2/15/2023', 5, 7, 1);
insert into "Orders" ("orderID", "orderDate", "quantityOrdered", "staffID", "itemID") values (11, '2/18/2023', 23, 12, 5);
insert into "Orders" ("orderID", "orderDate", "quantityOrdered", "staffID", "itemID") values (12, '4/12/2023', 48, 11, 12);
insert into "Orders" ("orderID", "orderDate", "quantityOrdered", "staffID", "itemID") values (13, '12/26/2023', 13, 3, 11);
insert into "Orders" ("orderID", "orderDate", "quantityOrdered", "staffID", "itemID") values (14, '3/28/2023', 27, 8, 16);
insert into "Orders" ("orderID", "orderDate", "quantityOrdered", "staffID", "itemID") values (15, '3/20/2023', 48, 4, 17);
insert into "Orders" ("orderID", "orderDate", "quantityOrdered", "staffID", "itemID") values (16, '5/20/2023', 35, 1, 11);
insert into "Orders" ("orderID", "orderDate", "quantityOrdered", "staffID", "itemID") values (17, '2/2/2023', 42, 12, 10);
insert into "Orders" ("orderID", "orderDate", "quantityOrdered", "staffID", "itemID") values (18, '5/18/2023', 18, 11, 11);
insert into "Orders" ("orderID", "orderDate", "quantityOrdered", "staffID", "itemID") values (19, '9/14/2023', 27, 10, 3);
insert into "Orders" ("orderID", "orderDate", "quantityOrdered", "staffID", "itemID") values (20, '10/28/2023', 32, 3, 6);
insert into "Orders" ("orderID", "orderDate", "quantityOrdered", "staffID", "itemID") values (21, '5/7/2023', 38, 6, 6);
insert into "Orders" ("orderID", "orderDate", "quantityOrdered", "staffID", "itemID") values (22, '8/16/2023', 11, 9, 11);
insert into "Orders" ("orderID", "orderDate", "quantityOrdered", "staffID", "itemID") values (23, '8/24/2023', 50, 5, 14);
insert into "Orders" ("orderID", "orderDate", "quantityOrdered", "staffID", "itemID") values (24, '4/22/2023', 12, 2, 12);
insert into "Orders" ("orderID", "orderDate", "quantityOrdered", "staffID", "itemID") values (25, '1/6/2023', 40, 6, 1);
