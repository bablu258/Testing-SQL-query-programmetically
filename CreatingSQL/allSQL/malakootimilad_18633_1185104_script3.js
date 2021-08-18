mapFC = function(){ //mapFC = map function for customers 
  emit(this.customerId,  {
    zip:this.address.zip
  }
  );
}
mapFO = function(){ //mapFO = map Function for Orders

  for(item of this.items)
  {
    if(item.itemNo == 1)
    {
      emit(this.customer,{qty:item.qty});
    }
  }
}

reduceFC = function(key,values){ //reduce function for customers

  return ({zip:values[0].zip});
}

db.customers.mapReduce(mapFC,reduceFC,{out:"tempDB"}); // temporary database

cursor = db.tempDB.find();

while(cursor.hasNext()){ printjson(cursor.next()); }


reduceFO = function(key,values){ // refuce function for Orders
  var sum = 0;

  for (value of values)
  {
    if("zip" in value){
      zip = value.zip;
    }
    if("qty" in value){
      sum = sum + value.qty;
    }
  }
  return{zip:zip,qty:sum}
}

db.orders.mapReduce(mapFO,reduceFO,{out: {reduce:"tempDB"}});

cursor = db.tempDB.find();

while(cursor.hasNext()){ printjson(cursor.next()); }