db.patients.insertMany( [
	{
		"name": "Bob",
		"ssn": "123-45-6789",
		"age": 10,
		"address": "1234 Willow Street"
	},
	{
		"name": "Joe",
		"ssn": "234-56-7891",
		"age": 20,
		"address": "98765 Maple Drive"
	},
	{
		"name": "Karen",
		"ssn": "345-67-8910",
		"age": 30,
		"address": "10293 Woodland Hills",
		"prescriptions" : [
                { "id": "RX743009", "tradename" : "Hydrochlorothiazide"   },
                { "id" : "RX656003", "tradename" : "LEVAQUIN", "formula" : "levofloxacin"  }
		]
	}
]);

db.patients.find(
	{"age": 20}
);

db.patients.find(
	{"age": { $lt: 20} }
);

cursor = db.patients.find({"age": 20});
print("Display all patients age 20");
while (cursor.hasNext()){
        printjson(cursor.next());
}

cursor2 = db.patients.find({"age": { $lt: 20} });
print("Display all patients less than 20 years old");
while (cursor2.hasNext()){
        printjson(cursor2.next());
}

db.patients.drop();


