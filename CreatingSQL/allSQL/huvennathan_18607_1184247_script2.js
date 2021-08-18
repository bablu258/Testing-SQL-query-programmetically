// map function over customers 
// for customers with zip code starting with "9"
// key : zip
// value : 1
mapf = function() {
	if (this.address.zip.startsWith("9"))
		emit(this.address.zip, 1);
}

// reduce function to summarize number of 
// customers with same zip
// key : zip
// value : total number of customers with zip
reducef = function(key, values) {
	total = 0;
	for (x of values) {
		total = total + 1;
	}
	return total;
}

// execute map reduce
db.customers.mapReduce(mapf, reducef, {out : "out_collection"});

// display results of map reduce
cursor = db.out_collection.find();
while (cursor.hasNext()) { 
	printjson(cursor.next());
}