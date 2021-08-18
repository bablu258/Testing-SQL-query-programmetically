
mapf1 = function() {
    var count = 0;
    for (item of this.items) {
        count = count + item.qty;
    }

    emit(this.customer, {
        qty: count
    });
}

reducef1 = function(key, values) {
    count_order = 0;
    for (x of values) {
        count_order = count_order + x.qty;
    }
    return {
        qty: count_order
    };
}
db.orders.mapReduce(mapf1, reducef1, {
    out: "temp1"
});
mapf2 = function() {

    emit(this.customerId, {
        zip: this.address.zip
    })
};

reducef2 = function(key, values) {
    sum = 0;
    zip = "";
    for (x of values) {
        if ("qty" in x) {
            sum = sum + x.qty;

        }
        if ("zip" in x) {
            zip = x.zip;
        }
    }
    return {
        zip: zip,
        count: sum
    };
}

db.customers.mapReduce(mapf2, reducef2, {
    out:{ reduce: "temp1"}
});

q = db.temp1.find();
while (q.hasNext()) {
    printjson(q.next());
};