db.patients.insert ({ "name" : "Dave", "ssn" :  "123456789", "age" : "10", "address" : "172 pinewood rd Tustin"});

db.patients.insert ({ "name" : "Ben", "ssn" :  "123456788", "age" : "20", "address" : "272 pinewood rd Tustin"});

db.patients.insert ({ "name" : "Petersen", "ssn" :  "123456787", "age" : "30", "address" : "372 pinewood rd Tustin"});

db.patients.update ({ "name" : "Petersen" } , { "$set" : { "prescriptions": [{ "id" : "RX743009", "tradename" : "Hydrochlorothiazide"}, { "id" : "RX656003", "tradename" : "LEVANQUIN", "formula" : "levofloxacin"}] } });

print("\n\nlist all patient data:\n")
cursor =  db.patients.find()
while(cursor.hasNext())
{
printjson(cursor.next())
} 


print("\n\nlist patient whose age is 20:\n")
cursor = db.patients.find({"age": "20"})
while(cursor.hasNext())
{
printjson(cursor.next())
} 

print("\n\nlist patient aged 25 or less:\n")
cursor = db.patients.find({ "age" : {"$lt" : "25"}})
while(cursor.hasNext())
{
printjson(cursor.next())
} 

db.patients.drop();



