mapf = function () {
    if (this.address.zip[0] == "9") {
        emit(this.address.zip, 1);
    }
};

reducef = function (key, values) {
    return Array.sum(values);
};

db.customers.mapReduce(mapf, reducef, { out: "num_customers_per_zip" });
cursor = db.num_customers_per_zip.find();

while (cursor.hasNext()) {
    printjson(cursor.next());
}
