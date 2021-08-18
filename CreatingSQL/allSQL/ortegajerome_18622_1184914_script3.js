mapf1 = function() {
	emit(this.customer, this);
}

reducef1 = function(key, values) {
	for (x of values) {
		var quantity = 0;
		for (item of x.items) {
			quantity += item.qty;
		}
	}
	return {quantity: quantity};
}

db.orders.mapReduce(mapf1, reducef1, {out: 'temp1'});

mapf2 = function() {
	emit(this.customerId, {zip: this.address.zip});
}

reducef2 = function(key, values) {
	totalQuantity = 0;
	zip = '';
	for (x of values) {
		if ('quantity' in x) {
			totalQuantity += x.quantity;
		}
		if ('zip' in x) {
			zip = x.zip;
		}
	}
	return {quantity: totalQuantity, zip: zip};
}

db.customers.mapReduce(mapf2, reducef2, {out: {reduce: 'temp1'}});

mapf3 = function() {
	emit(this.value.zip, this.value.quantity);
}

reducef3 = function(key, values) {
	totalQuantity = 0;
	for (x of values) {
		totalQuantity += x;
	}
	
	return totalQuantity;
}

db.temp1.mapReduce(mapf3, reducef3, {out: 'temp2'});

var cursor = db.temp2.find();
while(cursor.hasNext()) {
	printjson(cursor.next());
}