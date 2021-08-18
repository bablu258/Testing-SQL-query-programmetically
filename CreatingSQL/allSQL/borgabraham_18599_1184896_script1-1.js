// part 1
// step 1. use the insert method
/* db.patients.insertOne({
    name: "Dave",
    ssn: "877-98-6543",
    age: 10,
    address: "123 4th St"
});
db.patients.insertOne({
    name: "Dave",
    ssn: "865-77-6113",
    age: 20,
    address: "123 8th St"
});
db.patients.insertone({
    name: "Bradley",
    ssn: "995-07-3000",
    age: 30,
    address: "123 10th St"
});
 */


// start
db.patients.drop();

db.patients.insertMany( [

{
    name: "Dave",
    ssn: "877-98-6543",
    age: 10,
    address: "123 4th St"
},


{
    name: "Dave",
    ssn: "865-77-6113",
    age: 20,
    address: "123 8th St"
},


{
    name: "Bradley",
    ssn: "995-07-3000",
    age: 30,
    address: "123 10th St"
}

]

);

// end


// step 2. add prescriptions to Bradley
db.patients.update({
    name: "Bradley"
}, {
    $set: {
        prescriptions: [{
            id: "RX743009",
            tradename: "Hydrochlorothiazide"
        }, {
            id: "RX656003",
            tradename: "LEVANQUIN",
            formula: "levofloxacin"
        }]
    }
});


// step 3. retrieve a list with all patient data
db.patients.find();

// step 4. retrieve the patient document whose age is equal to 20
db.patients.find({
    age: 20
});


// step 5: retrieve the patient document whose age is less than 25
db.patients.find({
    age: {
        $lt: 25
    }
});


// print results
print("Printing patient information");
cursor = db.patients.find();
while (cursor.hasNext())
{
	printjson(cursor.next());
}


// step 6: use the drop method to delete the entire collection
db.patients.drop();