/*
*    Matthew Stoney
*    CST-363, Wisneski
*    06/08/2021
*
*    Assignment 4, problem 1
*/

db.patients.insertMany( [{ "name" : "Tom Hanks", "ssn" : "123-45-6789", "age" : 10, "address" : "123 Cool St" }, { "name" : "Ben Dover", "ssn" : "123-54-3210", "age" : 20, "address" : "456 Fake St" }, { "name" : "Anne Lively", "ssn" : "987-65-4321", "age" : 30, "address" : "789 B St", "prescriptions" : [
                { id: "RX743009", tradename : "Hydrochlorothiazide"   },
                { id : "RX656003", tradename : "LEVAQUIN", formula : "levofloxacin"}]
}]);

cursor = db.patients.find();
print("Displaying all patient info: ");
while (cursor.hasNext()) {
	printjson(cursor.next());
}

cursor = db.patients.find( {"age": { $eq: 20 }});
print("Displaying all patients with age of 20: ");
while(cursor.hasNext()) {
	printjson(cursor.next());
}

cursor = db.patients.find( {"age": { $lt: 25 }});
print("Displaying all patients age less than 25: ");
while(cursor.hasNext()) {
	printjson(cursor.next());
}

print("Dropping patients collection...");
db.patients.drop();