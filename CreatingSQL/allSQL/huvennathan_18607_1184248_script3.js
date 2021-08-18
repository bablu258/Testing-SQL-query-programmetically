// map function will provide the customer and
// qty of each item ordered in an order
// key : customer id
// value : qty of item
mapf1 = function() {
	for (item of this.items) {
		emit(this.customer, {qty:item.qty});
	}
}

// summarize qty of items ordered by customer id
// key : customer id
// value : total qty of all items ordered
reducef1 = function(key, values) {
	sum = 0;
	for (x of values) {
		sum = sum + x.qty;
	}
	return {qty:sum};
}

// execute mapReduce so only one document per 
// customer
db.orders.mapReduce(mapf1, reducef1, {out:"temp1"});

// obtain the zip of each customer
// key : customerId
// value : {zip : customer zip}
mapf2 = function() {
	emit(this.customerId, {zip:this.address.zip});
}

// Create documentns containing both qty and zip
// key : customerId
// values: {qty: , zip: }
reducef2 = function(key, values) {
	sum = 0;
	zip = "";
	for (x of values) {
		if ("qty" in x) {
			sum = sum + x.qty;
		}
		if ("zip" in x)
			zip = x.zip;
	}
	return {qty:sum, zip:zip};
}

db.customers.mapReduce(mapf2, reducef2, {out:{reduce:"temp1"}});


// Provide the zip and qty of each document only
// for documents that have a qty > 0
// key : zip
// value : {qty : total of items ordered by customer
mapf3 = function() {
	if (this.value.qty > 0)
		emit(this.value.zip, {qty:this.value.qty});
}

// aggregate by zip
// key : zip
// value : total qty of items orderd by all
//    customers within zip
reducef3 = function(key, values) {
	sum = 0;
	for(x of values) {
		sum = sum + x.qty;
	}
	return sum;
}

db.temp1.mapReduce(mapf3, reducef3, {out:"temp2"});

// display results of map reduce
cursor = db.temp2.find();
while (cursor.hasNext()) { 
	printjson(cursor.next());
}
