db.patients.insertMany([
{"name":"Steph","ssn":3333300000,"age":10,"address":"3030 Splash Street, Akron, OH, 44223"},
{"name":"Klay","ssn":1111111111,"age":20,"address":"1111 Baller Street, South Pasadena, CA, 90032"},
{"name":"Draymond","ssn":2323232323,"age":30,"address":"2323 Defensive Avenue, Saginaw, MI, 48601",
"prescriptions" : [
                { "id": "RX743009", "tradename" : "Hydrochlorothiazide"   },
                { "id" : "RX656003", "tradename" : "LEVAQUIN", "formula" : "levofloxacin"}]
}
]);
cursor = db.patients.find();
print("\nDISPLAY ALL\n")
while(cursor.hasNext())
{
  printjson(cursor.next());
}
cursor = db.patients.find({age:{$eq:20}});
print("\nEQUAL TO 20\n")
while(cursor.hasNext())
{
  printjson(cursor.next());
}
cursor = db.patients.find({age:{$lt:25}});
print("\nLESS THAN 25\n")
while(cursor.hasNext())
{
  printjson(cursor.next());
}
cursor = db.patients.drop();