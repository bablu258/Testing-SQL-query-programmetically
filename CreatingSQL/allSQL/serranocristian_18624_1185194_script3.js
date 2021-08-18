// example 4
// calculate average grade by instructor
// student collection has objects with format
// {name:  course:[{courseid:, grade: }, . . . ]
// for each student emit the grade sum and count
// which will be used to calculate average
// and key:courseid
db.temp1.drop()
mapf1 = function() {
	emit(this.customer , {order_Id : this.orderId , order_count : 1} );
}



reducef1 = function(key, values) {
  count = 0;
  for (x of values) {
    count = count + x.order_count;
  }
  return {order_count:count}
}


db.orders.mapReduce(mapf1, reducef1, {out:"temp1"})


mapf2 = function() {
    emit(this.customerId, {order_count : 0 , zipcode : this.address.zip});
}

reducef2 = function(key, values) {
  count = 0;
  zipcode = "";
  for (x of values) {
    if ("order_count" in x) {
      count = count + x.order_count;
    }
    if ("zipcode" in x) {
      zipcode = x.zipcode;
    }
  }
  return {order_count:count, zipcode:zipcode}
}

db.customers.mapReduce(mapf2, reducef2, {out: {reduce:"temp1"}}); 

mapf3 = function() {
  emit(this.value.zipcode, {order_count:this.value.order_count}) 
}

reducef3 = function(key, values) {
  count=0;
  for (x of values) {
    count = count + x.order_count;
  }
  return {order_count: count}
}

db.temp1.mapReduce(mapf3, reducef3, {out:"temp2"})
q = db.temp2.find();
while ( q.hasNext() ){
  printjson(q.next());
}
