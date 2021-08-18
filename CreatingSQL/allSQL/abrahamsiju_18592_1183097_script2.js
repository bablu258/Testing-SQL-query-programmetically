mapf = function() {
  if (this.zipcode.startsWith("9")) emit(9, 1);
}

reducef = function(key, values) {
    zipcount = 0;
    for (x of values) {
        zipcount = zipcount + x;
    }
    return zipcount;
}
    
    
db.names.mapReduce(mapf, reducef, {out:"zipcode"});
q = db.zipcode.find();
while (q.hasNext()) {
    printjson(q.next());
}