mapf1 = function() {
	for (var x = 0; x < this.items.length; x++) {
		emit(this.customer, this.items[x].qty)
	}
}
reducef1 = function(key, value) {
	var sum = 0
	for (x of value) sum+=x
	return {quantity:sum}
}
mapf2 = function() {
	emit(this.customerId, {zipCode:this.address.zip})
}
reducef2 = function(key, value) {
	var zip = "", sum = 0
	for (x of value) {
		if ("zipCode" in x)	zip = x.zipCode
		if ("quantity" in x) sum += x.quantity
	}
	return {zipCode:zip, quantity:sum}
}
mapf3 = function() {
	emit(this.value.zipCode, {quantity:this.value.quantity})
}
reducef3 = function(key, value) {
	var sum = 0
	for (x of value) {
		sum+=x.quantity
	}
	return sum
}

db.orders.mapReduce(mapf1, reducef1, {out: "qtylist"})
db.customers.mapReduce(mapf2, reducef2, {out: { reduce:"qtylist"}})
db.qtylist.mapReduce(mapf3, reducef3, {out: "qtylist2"})

print("Report: Quantities sold per zip code")
var cursor = db.qtylist2.find().sort({_id:1})
cursor.forEach(printjson)







