//Paola Torres 
//PART 2
//produces a report that shows zip code that start with 9 and the count of customers for each zip code 

mapf = function() {
   
   if (this.address.zip.match(/^9.*$/)) {
      emit(this.address.zip, {count: 1});
   }
   
}

reducef = function(key, values) {
   count = 0;
   
   for (x of values) {
      count = count + x.count;
   }
   return {count: count};
}

db.customers.mapReduce(mapf, reducef, {out: "script2"});
cursor = db.script2.find();

while (cursor.hasNext()) {
   printjson(cursor.next());
}


