//collection: orders
mapf1 = function() {
    for (item of this.items) {
        emit(this.orderId, {quantity:item.qty} );
    }
}

//summerize quantity per customerid
reducef1 = function(key, values) {
  qty = 0;
  for (q of values) {
    qty = qty + q.quantity ;
  }
  return {quantity:qty};
}

db.orders.mapReduce(mapf1, reducef1, {out:"temp4_1"});
//DEBUG
//print("Quantity of items per orderId:")
//c = db.temp4_1.find();
//while(c.hasNext()){
//    printjson(c.next());
//}

//collection temp4_1
mapf2 = function() {
    emit(0, {sum:this.value.quantity, count:1});
}

reducef2 = function(key, values) {
  total =0;
  count =0;
  for (v of values) {
        total = total + v.sum;
        count = count + v.count;
  }

  return {sum:total, count:count, average:total/count};
}


db.temp4_1.mapReduce(mapf2, reducef2, {out:"temp4_2"});
print("Average quantity for orders:")
c = db.temp4_2.find();
while(c.hasNext()){
    printjson(c.next().value.average);
}