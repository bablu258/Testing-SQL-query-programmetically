//Part 1.1 & 12
print("Inserting patient data");
db.patients.insert({  "name" : "Tim", "address" : "1234 Cooleo Lane, Bracktown, Nevada", "age" : 10 });
db.patients.insert({  "name" : "Robert", "address" : "6246 Insanity Court, Canberra, Virginia", "age" : 20 });
db.patients.insert({  "name" : "Shaw", "address" : "85417 Whiffler Ave, Eureka, California", "age" : 30, "prescriptions" : [
{ id : "RX743009", tradename : "Hydrochlorothiazide" },
{ id : "RX656003", tradename : "LEVAQUIN", formula : "levofloxacin" }
] });

//Part 1.3, retrieve all patient data
print("Retrieving all patient data");
// retrieve all
q = db.patients.find();
while ( q.hasNext() ){
  printjson(q.next());
}

//Part 1.4
print("Retrieving patient data for patients equal to 20 years old");
q = db.patients.find( {age: {"$eq": 20}});
while ( q.hasNext() ){
  printjson(q.next());
}

//Part 1.5
print("Retrieving patient data for patients less than 25 years old");
q = db.patients.find( {age: {"$lt": 25}});
while ( q.hasNext() ){
  printjson(q.next());
}

//Part 1.6
print("Dropping patient collection");
db.patients.drop();