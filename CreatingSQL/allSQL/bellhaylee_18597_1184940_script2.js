mapf = function() {
    if(this.address.zip > "89999") {
        emit(this.address.zip, 1);
    }
}

reducef = function(key, values){
  count=0;
  for (x of values){
    count = count + x;
  }
  return count;
}

db.customers.mapReduce(mapf, reducef, {out:"script2"});
cursor = db.script2.find();
while ( cursor.hasNext() ){
  printjson(cursor.next());
}