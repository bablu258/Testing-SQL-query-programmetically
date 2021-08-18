

//  Script 1
//  Arlon Arriola
//  CST-363
//  Module 6 - Mongo DB
//  script1.js

print('\nHomework Problem #1:');

// Insert 3 patients, update one with two prescriptions, retrieve and print all patients, retrieve and print one patient age 20, retrieve and print all patients under 25 years old:
print("\nInsert 3 patients, update one with two prescriptions, retrieve and print all patients, retrieve and print one patient age 20, retrieve and print all patients under 25 years old:");

db.patients.insertMany([
  {name: "Patient A", ssn: 123456789, age: 10, address: "1600 Pensylvania Avenue, Washington DC, CA, 95062" }
  ,{name: "Patient B", ssn: 123456790, age: 20, address: "1601 Pensylvania Avenue, Washington DC, NV, 95062" }
  ,{name: "Patient C", ssn: 123456791, age: 30, address: "1602 Pensylvania Avenue, Washington DC, AZ, 95062" }
]);

db.patients.update({name:"Patient C"},{$set:{prescriptions : [
  { id: "RX743009", tradename : "Hydrochlorothiazide" }
  ,{ id : "RX656003", tradename : "LEVAQUIN", formula : "levofloxacin" }
]}});

print("\nAll Patients:");
var all_patients_cursor=db.patients.find();
while(all_patients_cursor.hasNext())
  printjson(all_patients_cursor.next());

print("\nOne patient age 20:");
printjson(db.patients.findOne({age:20}));

print("\nPatients under 25:");
var under25_cursor=db.patients.find({age:{$lt:25}});
while(under25_cursor.hasNext())
  printjson(under25_cursor.next());

db.patients.drop();
