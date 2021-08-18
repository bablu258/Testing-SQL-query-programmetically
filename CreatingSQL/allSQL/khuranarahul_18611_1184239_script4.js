//Map function

mapf = function() {
	sum = 0
	for (item in this.items) {
		sum = sum + this.items[item].qty;
		
	}
	emit (0, {count: 1, quantity: sum});
}

//Reduce function

reducef = function(key, values){
  sum = 0;
  count = 0;
  for (x of values){
  	count = count + x.count;
    sum = sum + x.quantity;
  }
  average = sum/count;
  return {average: average};
}

db.orders.mapReduce(mapf, reducef, {out:"mapResultOutput1"});


print("Average: quantity per order: ");
q = db.mapResultOutput1.find();
while ( q.hasNext() ){
  print(q.next().value.average)
}
