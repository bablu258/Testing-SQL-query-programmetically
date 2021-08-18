//code a script2.js file that does a map reduce of the customers 
//collections and produces a report that shows zip code that start 
//with ‘9’ and the count of customers for each zip code.

mapZip = function(){
		address = this.address;
		zip = address.zip;
		if(zip[0] == "9")
		emit(zip, 1);
}

reduceZip = function(key, values) {
	total = 0;
	for (x of values) {
		total = total + x;
	}
	return total;
}

db.customers.mapReduce(mapZip, reduceZip, {out:"out_collection"});

cursor = db.out_collection.find();
print("Number of customers with zip code that starts with 9");
while (cursor.hasNext()) {
	printjson(cursor.next());
}