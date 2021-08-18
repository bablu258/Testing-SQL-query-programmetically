mapf = function() {
	emit(this.address.zip, { $regex: /^9/ })
}

reducef = function (key, values) {
	total = 0;
	for (x of values) {
		total=total+1;
	}
	return total;
}

db.customers.mapReduce( mapf, reducef, {out: "out_collection"));