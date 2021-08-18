mapf = function() {
	if (this.address.zip.startsWith('9')) {
		emit(this.address.zip, 0);
	}
}

reducef = function(key, values) {
	var count = 0;
	for (x of values) {
		count++;
	}
	
	return count;		
}

db.customers.mapReduce(mapf, reducef, {out: 'out_collection'});

var cursor = db.out_collection.find();
while(cursor.hasNext()) {
	printjson(cursor.next());
}
