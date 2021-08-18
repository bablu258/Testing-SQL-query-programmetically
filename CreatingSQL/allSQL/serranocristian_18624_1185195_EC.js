mapf = function()
{
total = 0;	
for (x of this.items)
total = total + x.qty
emit(2, {total : total, count : 1});
}

reducef = function(key,values)
{
total = 0;
count = 0;
for (x of values)
{
total = total + x.total
count = count + x.count
}

average = total/count
return {average : average, total:total, count : count};
}
db.orders.mapReduce(mapf, reducef, {out: "out_collection"});

cursor = db.out_collection.find();
while(cursor.hasNext())
{
printjson(cursor.next().value.average);
}