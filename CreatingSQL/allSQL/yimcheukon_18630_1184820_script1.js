//1
first = db.patients.insertMany( [
{"name" : "Tony", "ssn" : "123-45-6789", "age" : 10, "address" : "111 Park St" },
{"name" : "Jeni", "ssn" : "923-45-6789", "age" : 20, "address" : "111 Main St" },
{"name" : "Kelly", "ssn" : "823-45-6789", "age" : 30, "address" : "111 Noel St" }
]);
print("1.) Inserted patients:");
printjson(first);

//2
second = db.patients.updateMany(
                        { "age": {$eq: 30 } },
                        {
                            $set: {"prescriptions": [
                                                    { "id" : "RX743009", "tradename" : "Hydrochlorothiazide" },
                                                    { "id" : "RX656003", "tradename" : "LEVAQUIN", "formula" : "levofloxacin" }
                                                    ]
                                  }
                        }
                      );
print("2.) Updated the patient with age 30 has a list of prescriptions:");
printjson(second);

//3
third = db.patients.find();
print("3.) Retrieved and list all patient data:");
while (third.hasNext()){
	printjson(third.next())
}

//4
fourth = db.patients.find({"age":20});
print("4.) Retrieved the patient document whose age is equal to 20:");
while (fourth.hasNext()){
	printjson(fourth.next())
}

//5
fifth = db.patients.find({"age":{$lt:25}});
print("5.) Retrieved the patients where age is less than 25:");
while (fifth.hasNext()){
	printjson(fifth.next())
}

//6
db.patients.drop();
print("6.) Deleted the entire Patients collection:");
