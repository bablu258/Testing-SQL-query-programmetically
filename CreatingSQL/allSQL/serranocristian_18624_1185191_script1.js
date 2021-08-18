db.patients.insertMany([{ "name":"Adam", "ssn":1234, "age" : 10, "address":"1 Oak"}, { "name":"Bob", "ssn":1235, "age" : 20, "address":"2 Oak"}, { "name":"Carl", "ssn":1236, "age": 30, "address":"3 Oak"}])

print("All patients")
db.patients.update({age: 30}, {$set :{ prescriptions : [{ id: "RX743009", tradename : "Hydrochlorothiazide"   }, { id : "RX656003", tradename : "LEVAQUIN", formula : "levofloxacin"  }] }});

findpatients = db.patients.find()
while (findpatients.hasNext()){
printjson(findpatients.next());
}

print("Patients with age 20")

findage = db.patients.find({age:20})
while (findage.hasNext()){
printjson(findage.next());
}

print("Patients under 25")

findage = db.patients.find({age:{"$lt":25}})
while (findage.hasNext()){
printjson(findage.next());
}


db.patients.drop();