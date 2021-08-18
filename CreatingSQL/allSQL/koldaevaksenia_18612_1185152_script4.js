var mapOrders = function () {
  emit(this.orderId, { items: this.items });
};

var reduceOrders = function (key, values) {
  var totalQty = 0;
  for (var x of values) {
    for (var item of x.items) {
      totalQty += item.qty;
    }
  }

  return { orderId: key, totalQty: totalQty };
};

db.orders.mapReduce(mapOrders, reduceOrders, { out: "result1" });

var mapOrders2 = function () {
  emit(0, { sum: this.value.totalQty });
};

var reduceOrders2 = function (key, values) {
  var totalSum = 0;
  for (var val of values) {
    totalSum += val.sum;
  }

  return totalSum / values.length;
};

db.result1.mapReduce(mapOrders2, reduceOrders2, { out: "result2" });
var cursor = db.result2.find();
cursor.forEach(printjson);
