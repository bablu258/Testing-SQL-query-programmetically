/*
CST363 Intro to Database Systems
Student Name: Miki Fukushima
Assignment 4
Script 1
*/


// Step 1: create 3 documents in a collection named "patients".
//    Each document has attributes: name, ssn, age, address, patients ages should be 10, 20, and 30
// Step #2 Patient with age 30 has a list of prescriptions

db.patients.drop();
db.patients.insertMany([
{
   "name": "Mary Nicolas",
   "ssn": "101-55-6789",
   "age": 10,
   "address": { 
      "street": "1255 Bolton Ave",
      "city": "San Francisco",
      "state": "Califonria",
      "zip": "90011"
   }
},
{
   "name": "Gary Wong",
   "ssn": "111-78-1122",
   "age": 20,
      "address": { 
      "street": "335 Wilson Ave",
      "city": "Portland",
      "state": "Oregon",
      "zip": "55012"
   }
},
{
   "name": "Alice Ito",
   "ssn": "556-11-4565",
   "age": 30,
      "address": { 
      "street": "556 Culver Ave",
      "city": "Los Angeles",
      "state": "California",
      "zip": "90034"
   },
   "prescriptions" : [
      { "id": "RX743009", "tradename" : "Hydrochlorothiazide"   },
      { "id" : "RX656003", "tradename" : "LEVAQUIN", "formula" : "levofloxacin"  }
    ]
}
]);

// Step 3: Retreive and list all patients data
cursor = db.patients.find();
print("All patients: ")
while (cursor.hasNext()) {
  printjson(cursor.next());
}

// Step 4: Retreive the patient document whose age is equal to 20
cursor = db.patients.find({age: 20})
print("Patient whose age is 20: ")
while (cursor.hasNext()) {
  printjson(cursor.next());
}

// Step 5: Retreive the patients where age is less than 25
cursor = db.patients.find({age: { $lt: 25}})
print("Patients whose age is less than 25: ")
while (cursor.hasNext()) {
  printjson(cursor.next());
}

// Step 6: Drop the collection
db.patients.drop()


