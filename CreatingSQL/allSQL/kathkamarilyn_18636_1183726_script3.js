firstMap = function() 
{
	for(let item of this.items)
	{
		emit(this.customer, {quantity: item.qty});
	}
}

firstReduce = function(key, values) 
{
	ValuesTotal = 0;
	
	for (value of values)
	{
		ValuesTotal = ValuesTotal + value.quantity;
	}
	return {QuantityTotal: ValuesTotal};
}
db.orders.mapReduce( firstMap, firstReduce, {out: "firstTempColl"})


secondMap = function() 
{
	emit(this.customerId, {zip: this.address.zip});
}

secondReduce = function(key, values) 
{
	ValuesTotal = 0;
	zipcode = "";

	for (value of values)
	{
		if("QuantityTotal" in value)
			ValuesTotal = ValuesTotal + value.QuantityTotal;
		if("zip" in value)
			zipcode = value.zip;
	}
	return {zip: zipcode, QuantityTotal: ValuesTotal};
}
db.customers.mapReduce( secondMap, secondReduce, {out: {reduce: "firstTempColl"}})


thirdMap = function() 
{
	emit(this.value.zip, {itemsSold: this.value.QuantityTotal});
}

thirdReduce = function(key, values) 
{
	ValuesTotal = 0;
	
	for (value of values)
	{
		ValuesTotal = ValuesTotal + value.itemsSold;
	}
	
	return {totalItemsSold: ValuesTotal};
}
db.firstTempColl.mapReduce( thirdMap, thirdReduce, {out:"secondTempColl"})

results = db.secondTempColl.find();
	while (results.hasNext()) 
{
	printjson(results.next());
}
