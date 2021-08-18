mapf = function() {
	if (this.address.zip.startsWith('9')) emit (this.address.zip,1)
}
reducef = function(key, count) {
	sum = 0;
	for (x of count) sum+=x
	return sum
}
db.customers.mapReduce(mapf, reducef, {out:"zipReport"})
print("Report: Customers per zip code that starts with 9")
var cursor = db.zipReport.find().sort({_id:1})
cursor.forEach(printjson)