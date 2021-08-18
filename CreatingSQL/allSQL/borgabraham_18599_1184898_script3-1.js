// part 3


// emit each of the zip codes and customers in the customers collection
mapf_customers = function()                                                            // mapf1
{
	for (zip_codes of this.address.zip)
	{
		emit(customers.customerId, zip_codes);
	}
}

// use the emits from mapf_customers to load u an array which has all the
// customer ids and the zip codes.
reducef_customers = function(key, values)                                             // reducef1
{
	const customers_zips = [];
	for (x of values)
	{
		customers_zips.push({CustomerId: key, CustomerZip: x });
	}
	return customers_zips;
}

// the contents of the array will be sent to the order_totals collection
db.customers.mapReduce(mapf_customers, reducef_customers, {out: "order_totals"});   //  <------------ FIRST mapReduce


// emit each of the order quantities and the customers' id's
mapf_orders = function()                                                            // mapf2
{
	for (order_qty of this.items.qty)
	{
		emit(orders.customer, order_qty);
	}
}


reducef_orders = function(key, value)                                               // reducef2
{
	const orders_customers = [];
	for (x of values)
	{
		orders_customers.push({CustomerId: key, OrderQTY: x});
	}
	return orders_customers;
}

// the contents of the array will be appended to the order_totals collection.
db.orders.mapReduce(mapf_orders, reducef_orders, {out: {reduce: "order_totals"}});  //  <------------ SECOND mapReduce


// emit each element of the array values in the order_totals collection.
mapf_orders_per_zip = function()                                                    // mapf3
{
	for (x in this.orders_customers)
	{
		emit(this.customers_zips[x].CustomerZip, {this.orders_customers[x].OrderQTY});
	}
}


// sum the order quantity per zip
reducef_orders_per_zip = function(key, value)                                     // reducef3
{
	sum = 0;
	for (x in values)
	{
		sum = sum + values;
	}

	// return {customers_zips, sum};
	return sum;
}


print("Number of sales per zip code is:");
db.order_totals.mapReduce(mapf_orders_per_zip, reducef_orders_per_zip, {out: "totalQTY_per_zip"});    //  <------------ THIRD mapReduce

cursor = db.totalQTY_per_zip.find();
while(cursor.hasNext())
{
	printjson(cursor.next());
}

