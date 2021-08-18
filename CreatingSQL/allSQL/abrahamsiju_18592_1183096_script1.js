//inserts data into patients table
db.patients.drop()
db.patients.insertMany([
{  "name" : "John", "ssn" : "123456789", "age" : 10, "address" : "100 Goa Way" },
{  "name" : "Jacob", "ssn" : "987654321", "age" : 20, "address" : "101 Goa Way" },
{  "name" : "Henry", "ssn" : "456123789", "age" : 30, "address" : "102 Goa Way" }
]);

//displays all patient data
db.patients.find();

//displays patient whose age = 20
db.patients.find({age: 20});

//displays patients whose age < 25
db.patients.find( {age: {"$lt": 25}});

//drops patient table
db.patients.drop();
