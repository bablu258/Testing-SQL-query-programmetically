/*
David Baker  / dabaker@csumb.edu
CST 363 	 / Prof. Wisneski
Assignment 4 / Part 2
*/

// DO a map reduce of the customers collections
// produce a report that shows zip code that start with ‘9’ 
// and the count of customers for each zip code.

// define map function
mapf = function() {
	currentZip = this.address.zip;
	if(currentZip[0] == "9") {
		emit(currentZip, 1);
	}
}

// define reduce function
reducef = function(key, values) {
	count = 0;
	for (customer of values){
		count = count + customer;
	}
	
	return count;
}

// perform MapReduce
db.customers.mapReduce(mapf, reducef, {out:"zipWithNine"});

// get cursor over MR values
cursor1 = db.zipWithNine.find();
cursor1.sort( {"value": -1} );

// Output Results
print("All customers in zipcodes starting with 9:");
while( cursor1.hasNext() ) {
	printjson(cursor1.next());
}