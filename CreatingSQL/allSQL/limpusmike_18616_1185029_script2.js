/* 
 * Mike Limpus
 * Assignment 4
 * Script 2
 * code a script2.js file that does a map reduce of the customers collections 
 * and produces a report that shows zip code that start with ‘9’ and the count
 * of customers for each zip code.
 */

// Create a map using zips from the documents as the id
map = function() {
    var zip = this.address.zip;
    emit(zip, 1)
}

// Count the occurences of each zip
reduce = function(key, values) {
    var countZip = 0;
    for(x of values) {
        countZip = countZip + x;
    }
    return {zip: key, count: countZip};
}

// Perform the map reduce
db.customers.mapReduce(map, reduce, {out: "part2"});

// Print and sort the Zip codes starting with 9 and the count of each
print("ZIP codes starting with 9");
nines = db.part2.find({_id: {$gt: "89999"} }).sort({_id: 1});
while(nines.hasNext()) {
    printjson(nines.next());
}

// Print the occurances of every zip
print("Count of Customers from each ZIP code");
cursor = db.part2.find().sort({_id: 1});
while(cursor.hasNext()) {
    printjson(cursor.next());
}