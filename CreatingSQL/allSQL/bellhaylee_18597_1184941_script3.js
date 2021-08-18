mapf1 = function() {
    emit(this.customerId, {zip:this.address.zip});
}

reducef1 = function(key, values) {
    for (x of values) {
        zip = x.zip  
    }
    return {zip:zip}
}

db.customers.mapReduce(mapf1, reducef1, {out:"temp1"});

mapf2 = function() {    
    emit(this.customer, {qty:this.qty});
}

reducef2 = function(key, values) {
    sum = 0;
    zip = "";
    for (x of values) {
        zip = x.zip;
        sum = sum + x.qty;
    }
    if ("zip" in x) {
        zip = x.zip;
    }
    return {zip:zip, sum:sum}
}

db.orders.mapReduce(mapf2, reducef2, {out: {reduce:"temp1"}}); 

mapf3 = function() {
  emit(this.value.zip, {sum:this.value.sum}) 
}

reducef3 = function(key, values) {
    sum = 0;
    for (x of values) {
        sum = sum + x.sum;
    }
    return {sum:sum}
}

db.temp1.mapReduce(mapf3, reducef3, {out:"temp2"})
cursor = db.temp2.find();
while ( cursor.hasNext() ){
  printjson(cursor.next());
}