-- e5.1 Exercises from chapter 5
--
-- Before you begin:
-- re-create the tables and data using the script 
--   zagimore_schema.sql

-- 1  Display the RegionID, RegionName and number of stores in each region.
select s.regionid, regionname, count(*) as NumberStores
from region as r join store as s on s.regionid=r.regionid
group by s.regionid;

-- 2 Display CategoryID and average price of products in that category.
select categoryid, round(avg(productprice),2) as AveragePrice
from product
group by categoryid;

-- 3 Display CategoryID and number of items purchased in that category.
select categoryid, sum(quantity) as QuantityPurchased
from product as p
     join includes as incl on incl.productid=p.productid
group by categoryid;

-- 4 Display RegionID, RegionName and total amount of sales as AmountSpent
select r.regionid, regionname, sum(quantity*productprice) as AmountSpent
from salestransaction as s join store st on s.storeid=st.storeid
     join region as r on r.regionid=st.regionid
     join includes as incl on incl.tid=s.tid
     join product as p on p.productid=incl.productid
group by r.regionid;

-- 5 Display the TID and total number of items in the sale
--    for all sales where the total number of items is greater than 3
select tid, sum(quantity) as NumberItems
from includes
group by tid
having sum(quantity) > 3;

-- 6 For vendor whose product sales exceeds $700, display the
--    VendorID, VendorName and total amount of sales as "TotalSales"
select p.vendorid, vendorname, sum(quantity*productprice) as TotalSales
from vendor v join product p on v.vendorid=p.vendorid
     join includes incl on incl.productid=p.productid
group by vendorid, vendorname
having TotalSales > 700;

-- 7 Display the ProductID, Productname and ProductPrice
--    of the cheapest product.
select productid, productname, productprice
from  product p 
where productprice = (select min(productprice) from product);

-- 8 Display the ProductID, Productname and VendorName
--    for products whose price is below average price of all products
--    sorted by productid.
select productid, productname, vendorname
from  product p join vendor v on p.vendorid=v.vendorid
where productprice < (select avg(productprice) from product)
order by productid;

-- 9 Display the ProductID and Productname from products that
--    have sold more than 2 (total quantity).  Sort by ProductID
select incl.productid, productname
from includes as incl join product p on incl.productid=p.productid
group by incl.productid
having sum(quantity) > 2;

-- 10 Display the ProductID for the product that has been 
--    sold the most (highest total quantity across all
--    transactions). 
select productid, sum(quantity) as total_quantity
from includes 
group by productid
order by total_quantity desc limit 1;


-- 11 Rewrite query 30 in chapter 5 using a join.
SELECT distinct p.productid, productname, productprice
FROM product as p join includes as t on p.productid=t.productid
GROUP BY p.productid
HAVING SUM(quantity) > 3;

-- 12 Rewrite query 31 using a join.
SELECT distinct p.productid, productname, productprice
FROM product as p join includes as t on p.productid=t.productid
GROUP BY p.productid
HAVING count(tid) > 1;
 
-- 13 create a view over the product, salestransaction, includes, customer, store, region tables
--     with columns: tdate, productid, productname, productprice, quantity, customerid, customername, 
--                   storeid, storezip, regionname
create view vsales as 
select tdate, p.productid, productname, productprice, quantity, 
       c.customerid, customername, st.storeid, storezip, regionname
from product as p join includes as t on p.productid=t.productid 
     join salestransaction as s on s.tid=t.tid
     join customer as c on c.customerid=s.customerid 
     join store as st on st.storeid=s.storeid 
     join region as r on r.regionid=st.regionid;

-- 14 Using the view created in question 13
--   Display ProductID, ProductName, ProductPrice  
--   for products sold in zip code "60600" sorted by ProductID
select distinct productid, productname, productprice 
from vsales 
where storezip = '60600'
order by productprice;

-- 15 Using the view from question 13 
--    display CustomerName and TDate for any customer buying a product "Easy Boot"
select distinct customername, tdate 
from vsales 
where productname = 'Easy Boot';

-- 16 Using the view from question 13
--    display RegionName and total amount of sales in each region as "AmountSpent"
select regionname, sum(quantity*productprice) as 'AmountSpent'
from vsales 
group by regionname;


-- 17 Display the product ID and name for products whose 
--    total sales is less than 3 or total transactions is at most 1.
--    Use a UNION. 
select productid, productname 
from product
where productid in ( select productid from includes 
                      group by productid 
                      having sum(quantity) < 3)
union
select productid, productname 
from product
where productid in (select productid  from includes 
                     group by productid            
                     having count(*) <= 1);

-- 18 Create a view named category_region 
--    over the category, region, store, salestranaction, includes,
--    and product tables that summarizes total quantity sold by region and category.  The view 
--    should have columns:
--    categoryid, categoryname, regionid, regionname, totalsales
create view category_region as 
select cat.categoryid, cat.categoryname, reg.regionid, reg.regionname, sum(includes.quantity) as totalsales
from  includes 
     join product on product.productid = includes.productid
     join salestransaction st on st.tid = includes.tid 
     join store on st.storeid=store.storeid
     join region reg on reg.regionid=store.regionid
     join category cat on cat.categoryid=product.categoryid
group by cat.categoryid, reg.regionid;

-- 19 Using the view created in 18, which region has the most sales for 
--    each category.
--    you should get the result
--    categoryname  regionname    totalsales
--    Electronics   Chicagoland   6
--    Climbing      Indiana       17
--    Camping       Tristate      9
--    Footwear      Tristate      20
--    Cycling       Chicagoland   13
select   categoryname, regionname, totalsales
from category_region cat1
where cat1.totalsales = (select max(totalsales) from category_region cat2 
                         where cat2.categoryid=cat1.categoryid) ;




