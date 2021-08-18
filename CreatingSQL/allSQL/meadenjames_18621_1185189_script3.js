db.temp1.drop();
db.temp2.drop();
//Orders Map Reduce
mapf1 = function() {
    
    itemArrayElement = this.items[0].qty;
    quantity = itemArrayElement;
    emit(this.customer, quantity );
  
}

reducef1 = function(key, values){
  sum = 0;
  for (x of values){
    sum = sum + x;
  }
  return {qty:sum};
}

db.orders.mapReduce(mapf1, reducef1, {out:"temp1"})

//Customers Map Reduce
mapf2 = function() {
    
    //customer = this.custmoerId;
    //zipcode = this.address.zip;
    emit(this.customerId,  this.address.zip);
  
}

reducef2 = function(key, values){
  
  return {zip:values};
  
}

db.customers.mapReduce(mapf2, reducef2, {out: {reduce: "temp1"}})


mapf3 = function() {
  emit(this.value.zip[1], this.value.zip[0].qty) 
}

reducef3 = function(key, values) {
 
  return values;

}

db.temp1.mapReduce(mapf3, reducef3, {out:"temp2"})

cursor = db.temp2.find();

while (cursor.hasNext()){
    printjson(cursor.next());
}






