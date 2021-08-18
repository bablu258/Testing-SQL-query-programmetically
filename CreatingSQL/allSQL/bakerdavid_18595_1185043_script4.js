/*
David Baker  / dabaker@csumb.edu
CST 363 	 / Prof. Wisneski
Assignment 4 / Part 4 Extra Credit
*/

// DO a map reduce that answers this question:
// What is the average quantity for orders?

mapf = function() {
		emit(this.customer, {"qty": this.items[0].qty});
}

// reduce, summarize by customer
reducef = function(key, values) {
	total = 0;
	for (x of values) {
		total = total + x.qty;
	}
	
	return {"qty": total}
}

db.orders.mapReduce(mapf, reducef, {out:"temp1"});
// get cursor over MR values
cursor = db.temp1.find();

// define map function
mapf1 = function() {
	emit( 0, {sum:this.value.qty, count:1} );
}

// define reduce function
reducef1 = function(key, values) {
	total = 0;
	count = 0;
	for (x of values) {
		total = total + x.sum;
		count = count + x.count;
	}
	
	return {average:total/count};
}

// perform MapReduce
db.temp1.mapReduce(mapf1, reducef1, {out:"script4Avg"});

// get cursor over MR values
cursor1 = db.script4Avg.find();

// Output Results
while( cursor1.hasNext() ) {
	print( "\nAverage quantity for orders: " + cursor1.next().value.average.toFixed(2) );
}