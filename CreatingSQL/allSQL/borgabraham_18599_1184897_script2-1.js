//script 2

mapf = function()
{
	// emit is a function that is part of MongoDB. First param is the key value, second param
	// is the value
	if ((this.address.zip).startsWith('9'))
	{
		emit(this.address.zip, 1); // this refers to a document. The document is passed in using the this.
	}
}

// values param is a list. In this function we simply add up the values.
// the reducef requires a return statement.
reducef = function(key, values)
{
	total = 0;
	for (x of values)
	{
		total = total + x;
	}
	return total;
}

// we call mapReduce on the customers collection
// pass in the mapf and the reducef,\
// the third param specifies where to put the result, this is a json document.
db.customers.mapReduce(mapf, reducef, {out: "out_collection"});

// in the script, find() does not show the results on the console, it just returns a cursor.
cursor = db.out_collection.find();
while(cursor.hasNext())
{
	printjson(cursor.next());
}