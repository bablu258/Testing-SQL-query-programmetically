//Script 1

//Step 1
db.patients.insertMany([
{"name": "John", "ssn":111111111,"age":10, "address": "505 Dream Way"},
{"name": "Jacob", "ssn":222222222, "age":20, "address": "506 Dream Way"},
{"name": "Joey", "ssn":333333333, "age":30, "address": "507 Dream Way"}]);

//Step 2
db.patients.update({"age": 30},
{
    $push: {
      prescription:{$each:[
        {"id": "RX743009", "tradename": "Hydrochlorothiazide"},
        {"id":"RX656003", "tradename":"LEVAQUIN", "formula":"levofloxacin"}
        ]}
    }
});

  //Step 3
  doca = db.patients.find();
  print("All Patient Data");
  while(doca.hasNext()) {
    printjson(doca.next());
  }

  //Step 4
  doca2 = db.patients.find({age:20});
  print("Patient: Age equal to 20")
  while (doca2.hasNext()) {
    printjson(doca2.next());
  }

  //Step 5
  cursor = db.patients.find({age: {$lt: 25}});
  print("Patients: Less than or Equal to 25");
  while(cursor.hasNext()) {
    printjson(cursor.next());
  }

  //Step 6
  db.patients.drop();
  print("Dropped Patients");
