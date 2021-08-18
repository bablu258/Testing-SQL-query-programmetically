//Map function

mapf = function() {
	if (this.address.zip.charAt(0) == '9') {
		emit(this.address.zip, 1);
	}
}

//Reduce function

reducef = function(key, values){
  count=0;
  for (x of values){
    count = count + x;
  }
  return count;
}

db.customers.mapReduce(mapf, reducef, {out:"mapreduce1"});
q = db.mapreduce1.find();
while ( q.hasNext() ){
  printjson(q.next());
}

