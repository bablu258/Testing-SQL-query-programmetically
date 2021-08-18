mapf = function() {
    if (this.address.zip.startsWith("9")) {
        emit(this.address.zip, 1);
    }
}
reducef = function(key, values) {
    total = 0;

    for (x of values) {
        total = total + x;
    }
    return {
        total
    };
}
db.customers.mapReduce(mapf, reducef, {
    out: "zipresult"
});
cursor = db.zipresult.find();
print("Zipcodes that start with 9 with instances: ");
while (cursor.hasNext()) {
    printjson(cursor.next());
}