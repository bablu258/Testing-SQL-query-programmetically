//Part 1 

//Question 1

db.patients.insert({"name": "John", "ssn": 111111111, "age": 10, 
                    "address": "123 Pleasant St, Oceanside, CA 92056"})

db.patients.insert({"name": "Rachel", "ssn": 111122222, "age": 20, 
                    "address": "777 Vale View, Vista, CA 92081"})

db.patients.insert({"name": "Paul", "ssn": 888888888, "age": 30, 
                    "address": "333 Melrose Pl, Beverly Hills, CA 90210"})

//Quetion 2, adding prescription to the third patient Paul

db.patients.update( {name: "Paul"}, {$set : {prescriptions: [{"id": "RX743009", "tradename": "Hydrochlorothiazide"}, {"id": "RX656003", "tradename": "LAVAQUIN",
"formula": "levofloxacin"} ]} })

//Question 3, Retrieve and list all patient data

cursor = db.patients.find();
while (cursor.hasNext()){
    printjson(cursor.next());
}

//Question 4, Retrieve the patient document whose age is equal to 20

cursor = db.patients.find({age: 20});
while (cursor.hasNext()){
    printjson(cursor.next());
}

//Question 5, Retrieve the patients where age is less than 25

cursor = db.patients.find({age: {$lt: 25}});
while (cursor.hasNext()){
    printjson(cursor.next());
}

//Question 6, Use the drop method to delete the entire collection

db.patients.drop()


//Question 7, is this script file with commands above
