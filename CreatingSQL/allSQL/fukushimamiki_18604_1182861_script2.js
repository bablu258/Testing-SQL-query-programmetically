/*
CST363 Intro to Database Systems
Student Name: Miki Fukushima
Assignment 4
Script 2
*/

// Todo: create map reduce of the customers collection and produce a report that shows
// Zip code that starts with 9 and the count of customers for each zip code

// Create map function, emit only if the zip code starts with 9 and add 1 everytime it is found
mapf = function() {
  if ((this.address.zip).startsWith('9')) {
    emit(this.address.zip,1)
  }
}

// Create reduce function, continue appending the occurance to get the total per zip code
reducef = function(key, values) {
  total=0;
  for (x of values) {
    total = total + x;
  }
  return total;
};

// Output the results to part2 collection
db.customers.mapReduce(mapf, reducef, {out: "part2"});

// Print out the contents of part2
cursor = db.part2.find();
while (cursor.hasNext()) {
  printjson(cursor.next());
};

/* OUTPUT 

"_id" : {ZIP CODE}, "value" : {COUNT OF CUSTOMERS}

{ "_id" : "93714", "value" : 2 }
{ "_id" : "90096", "value" : 1 }
{ "_id" : "91355", "value" : 1 }
{ "_id" : "92807", "value" : 1 }
{ "_id" : "95380", "value" : 1 }
{ "_id" : "94161", "value" : 2 }
{ "_id" : "91186", "value" : 1 }
{ "_id" : "93727", "value" : 1 }
{ "_id" : "90312", "value" : 1 }
{ "_id" : "93786", "value" : 1 }
{ "_id" : "90038", "value" : 1 }
{ "_id" : "94244", "value" : 1 }
{ "_id" : "90266", "value" : 1 }
{ "_id" : "90074", "value" : 1 }
{ "_id" : "93715", "value" : 1 }
{ "_id" : "93720", "value" : 1 }
{ "_id" : "93662", "value" : 1 }
{ "_id" : "94160", "value" : 1 }
{ "_id" : "91109", "value" : 1 }
{ "_id" : "92850", "value" : 1 }
{ "_id" : "94230", "value" : 1 }
{ "_id" : "92691", "value" : 1 }
{ "_id" : "94152", "value" : 1 }
{ "_id" : "92704", "value" : 1 }
{ "_id" : "92621", "value" : 1 }
{ "_id" : "93706", "value" : 4 }
{ "_id" : "93792", "value" : 1 }
{ "_id" : "92186", "value" : 1 }
{ "_id" : "93711", "value" : 7 }
{ "_id" : "93721", "value" : 3 }
{ "_id" : "90247", "value" : 1 }
{ "_id" : "93722", "value" : 3 }
{ "_id" : "95827", "value" : 1 }
{ "_id" : "93704", "value" : 1 }
{ "_id" : "94208", "value" : 1 }
{ "_id" : "93777", "value" : 2 }
{ "_id" : "90084", "value" : 1 }
{ "_id" : "95887", "value" : 1 }
{ "_id" : "94257", "value" : 1 }
{ "_id" : "93888", "value" : 1 }
{ "_id" : "93745", "value" : 1 }
{ "_id" : "91185", "value" : 2 }
{ "_id" : "93726", "value" : 3 }
{ "_id" : "93718", "value" : 3 }
{ "_id" : "94294", "value" : 1 }
{ "_id" : "90025", "value" : 1 }
{ "_id" : "93031", "value" : 1 }
{ "_id" : "93101", "value" : 1 }
{ "_id" : "93703", "value" : 2 }
{ "_id" : "93710", "value" : 2 }
{ "_id" : "93728", "value" : 2 }

*/