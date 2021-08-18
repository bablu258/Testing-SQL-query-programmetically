//Paola Torres 
//PART 1
//1. & 2. 
//create 3 documents in a collection named patients 
//patients should have attributes: name, ssn, age, address 
//patients should have the age of 10, 20, 30
//patient with age 30 should have prescriptions attribute 
db.patients.drop();
db.patients.insert(
      [
            {name: "Jerry", ssn: "111-11-1111", age: "10", address: "123 Some St., Slab City, CA 92233"},
            {name: "Liz", ssn: "222-22-2222", age: "20", address: "456 Main St., Venice, CA, 90291"},
            {name: "Steven", ssn: "333-33-3333", age: "30", address: "789 Center Rd., Paris, CA, 92551", 
                  prescriptions: 
                        [ {id: "RX743009", tradename: "Hydrochlorothiazide"}, 
                              {id: "RX656003", tradename: "LEVAQUIN", formula: "levofloxacin"}
                        ]
            }
      ]
);

//3.
//retrieve all patient data 
db.patients.find();

//4.
//retrieve the patient document whose age is equal to 20
db.patients.find({age: "20"});

//5. 
//retrieve the patients where age is less than 25
db.patients.find({age: {"$lt": "25"}});

//6. 
//use the drop method to delete the entire collection 
//db.patients.drop();

//7.
//1, 2, 3 print 
cursor = db.patients.find();
while (cursor.hasNext()) {
      printjson(cursor.next());
};

//4 print 
print("Patients whose age is equal to 20.");
cursor4 = db.patients.find({age: "20"});
while (cursor4.hasNext()) {
   printjson(cursor4.next());
}

//5 print 
print("Patients with an age less than 25.");
cursor5 = db.patients.find({age: {"$lt": "25"}});
while (cursor5.hasNext()) {
   printjson(cursor5.next());
}