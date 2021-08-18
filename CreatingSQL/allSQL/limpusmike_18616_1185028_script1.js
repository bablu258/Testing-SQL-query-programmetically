/* 
 * Mike Limpus
 * Assignment 4
 * Script 1
 */

db.patients.insert(
    {
        name: "Mike",
        ssn: "123-456-7890",
        age: 10,
        address: "1234 Easy Street"
    }
);
db.patients.insert(
    {
        name: "Ari",
        ssn: "098-7654-321", 
        age: 20, 
        address: "460 Spooner Street"
    }
);
db.patients.insert(
    { 
        name: "Soner", 
        ssn: "543-210-7654", 
        age: 30, 
        address: "789 Evergreen Ave", 
        prescriptions : [
            { id: "RX743009", tradename : "Hydrochlorothiazide" },
            { id : "RX656003", tradename : "LEVAQUIN", formula : "levofloxacin" }
        ]
    }
);

// Retrieve and list all patient data
patients = db.patients.find();
printjson(patients);

// Retrieve the patient document whose age is equal to 20.
ageEqual = db.patients.find({age: 20});
printjson(ageEqual);

// Retrieve the patients where age is less than 25
ageLess = db.patients.find({age: {$lt: 25}});
printjson(ageLess);

// Using the drop method to delete the entire collection.
db.patients.drop();