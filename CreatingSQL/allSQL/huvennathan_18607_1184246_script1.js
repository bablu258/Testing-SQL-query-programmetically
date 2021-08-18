// 1. Create a collection "patients" and
// add 3 patient documents
db.patients.insertMany([
{"name":"Jim Henson", "ssn":"111-11-1111", "age":10, "address":"13 Frog Ln, Manhattan, NY 10001"},
{"name":"Luke Skywalker", "ssn":"222-22-2222", "age":20, "address":"1 Desert Way, Tatooine, AZ 85003"},
{"name":"Shirly Temple", "ssn":"333-33-3333", "age":30, "address":"2 Dimples St, Palo Alto, CA 90210"}])

// 2. Add a list of prescriptions to the patient
// who is age 30
age30 = db.patients.findOne({"age":30});
age30.prescriptions = [
	{id:"RX743009", tradename:"Hydrochlorothiazide"},
	{id:"RX656003", tradename:"LEVAQUIN", formula:"levofloxacin"}
	];
db.patients.replaceOne({"age":30}, age30);

// 3. Retrieve all patient data
cursor = db.patients.find()
print("Displaying all patient documents")
while(cursor.hasNext()){
	printjson(cursor.next())
}

// 4. Retrieve the patient who is age 20
doca = db.patients.findOne({"age":20})
print("Patient with age 20")
printjson(doca)

// 5. Retrieve all patients where age is 
// less than 25
cursor = db.patients.find({"age":{$lt:25}})
print("Displaying patients with age < 25")
while(cursor.hasNext()){
	printjson(cursor.next())
}

// 6. Delete the patient collection
db.patients.drop()

