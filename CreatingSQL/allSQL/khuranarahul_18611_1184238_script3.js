//Map function

mapf1 = function() {
	for (item in this.items) {
		emit (this.customer, {quantity : this.items[item].qty});
	}
}

//Reduce function

reducef1 = function(key, values){
  sum = 0;
  for (x of values){
    sum = sum + x.quantity;
  }
  return {quantity: sum};
}

db.orders.mapReduce(mapf1, reducef1, {out:"temp1"});


mapf2 = function() {
	emit (this.customerId, {zip : this.address.zip});
}

reducef2 = function(key, values) {
	sum = 0;
	zip = "";
	for (x of values) {
		if ("quantity" in x) {
			sum = sum + x.quantity;
		}
		if ("zip" in x) {
			zip = x.zip;
		}
	}

	return {quantity: sum, zip: zip};
}


db.customers.mapReduce(mapf2, reducef2, {out: {reduce:"temp1"}}); 


mapf3 = function() {
	emit(this.value.zip, this.value.quantity);
}

reducef3 = function(key, values) {
	sum = 0;
	for (x of values) {
		sum = sum + x
	}

	return sum;
}

print("Showing final results");
db.temp1.mapReduce(mapf3, reducef3, {out: "temp2"});
q = db.temp2.find();
while ( q.hasNext() ){
  printjson(q.next());
}
