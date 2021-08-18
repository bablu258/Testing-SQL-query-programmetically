mapf = function () {
    // Check if the order has an items property
    if ("items" in this) {
        for (let item of this.items) {
            // Check if item has a qty property
            if ("qty" in item) {
                emit(this.orderId, item.qty);
            }
        }
    }
};

reducef = function (key, values) {
    let quantitySumPerOrder = 0;
    for (let val of values) {
        quantitySumPerOrder += val;
    }
    return { quantitySumPerOrder };
};

mapAvg = function () {
    emit("average", this.value);
};

reduceAvg = function (key, values) {
    let totalQuantity = 0;
    for (let value of values) {
        totalQuantity += value.quantitySumPerOrder;
    }
    // Return total sum of quantity of all orders 
    // divided by the number of total orders 
    return totalQuantity / values.length;
};

db.orders.mapReduce(mapf, reducef, { out: "temp" });
db.temp.mapReduce(mapAvg, reduceAvg, { out: "average" });

cursor = db.average.find();
while (cursor.hasNext()) {
    printjson(cursor.next());
}
