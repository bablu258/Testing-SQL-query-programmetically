mapf1 = function () {
    if ("items" in this) {
        for (let item of this.items) {
            if ("qty" in item) {
                emit(this.customer, item.qty);
            }
        }
    }
};

reducef1 = function (key, values) {
    qty = 0;
    for(let x of values) {
        qty += x;
    }
    return { qty };
};

db.orders.mapReduce(mapf1, reducef1, { out: "temp1" });

// Part 2
mapf2 = function () {
    if (this.address != null && this.address.zip != null) {
        emit(this.customerId, { zip: this.address.zip });
    }
};

reducef2 = function (key, values) {
    let results = {};
    results.qty = 0;
    for (let x of values) {
        if ("qty" in x) {
            results.qty += x.qty;
        }

        if ("zip" in x) {
            results.zip = x.zip;
        }
    }

    return results;
};

db.customers.mapReduce(mapf2, reducef2, { out: { reduce: "temp1" } });

mapf3 = function () {
    if ("qty" in this.value) {
        emit(this.value.zip, { qty: this.value.qty });
    }
};

reducef3 = function (key, values) {
    results = {};
    results.qty = 0;
    for (let x of values) {
        if ("qty" in x) {
            results.qty += x.qty;
        }
    }
    return results;
};

db.temp1.mapReduce(mapf3, reducef3, { out: "temp2" });
cursor = db.temp2.find();
printCursor(cursor);

function printCursor(cursor) {
    while (cursor.hasNext()) {
        printjson(cursor.next());
    }
}
