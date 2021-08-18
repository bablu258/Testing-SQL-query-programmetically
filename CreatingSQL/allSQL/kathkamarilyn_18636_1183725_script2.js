map = function() 
{
	if (this.address.zip.startsWith("9"))
		emit(this.address.zip, 1);
}

reduce = function(key, values) 
{
	valuesTotal = 0;
	
	for (value of values)
		valuesTotal = valuesTotal + value;
	return {CountOfCustomers: valuesTotal};
}

db.customers.mapReduce( map, reduce, {out: "TempCollection"})

customers = db.TempCollection.find();
while (customers.hasNext()) 
{
	printjson(customers.next());
}