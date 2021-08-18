mapf1 = function() 
{
	for(let item of this.items){
		emit(this.customer, {quantity: item.qty});
	}
}

reducef1 = function(key, values) 
{
	total = 0;
	
	for (x of values)
	{
		total = total + x.quantity;
	}
	
	return {totalQuantity: total};
}

db.orders.mapReduce( mapf1, reducef1, {out: "temp1"})


mapf2 = function() 
{
	emit(this.customerId, {zip: this.address.zip});
}

reducef2 = function(key, values) 
{
	total = 0;
	thiszip = "";

	for (x of values)
	{
		if("totalQuantity" in x)
			total = total + x.totalQuantity;
		if("zip" in x)
			thiszip = x.zip;
	}

	return {zip: thiszip, totalQuantity: total};
}

db.customers.mapReduce( mapf2, reducef2, {out: {reduce: "temp1"}})


mapf3 = function() 
{
	emit(this.value.zip, {purchases: this.value.totalQuantity});
}

reducef3 = function(key, values) 
{
	total = 0;
	
	for (x of values)
	{
		total = total + x.purchases;
	}
	
	return {customersPurchases: total};
}

db.temp1.mapReduce( mapf3, reducef3, {out:"temp2"})

cursor = db.temp2.find();
	while (cursor.hasNext()) {
	printjson(cursor.next());
}
