mapf1 = function() {
	emit(this.orderId, this);
}

reducef1 = function(key, values) {
	number_of_orders = 1;
	var quantity = 0;
	for (x of values) {
		var quantity = 0;
		for (item of x.items) {
			quantity += item.qty;
		}
	}
	return {number_of_orders: number_of_orders, quantity: quantity};
}

db.orders.mapReduce(mapf1, reducef1, {out: 'temp1'});

mapf2 = function() {
	emit('average_number_of_items_per_order', this);
}

reducef2 = function(key, values) {
	total_number_of_orders = 0;
	total_item_count = 0;
	for (x of values) {
		total_number_of_orders += x.value.number_of_orders;
		total_item_count += x.value.quantity;
	}
	
	return total_item_count / total_number_of_orders;
}

db.temp1.mapReduce(mapf2, reducef2, {out: 'temp2'});

var cursor = db.temp2.find();
while(cursor.hasNext()) {
	printjson(cursor.next());
}
