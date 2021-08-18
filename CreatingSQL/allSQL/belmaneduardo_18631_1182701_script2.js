mapf = function() 
{
	if (this.address.zip.startsWith("9"))
		emit(this.address.zip, 1);
}

reducef = function(key, values) 
{
	total = 0;
	
	for (x of values)
		total = total + x;
	
	return {customerCount: total};
}

db.customers.mapReduce( mapf, reducef, {out: "mr_coll"})

cursor = db.mr_coll.find();
	while (cursor.hasNext()) {
	printjson(cursor.next());
}
	