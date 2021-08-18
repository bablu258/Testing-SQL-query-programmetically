db.patients.insertMany([
    {"name":"Erfan","ssn":123456789,"age":10,"address":"60 W Olsen Rd, Thousand Oaks, CA 91360"},
    {"name":"Milad","ssn":987654321,"age":20,"address":"146 Faculty St, Thousand Oaks, CA 91360"},
    {"name":"Sam","ssn":113456789,"age":30,"address":"225 Regent Way, Thousand Oaks, CA 91360",
    "prescriptions" : [
                    { "id": "RX743009", "tradename" : "Hydrochlorothiazide"   },
                    { "id" : "RX656003", "tradename" : "LEVAQUIN", "formula" : "levofloxacin"}]
    }
    ]);

//1:
cursor = db.patients.find({}, {_id:0});//db.patients.find({}, {_id:0}) ignores the id's and makes it easier to read
print("\nRetrieve and list all patient data:\n")
while(cursor.hasNext())
{
  printjson(cursor.next());
}

//2:
cursor = db.patients.find({age:{$eq:20}}, {_id:0});
print("\nRetrieve the patient document whose age is equal to 20:\n")
while(cursor.hasNext())
{
  printjson(cursor.next());
}
//3:
cursor = db.patients.find({age:{$lt:25}}, {_id:0});
print("\nRetrieve the patients where age is less than 25:\n")
while(cursor.hasNext())
{
  printjson(cursor.next());
}

// 4.Dropping the database:
cursor = db.patients.drop();