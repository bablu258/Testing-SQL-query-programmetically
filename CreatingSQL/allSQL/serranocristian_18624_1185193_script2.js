mapf = function()
{
if ('9' == this.address.zip.substring(0,1)){
emit(this.address.zip, 1);
}
}

reducef = function(key,values)
{
total = 0;
for (x of values)
{
total = total + x
}
return total;
}
db.customers.mapReduce(mapf, reducef, {out : "temp"});

cursor = db.temp.find();
while(cursor.hasNext())
{
printjson(cursor.next());
}