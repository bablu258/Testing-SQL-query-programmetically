db.patients.insert ( {"name": "Fadl", "ssn" : "000-000-0000", "age" : 10, "address" : "123 street"} )
db.patients.insert ( {"name": "Abbas", "ssn" : "000-000-0001", "age" : 20, "address" : "124 street"} )
db.patients.insert ( {"name": "Hassan", "ssn" : "000-000-0002", "age" : 30, "address" : "125 street"} )

db.patients.update ( {"age" : 30}, {$push: { "prescriptions" : {"id" : "RX743009", "tradename" : "Hydrocholorothiazide"} } } )
db.patients.update ( {"age" : 30}, {$push: { "prescriptions" : {"id" : "RX656003", "tradename" : "LEVAQUIN", "formula" : "levofloxacin"} } } )

print("\n\n list all patient:\n")

cursor = db.patients.find();

while(cursor.hasNext())
{
printjson(cursor.next());
}

print("\n\nlist patient aged 20:\n")

cursor = db.patients.find( { "age" : 20 } );

while(cursor.hasNext())
{
printjson(cursor.next());
}

print("\n\nlist patient aged 25 or less:\n")

cursor = db.patients.find( { "age" : { $lt: 25 } } );

while(cursor.hasNext())
{
printjson(cursor.next());
}

db.patients.drop();