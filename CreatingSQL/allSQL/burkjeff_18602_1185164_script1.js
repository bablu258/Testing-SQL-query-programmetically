db.patients.drop();

db.patients.insert({ 
    name: 'Mike Fowl', 
    ssn: 123456789, 
    age: 10,
    address: '124 Broadway Ave., NY 77798',
});

db.patients.insert({ 
    name: 'Nancy Drew', 
    ssn: 234567890, 
    age: 20, 
    address: '124 Broadway Ave., NY 77798',
});

db.patients.insert({ 
    name: 'Tom Carter', 
    ssn: 345678901, 
    age: 30, 
    address: '124 9th Apt. 9B, MA 44532',
    prescriptions: [
        {id: "RX743009", tradename : "Hydrochlorothiazide"},
        {id : "RX656003", tradename : "LEVAQUIN", formula : "levofloxacin"},
    ],
});

cursor = db.patients.find();
print("\nRetrieve and list all patient data.");
while (cursor.hasNext()){
    printjson(cursor.next());
}


cursor = db.patients.find({age: 20});
print("\nRetrieve the patient document whose age is equal to 20.");
while (cursor.hasNext()){
    printjson(cursor.next());
}

cursor = db.patients.find({age: {$lt:25}});
print("\nRetrieve the patient document whose age is less than 25.");
while (cursor.hasNext()){
    printjson(cursor.next());
}

print("\nDrop method to delete the entire collection.");
db.patients.drop();

