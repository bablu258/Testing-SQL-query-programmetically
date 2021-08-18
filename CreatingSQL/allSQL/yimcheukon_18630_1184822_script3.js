//collection: orders
mapf1 = function() {
    for (item of this.items) {
        emit(this.customer, {quantity:item.qty} );
    }
}

//summerize quantity per customerid
reducef1 = function(key, values) {
  qty = 0;
  for (q of values) {
    qty = qty + q.quantity ;
  }
  return {quantity:qty}
}

db.orders.mapReduce(mapf1, reducef1, {out:"temp3_1"});
//DEBUG
//print("Quantity of items per customerid:")
//c = db.temp3_1.find();
//while(c.hasNext()){
//    printjson(c.next());
//}

//collection: customers
mapf2 = function() {
    emit(this.customerId, {zip:this.address.zip, quantity:0});
}

//summerize zip per customer
reducef2 = function(key, values) {

  qty = 0;
  zip = 0;
  for (v of values) {
    if ("zip" in v) {
      zip = v.zip;
    }
    if ("quantity" in v) {
      qty = qty + v.quantity;
    }
  }
  return {zip:zip, quantity: qty}

}

db.customers.mapReduce(mapf2, reducef2, {out: {reduce:"temp3_1"}});
//DEBUG
//print("value per customer key:")
//k = db.temp3_1.find();
//while(k.hasNext()){
//    printjson(k.next());
//}


//collection: temp3_1
mapf3 = function() {
  emit(this.value.zip, {quantity:this.value.quantity});
}

reducef3 = function(key, values) {

    qty = 0;

    for (x of values){
        if ("quantity" in x){
            qty = qty + x.quantity;
        }
    }

    return {quantity: qty}
}

print("Quantity of sold items per zip:")
db.temp3_1.mapReduce(mapf3, reducef3, {out: {reduce : "temp3_2"} });
cursor = db.temp3_2.find();
while(cursor.hasNext()){
    printjson(cursor.next());
}
