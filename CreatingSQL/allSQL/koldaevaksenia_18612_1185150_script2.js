var mapf = function () {
  if (this.address.zip.startsWith("9")) {
    emit(this.address.zip, 1);
  }
};

var reducef = function (key, values) {
  let count = 0;
  for (const x of values) {
    count += x;
  }

  return count;
};

db.customers.mapReduce(mapf, reducef, { out: "script2" });
var cursor = db.script2.find();
print("Zip Codes Starting With '9' Count:\n");
cursor.forEach(printjson);
