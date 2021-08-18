-- e5.1 Exercises from chapter 5
-- week 1
-- 1  Display all records in the REGION table
select * from region;

-- 2 Display StoreID and StoreZIP for all stores
select storeid, storezip from store;

-- 3 Display CustomerName and CustomerZip for all customers
--   sorted alphabetically by CustomerName
select customername, customerzip from customer order by customername;

-- 4 Display the RegionIDs where we have stores 
--   and do not display duplicates
select distinct regionid from store;

-- 5 Display all information for all stores in RegionID C 
select * from store where regionid='C';

-- 6 Display CustomerID and CustomerName for customers who name 
--   begins with the letter T
select customerid, customername from customer where customername like 'T%';

-- 7 Display ProductID, ProductName and ProductPrice for 
--   products with a price of $100 or higher
select productid, productname, productprice from product where productprice >= 100;

-- 8 Display ProductID, ProductName, ProductPrice and VendorName
--   for products sorted by ProductID
select productid, productname, productprice, vendorname
from product join vendor on product.vendorid=vendor.vendorid
order by productid;

-- 9 Display ProductID, ProductName, ProductPrice,  VendorName and CategoryName
--   for products sorted by ProductID
select productid, productname, productprice, vendorname, categoryname
from product join vendor on product.vendorid=vendor.vendorid
	join category on product.categoryid=category.categoryid
order by productid;

-- 10 Display ProductID, ProductName, ProductPrice  
--   for products in category "Camping" sorted by ProductID
select productid, productname, productprice 
from product join category on product.categoryid=category.categoryid
where categoryname='Camping' 
order by productid;

-- 11 Display ProductID, ProductName, ProductPrice  
--   for products sold in zip code "60600" sorted by ProductID
select p.productid, productname, productprice
from salestransaction as s join includes incl on incl.tid=s.tid
     join product p on p.productid=incl.productid
     join store st on st.storeid=s.storeid
where storezip='60600'
order by p.productid;

-- 12 Display ProductID, ProductName and ProductPrice for VendorName "Pacifica Gear" and were
--    sold in the region "Tristate".  Do not show duplicate information.
select distinct p.productid, productname, productprice
from product p join vendor v on v.vendorid=p.vendorid
     join includes incl on incl.productid=p.productid
     join salestransaction s on s.tid=incl.tid
     join store st on st.storeid=s.storeid
     join region r on r.regionid=st.regionid
where v.vendorname='Pacifica Gear' and regionname='Tristate'; 

-- 13 Display TID, CustomerName and TDate for any customer buying a product "Easy Boot"
select s.tid, customername, tdate
from salestransaction s join customer as c on c.customerid=s.customerid
     join includes incl on incl.tid=s.tid
     join product p on p.productid = incl.productid
where productname='Easy Boot';


-- 14 Create table and insert the following data

-- create table company with columns
--    id, name, ceo
drop table if exists company;
create table company (id char(3), name varchar(25), ceo varchar(25));

-- insert the following data 
--    id   name         ceo
--    ACF  Acme Finance  Mike Dempsey
--    TCA  Tara Capital  Ava Newton
--    ALB  Albritton     Lena Dollar
insert into company values 
 ('ACF', 'Acme Finance', 'Mike Dempsey'),
 ('TCA', 'Tara Capital', 'Ava Newton'),
 ('ALB', 'Albritton', 'Lena Dollar');

-- create a table security with columns
--     id, name, type
drop table if exists security;
create table security (id char(2), name varchar(25), type char(5));

-- insert the following data
--    id    name                type
--    AE    Abhi Engineering    Stock
--    BH    Blues Health        Stock
--    CM    County Municipality Bond
--    DU    Downtown Utlity     Bond
--    EM    Emmitt Machines     Stock
insert into security values
 ('AE', 'Abhi Engineering' , 'Stock'),
 ('BH', 'Blues Health', 'Stock'),
 ('CM', 'County Municipality', 'Bond'),
 ('DU', 'Downtown Utility', 'Bond'),
 ('EM', 'Emmitt Machines', 'Stock');

-- create the following table called funds
--  with columns CompanyID, InceptionDate, FundID, Name
drop table if exists funds;
create table funds (companyid char(3), inceptiondate date, fundid char(2), name varchar(25));

-- CompanyID  InceptionDate   FundID Name
--    ACF      2005-01-01     BG     Big Growth
--    ACF      2006-01-01     SG     Steady Growth
--    TCA      2005-01-01     LF     Tiger Fund
--    TCA      2006-01-01     OF     Owl Fund
--    ALB      2005-01-01     JU     Jupiter
--    ALB      2006-01-01     SA     Saturn
insert into funds values 
 ('ACF', '2005-01-01', 'BG', 'Big Growth'),
 ('ACF', '2006-01-01', 'SG', 'Steady Growth'),
 ('TCA', '2005-01-01', 'LF', 'Tiger Fund'),
 ('TCA', '2006-01-01', 'OF', 'Owl Fund'),
 ('ALB', '2005-01-01', 'JU', 'Jupiter'),
 ('ALB', '2006-01-01', 'SA', 'Saturn');

-- create table holdings with columns
--   FundsID, securityID, quantity
drop table if exists holdings;
create table holdings (fundsid char(2), securityid char(2), quantity int);

--    fundID   securityID   quantity
--     BG       AE           500
--     BG       EM           300
--     SG       AE           300
--     SG       DU           300
--     LF       EM          1000
--     LF       BH          1000
--     OF       CM          1000
--     OF       DU          1000
--     JU       EM          2000
--     JU       DU          1000
--     SA       EM          1000
--     SA       DU          2000
insert into holdings values 
 ('BG', 'AE', 500),
 ('BG', 'EM', 300),
 ('SG', 'AE', 300),
 ('SG', 'DU', 300),
 ('LF', 'EM', 1000),
 ('LF', 'BH', 1000),
 ('OF', 'CM', 1000),
 ('OF', 'DU', 1000),
 ('JU', 'EM', 2000),
 ('JU', 'DU', 1000),
 ('SA', 'EM', 1000),
 ('SA', 'DU', 2000);


-- 15 Use alter table command to add a column "price" to the 
--    security table.  The datatype should be numeric(7,2)
alter table security add column price numeric(7,2);


-- 16 drop tables company, security, fund, holdings.
--    You must drop them in a certain order.
drop table holdings;
drop table security; 
drop table company;
drop table funds;


-- 17 Try to delete the row for product with productid '5X1'
delete from product where productid='5X1';

-- 18 Explain why does the delete in question 17 fails.


-- 19 Try to delete the row for product with productid '5X2'
delete from product where productid='5X2';

-- 20 Re-insert productid '5X2'
insert into product values('5X2', 'Action Sandal', 70.00, 'PG', 'FW');

-- 21  update the price of '5X2', 'Action Sandal' by $10.00
update product set productprice = productprice + 10.00 where productid='5X2' and productname='Action Sandal';

-- 22 increase the price of all products in the 'CY' category by 5%
update product set productprice = productprice * 1.05 where categoryid='CY';

-- 23 decrease the price of all products made by vendorname 'Pacifica Gear' by $5.00
update product natural join vendor set productprice = productprice - 5.00 where vendorname='Pacifica Gear';

-- 24 List productid and productprice for all products.  Sort by productid;
select productid, productprice from product order by productid;

