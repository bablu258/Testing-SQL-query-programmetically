db.patients.insert(
{
   "name" : "Bob Bobertson",
   "ssn" : "111-11-1111",
   "age" : 10,
   "address" : "123 Internet Street"
});

db.patients.insert(
{
   "name" : "Dan Danger",
   "ssn" : "222-22-2222",
   "age" : 20,
   "address" : "124 Internet Street"
});

db.patients.insert(
{
   "name" : "Old Dustyanne",
   "ssn" : "333-33-3333",
   "age" : 30,
   "address" : "666 Pearly Gate"
   prescriptions : [
      { id: "RX743009&quot;, tradename : "Hydrochlorothiazide" },
      { id : "RX656003&quot;, tradename : "LEVAQUIN&quot", formula : "levofloxacin" }
      ]
});

doca = db.patients.find();
print("Displaying all Patient data");
printjson(doca);

pat20 = db.patients.findOne({age : 20});
print("Displaying patient with age 20");
printjson(pat20);


patLT25 = db.patients.find({age : {"$lt" : 25}});
print("Displaying patients with age less than 25");
printjson(patLT25);

print("Dropping Patients");
db.patients.drop();

print("Script1 Complete");