// aggregate orders by customer id
var mapOrders = function () {
  emit(this.customer, 1);
};

var reduceOrders = function (key, values) {
  var count = 0;
  for (var x of values) {
    count += x;
  }

  return { countOrders: count };
};

db.orders.mapReduce(mapOrders, reduceOrders, {
  out: "orderstemp",
});

// for each customerid - provide zip code
var mapCustomers = function () {
  emit(this.customerId, { zip: this.address.zip });
};

var reduceCombine = function (key, values) {
  var zip,
    count = 0;
  for (var x of values) {
    if ("countOrders" in x) {
      count += x.countOrders;
    }
    if ("zip" in x) {
      zip = x.zip;
    }
  }
  return { customerId: key, zip: zip, count: count };
};

db.customers.mapReduce(mapCustomers, reduceCombine, {
  out: { reduce: "orderstemp" },
});

// aggregate by zipcode
var mapAll = function () {
  emit(this.value.zip, { count: this.value.count });
};

var reduceAll = function (key, values) {
  var totalCount = 0;
  for (var x of values) {
    totalCount += x.count;
  }

  return totalCount;
};

db.orderstemp.mapReduce(mapAll, reduceAll, { out: "result" });
var cursor = db.result.find().sort({ _id: 1 });
cursor.forEach(printjson);
