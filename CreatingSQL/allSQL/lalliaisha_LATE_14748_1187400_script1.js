// step 1 and step 2 for Micha patient
db.patients.insertMany([
{  "name" : "Dana", "ssn" : 1234, "age" : 10 , "address": "4637 Sunset rd, MI"},
{  "name" : "Soha", "ssn" : 1325, "age" : 20 , "address": "6746 Blue Ring Ave, CA"},
{  "name" : "Micha","ssn" : 4563 , "age" : 30, "address": "7774 New Poland, NY", prescriptions: [ { id: "RX743009", tradename : "Hydrochlorothiazide"   }, { id : "RX656003", tradename : "LEVAQUIN", formula : "levofloxacin"  }]}
]);

// step3 
cursor = db.patients.find();
print("Displaying documents of all patients");
while (cursor.hasNext()){
	printjson(cursor.next());
}

// step4
cursor = db.patients.find( {age: 20});
print("Displaying all documents of patients of age 20");
while (cursor.hasNext()){
	printjson(cursor.next());
}

//step5
doca = db.patients.find( {age: {"$lt": 25}});
print("Displaying all documents of patients of age less than 25");
while (doca.hasNext()){
	printjson(doca.next());
}
// step6- final step
db.patients.drop();