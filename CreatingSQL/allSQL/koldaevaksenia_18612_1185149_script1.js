db.patients.drop();
db.patients.insertMany([
  {
    name: "Dallis Kasting",
    ssn: "202-97-9078",
    address: "09603 Westerfield Parkway",
    age: 10,
  },
  {
    name: "Svend Wyre",
    ssn: "153-75-7605",
    address: "70016 Lyons Terrace",
    age: 20,
  },
  {
    name: "Magda Sambrook",
    ssn: "681-60-4337",
    address: "91902 Haas Terrace",
    age: 30,
    prescriptions: [
      { id: "RX743009", tradename: "Hydrochlorothiazide" },
      { id: "RX656003", tradename: "LEVAQUIN", formula: "levofloxacin" },
    ],
  },
]);
var cursor;

print("#3----------------------------\n");
print("All Patients:\n");
cursor = db.patients.find();
cursor.forEach(printjson);
/**
 * Also can be done with iterator:
 *
 * while (cursor.hasNext()) {
 *   printjson(myCursor.next());
 * }
 *
 */

print("#4----------------------------\n");
print("Patients Age 20:\n");
cursor = db.patients.find({ age: 20 });
cursor.forEach(printjson);

print("#5----------------------------\n");
print("Patients Age 20:\n");
cursor = db.patients.find({ age: { $lt: 25 } });
cursor.forEach(printjson);

db.patients.drop();
