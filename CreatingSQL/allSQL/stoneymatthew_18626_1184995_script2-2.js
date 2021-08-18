/*
*    Matthew Stoney
*    CST-363, Wisneski
*    06/08/2021
*
*    Assignment 4, problem 2
*/

mapf = function() {
if (Math.floor(this.address.zip / 10000) == 9) {
		emit(this.address.zip, 1);
	}

}

reducef = function(key, values) {
	count = 0;
	for (i = 0; i < values.length; i++) {
		count += values[i];	
	}
	return count;
}

db.customers.mapReduce(mapf, reducef, {out: "prob2"});
cursor = db.prob2.find();
while(cursor.hasNext()) {
	printjson(cursor.next());
}