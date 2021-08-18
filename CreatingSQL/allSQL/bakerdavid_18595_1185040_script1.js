/*
David Baker  / dabaker@csumb.edu
CST 363 	 / Prof. Wisneski
Assignment 4 / Part 1
*/

// create 3 documents
db.patients.insertMany( [
	{
		"name": "Smeagol",
		"ssn": 1,
		"age": 10,
		"address": "1506 Slimy Island, Apt. H, Moria, M.E. 12345"
	},
	{
		"name": "Gandalf",
		"ssn": 2,
		"age": 20,
		"address": "4213 Irmo Garden, Valinor, M.E. 43210"
	},
	{
		"name": "Saruman",
		"ssn": 3,
		"age": 30,
		"address": "1 Castle Orthanc, Isengard, M.E. 89012",
		"prescriptions":
			[
			   { "id": "RX743009", "tradename": "Hydrochlorothiazide"   },
		       { "id": "RX656003", "tradename": "LEVAQUIN", formula : "levofloxacin"  }
			]
	}
] );

// Retrieve and list all patient data. 
cursor1 = db.patients.find();
print("All patient data:");
while( cursor1.hasNext() ) {
	printjson(cursor1.next());
}

// Retrieve the patient document whose age is equal to 20.
cursor2 = db.patients.find( { "age": 20 } );
print("\nPatients whose age is 20:");
while( cursor2.hasNext() ) {
	printjson(cursor2.next());
}

// Retrieve the patients where age is less than 25.
cursor3 = db.patients.find( { "age": { "$lt": 25}} );
print("\nPatients whose age is less than 25:");
while( cursor3.hasNext() ) {
	printjson(cursor3.next());
}

// Using the drop method to delete the entire collection.
db.patients.drop();