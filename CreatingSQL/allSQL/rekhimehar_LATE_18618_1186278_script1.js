db.patients.drop();
db.patients.insertOne({
    ssn: "012-34-5678",
    name: "Robert",
    age: 10,
    address: "563 Grove Avenue San Bernardino, CA 92404"
});
db.patients.insertOne({
    ssn: "123-45-6789",
    name: "Bill",
    age: 20,
    address: "8364 Thorne Street Modesto, CA 95350"
});
db.patients.insertOne({
    ssn: "234-56-7890",
    name: "David",
    age: 30,
    address: "15 Park Street Chino Hills, CA 91709",
    prescriptions: [{
            id: "RX743009",
            tradename: "Hydrochlorothiazide"
        },
        {
            id: "RX656003",
            tradename: "LEVAQUIN",
            formula: "levofloxacin"
        }
    ]
});
cursor = db.patients.find();
print("Patient data:");
while (cursor.hasNext()) {
    printjson(cursor.next())
};
cursor = db.patients.find({
    age: 20
});
print("Patients age = 20: ");
while (cursor.hasNext()) {
    printjson(cursor.next())
};
cursor = db.patients.find({
    age: {
        $lte: 25
    }
});
print("Patients younger than 25: ");
while (cursor.hasNext()) {
    printjson(cursor.next())
};
db.patients.drop();