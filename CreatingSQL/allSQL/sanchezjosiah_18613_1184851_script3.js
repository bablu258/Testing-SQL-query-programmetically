//Script 3

mapf1 = function() {
  total = 0;
  for (item of this.items) {
    total += item.qty;
  }

  emit(this.customer, {qty: total});
}

reducef1 = function(key, values) {
  sum = 0;
  for (x of values) {
    sum += x.qty;
  }

  return {qty:sum};
}

db.orders.mapReduce(mapf1, reducef1, {out: "temp1"});

mapf2 = function() {
  emit(this.customerId, {zip:this.address.zip})
}

reducef2 = function(key, values) {
  zip = 0;
  qty = 0;
  for (x of values) {
    if ("qty" in x) {
      qty += x.qty;
    }
    if ("zip" in x)
      zip = x.zip
  }

  return {qty: qty, zip: zip};
}

db.customers.mapReduce(mapf2, reducef2, {out: {reduce:"temp1"}});

mapf3 = function() {
  emit({zip:this.value.zip}, {qty:this.value.qty});
}

reducef3 = function(key, values) {
  total = 0;
  for (x of values) {
    if ("qty" in x)
      total += x.qty;
    if ("zip" in x)
      zip = x.zip;
  }

  return {qty: total};
}

db.temp1.mapReduce(mapf3, reducef3, {out:"temp2"});
print("Quantity of Items Sold by Zip Code")
q = db.temp2.find();
while(q.hasNext()) {
  printjson(q.next());
}
