// Map each item in an order to the order
// key : orderId
// value : {qty : qty of item}
mapf = function(){
	for (item of this.items)
		emit(this.orderId, {qty:item.qty});
}

// Summarize the total qty of items in each order
// irrespective of which type of item along with 
// the total number of orders in an order (always 1)
// key : orderId
// value : {qty :  total item in order, 
// 			orders : 1}
reducef = function(key, values){
	totalQty = 0;
	for (x of values){
		totalQty = totalQty + x.qty;
	}
	return {qty:totalQty, orders:1};
}

// execute the mapReduce  
db.orders.mapReduce(mapf, reducef, {out:"temp1"})

// Provide same key for each order to prepare to
// aggregate the totals of all orders
// key : 0
// value : {qty , orders }
mapf2 = function(){
	emit(0, {qty:this.value.qty, orders:this.value.orders});
}

// Summarize the total number of items and total
// number of orders across all orders
// key : 0
// value : {qty : total items in all orders,
//          orders : total number of orders
reducef2 = function(key, values){
	totalQty = 0;
	orders = 0;
	for (x of values){
		totalQty = totalQty + x.qty;
		orders = orders + x.orders;
	}
	return {qty:totalQty, orders:orders};
}

// execute the mapReduce
db.temp1.mapReduce(mapf2, reducef2, {out:"temp2"});

// Load the record containing the values into memory
details = db.temp2.findOne();
// Calculate and display the average qty per order
avgQuantity = details.value.qty/details.value.orders;
print("Average quantity per order " + avgQuantity);