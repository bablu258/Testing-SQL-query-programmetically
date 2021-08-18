/*
David Baker  / dabaker@csumb.edu
CST 363 	 / Prof. Wisneski
Assignment 4 / Part 3
*/

/*
Map from orders, emit under a key of customer, value is quantity
*/
mapf1 = function() {
		emit(this.customer, {"qty": this.items[0].qty});
}

// reduce, summarize by customer
reducef1 = function(key, values) {
	total = 0;
	for (x of values) {
		total = total + x.qty;
	}
	
	return {"qty": total}
}

// MapReduce orders collection to customer, quantity 
db.orders.mapReduce(mapf1, reducef1, {out:"temp1"});

/*
Map from customers, emit under key of customerid, value is zip code
*/
mapf2 = function() {
	emit(this.customerId, {zip: this.address.zip});
}

// reduce, summarize by zip code
reducef2 = function(key, values) {
	zipc = 0;
	for (x of values) {
		zipc = x.zip;
	}
	
	return {zip: zipc};
}

// MapReduce to join orders and customers with customerid, quantity sold, zip
db.customers.mapReduce(mapf2, reducef2, {out: {reduce: "temp1"}});

mapf3 = function() {
	currentZip = this.value.zip;
	emit(currentZip, this._id);
	
}

// define reduce function
reducef3 = function(key, values) {
	count = 0;
	for (qty of values){
		count = count + qty;
	}
	
	return {count: count};
}

// MapReduce to group zips and add total quantities sold
db.temp1.mapReduce(mapf3, reducef3, {out: "temp2"});


// display mapreduce contents
cursor = db.temp2.find();
cursor.sort( {"value.count": -1} );
print("Quantity sold by zip code:");

while(cursor.hasNext()) {
	printjson(cursor.next());
}




