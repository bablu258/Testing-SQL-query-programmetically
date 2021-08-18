mapf = function()
{
	emit(1, {quantity: this.items, numberOfIndexes: this.items.length, numberOfOrders: 1});
}

reducef = function(key, values)
{
	numOfIndex = 0;
	totalQty = 0;
	numOfOrders = 0;
	for (x of values)
	{
		numOfOrders = numOfOrders + x.numberOfOrders;
		for (counter = 0; counter < x.numberOfIndexes; counter++)
		{
			totalQty = totalQty + x.quantity[counter].qty;
		}
	}
	return {average_quantity_per_order: totalQty/numOfOrders};
}

db.orders.mapReduce (mapf, reducef, {out: "final_output"});

cursor = db.final_output.find();
while (cursor.hasNext())
{
	printjson(cursor.next());
}