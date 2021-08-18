mapf = function() {
    var z = this.address.zip;
    if (z.startsWith('9')) {
        emit(z, 1);
    } else {
        emit(z, 0);
    }
}

reducef = function(key, emits) {
    tcount = 0;
    for (emit of emits) {
        tcount = tcount + emit
    }
    return tcount;
}

db.customers.mapReduce(mapf, reducef, {"out": "out_collections"});
cursor = db.out_collections.find({value:{$gt:0}});
print("\nShows zip code that start with ‘9’ and the count of customers for each zip code.");
while (cursor.hasNext()){
    printjson(cursor.next());
}