db.patients.insert({"name" : "Judy Blume", "ssn" : "456-34-2345", "age" : "10", "address" : "123 Lollipop Lane"});
db.patients.insert({"name" : "Linda Lopez", "ssn" : "987-34-5869", "age" : "20", "address" : "123 Sandwich Plaza"});
db.patients.insert({"name" : "Courtney Love", "ssn" : "123-45-6789", "age" : "30", "address" : "123 Hamburger Blvd", "prescriptions" :[
{ id: "RX743009", tradename : "Hydrochlorothiazide" },
{ id : "RX656003", tradename : "LEVAQUIN", formula : "levofloxacin" }
] });


cursor = db.patients.find();
print("Displaying all records...");
while (cursor.hasNext()){
printjson(cursor.next())
};

age20 = db.patients.findOne({age: "20"});
print("Retrieving record with age = 20");
printjson(age20);

lessthan25 = db.patients.find({age: { $lt: "25" }});

print("Retrieving record with age less than 25");
while (lessthan25.hasNext()) {
	printjson(lessthan25.next());
}

db.patients.drop();





