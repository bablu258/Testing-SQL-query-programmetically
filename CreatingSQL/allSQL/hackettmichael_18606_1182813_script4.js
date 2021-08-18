mapf1 = function() {
	for (var x = 0; x < this.items.length; x++) {
		emit(this.orderId, this.items[x].qty)
	}
}
reducef1 = function(key, value) {
	var sum = 0
	for (x of value) sum+=x
	return {sum:sum}
}
mapf2 = function() {
	emit(1, {qty:this.value.sum})
}
reducef2 = function(key, value) {
	var totalOrders = 0, sum = 0 
	for (x of value) {
		totalOrders++
		sum+=x.qty
	}
	return sum/totalOrders 
}
db.orders.mapReduce(mapf1, reducef1, {out:"quantities"})
db.quantities.mapReduce(mapf2, reducef2, {out:"average"})

print("Report: average quantity per order")
var cursor = db.average.find()
cursor.forEach(printjson)