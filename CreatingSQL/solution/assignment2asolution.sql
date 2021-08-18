-- Before you begin create the database and tables with the script
--  assignment_2a_schema.sql

-- 1  Find the model number and price of all products (of any type) made by 
--    manufacturer B?  The result should be in order by model number and 
--    then by  price (low to high)  
--     hint:  use a union over the pc, laptop and printer tables
select model, price from laptop where model in (select model from product where maker='B')
union
select model, price from pc where model in (select model from product where maker='B')
union
select model, price from printer where model in (select model from product where maker='B')
order by model, price;

-- 2  Find those manufacturers that sell laptops but not pc’s. 
--    Sort result by maker.
--    hint: use "not in" predicate and a subselect on the pc table.
select distinct maker from product
where type='laptop' and 
      maker not in  (select maker from product where type='pc')
order by maker;

-- 3  Find the hard-drive sizes that occur in two or more PC’s.   
--    Sort the list low to high. [hint: use group and having]
select hd from pc group by hd having count(*)>=2 order by hd;

-- 4  Find  PC models that have both the same speed and RAM.  The
--    output should have 2 columns,  "model1" and "model2".  A pair should be
--    listed only once:  e.g. if (f, g) is in the result then (g,f) should not
--    appear.   Sort the output by the first column.
select pc1.model, pc2.model 
from pc pc1 join pc pc2 on pc1.speed=pc2.speed and pc1.ram=pc2.ram and pc1.model<pc2.model
order by pc1.model;

-- 5  Find the maker or makers of PC’s with at least three different speeds. 
--    If more than one, order by maker.
--    hint: use a having clause containing a count(distinct   ) function.
select maker from pc join product on product.model=pc.model group by maker having count(distinct speed) >= 3 order by maker;

-- 6  Find those makers of at least two different computers (PC’s or 
--    laptops)  with speeds of at least 2.80.  Order the list by maker. 
--    hint:  use a subquery that does a UNION of the pc and laptop tables.
select maker from (
     select maker, count(*) as count from pc join product on pc.model=product.model where speed >= 2.80 
     union all
     select maker, count(*) as count from laptop join product on laptop.model=product.model where speed >= 2.80 
) as fc
group by maker
having sum(count) >= 2
order by maker;

-- 7  Find the maker(s) of the computer (PC or laptop) with the highest 
--    speed.  If there are multiple makers, list all of them and order by maker.
select max(speed) from ( select speed from pc union select speed from laptop ) c ;

