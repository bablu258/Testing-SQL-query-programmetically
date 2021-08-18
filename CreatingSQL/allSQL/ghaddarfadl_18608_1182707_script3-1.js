mapf1 = function()
{
	emit(this.customer, {quantity: this.items, numberOfIndexes: this.items.length});

}

reducef1 = function(key, values)
{
	numOfIndex = 0;
	totalQty = 0;
	for (x of values)
	{
		for (counter = 0; counter < x.numberOfIndexes; counter++)
		{
			totalQty = totalQty + x.quantity[counter].qty;
		}
	}
	return {quantity: totalQty};
}

db.orders.mapReduce (mapf1, reducef1, {out: "test_output"});





mapf2 = function()
{
	emit(this.customerId, {zipcode: this.address.zip});
}

reducef2 = function (key, values)
{
	zipC = "";
	totalQty = 0;
	for (x of values)
	{
		if ("quantity" in x)
		{
			totalQty = totalQty + x.quantity;
		}
		if ("zipcode" in x)
		{
			zipC = x.zipcode;
		}
	}

	return {quantity: totalQty, zipcode: zipC};
}

db.customers.mapReduce (mapf2, reducef2, {out: {reduce:"test_output"}});


mapf3 = function()
{
	emit(this.value.zipcode, this.value.quantity);
}

reducef3 = function(key, values)
{
	totalQty = 0;
	for (x of values)
	{
		totalQty = totalQty + x;
	}
	return totalQty;
}

db.test_output.mapReduce (mapf3, reducef3, {out:"test_output_1"})
q = db.test_output_1.find();
while (q.hasNext())
{
	printjson(q.next());
}