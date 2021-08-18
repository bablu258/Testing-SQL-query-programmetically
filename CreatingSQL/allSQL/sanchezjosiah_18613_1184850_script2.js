//Script 2

mapf = function() {
    zip = this.address.zip;
    if (zip >= '90000')
      emit(zip, {count:1});
}

reducef = function(key, values) {
  total = 0;
  for (x of values) {
    total += x.count;
  }

  return total;
}

db.customers.mapReduce(mapf, reducef, {out: "script2"});
cursor = db.script2.find();
while(cursor.hasNext()) {
  printjson(cursor.next());
}
