mapf = function() {
    var tqty = 0;
    for (let i=0; i<this.items.length; i++) {
        tqty = tqty + this.items[i].qty;
    }
    emit( 0, {totalQuantity:tqty, count:1});
}

reducef = function(key, emits) {
    tcount = 0;
    tsum = 0;
    for (var emit of emits) {
        tsum = tsum + emit.totalQuantity;
        tcount = tcount + emit.count; 
    }
    tavg = tsum/tcount
    return { totalQuantity:tsum, count:tcount, average:tavg}
}

db.orders.mapReduce(mapf, reducef, {"out": "out_collections"});
cursor = db.out_collections.find();
print("\nShows the average quantity for orders.");
while (cursor.hasNext()){
    printjson(cursor.next());
}