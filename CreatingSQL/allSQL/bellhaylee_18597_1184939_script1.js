db.patients.insert({ "name" : "Bob", "ssn" : "123456789", "age" : "30", "address" : "100 Main St", "prescriptions" : [{ "id" : "RX743009", "tradename" : "Hydrochlorothiazide"}, { "id" : "RX656003", "tradename" : "LEVAQUIN", "formula" : "levofloxacin" }]});
db.patients.insert({ "name" : "May", "ssn" : "555555555", "age" : "20", "address" : "100 30th St" });
db.patients.insert({ "name" : "Tim", "ssn" : "987654321", "age" : "10", "address" : "500 Texas St" });

db.patients.find();

db.patients.find({ age : "20"});

db.patients.find({ age : { "$lt" : 25 }});

db.patients.drop()