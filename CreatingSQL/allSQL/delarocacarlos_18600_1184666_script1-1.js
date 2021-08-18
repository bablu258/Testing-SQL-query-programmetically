db.patients.drop();

print("Inserting Patients....");
db.patients.insertMany([
    {
        name: "Sansa Stark",
        ssn: "001-01-0001",
        age: 10,
        address: "100 Twin Street",
    },
    {
        name: "Rob Stark",
        ssn: "002-02-0002",
        age: 20,
        address: "100 Twin Street",
    },
    {
        name: "Eddard Stark",
        ssn: "003-03-0003",
        age: 30,
        address: "100 Winterfell Place",
        prescriptions: [
            { id: "RX743009", tradename: "Hydrochlorothiazide" },
            { id: "RX656003", tradename: "LEVAQUIN", formula: "levofloxacin" },
        ],
    },
]);

// Problem 3
let cursor = db.patients.find();
print("Displaying all Patients");

while (cursor.hasNext()) {
    printjson(cursor.next());
}

// Problem 4
let patient = db.patients.findOne({ age: 20 });
print("Document with the age of 20");
printjson(patient);

// Problem 5
cursor = db.patients.find({ age: { $lt: 25 } });
print("Displaying documents with age less than 25...");

while (cursor.hasNext()) {
    printjson(cursor.next());
}

// Problem 6
print("Dropping patients collection...");
db.patients.drop();
print("collection dropped!");
