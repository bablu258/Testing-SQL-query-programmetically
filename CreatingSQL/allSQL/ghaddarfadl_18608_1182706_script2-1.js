mapf = function() 
{
	if ((this.address.zip).startsWith('9'))
	{
		emit (this.address.zip, 1);
	}
}

reducef = function (key, values)
{
	total = 0;
	
	for (x of values)
	{
		total = total + x;
	}

	return total;
}

db.customers.mapReduce (mapf, reducef, {out: "customers_load_output"});

cursor = db.customers_load_output.find();
while (cursor.hasNext())
{
	printjson(cursor.next());
}
