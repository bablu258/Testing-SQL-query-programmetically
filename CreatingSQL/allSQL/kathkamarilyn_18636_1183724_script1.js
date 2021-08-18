insertion = db.runCommand
({
      insert: "patients",
      documents: [{ name: "Bob",  ssn: "111111111", age: 10, address: "123 A St" },
				  { name: "Beth", ssn: "222222222", age: 20, address: "321 B St" },
				  { name: "Bert", ssn: "333333333", age: 30, address: "456 C St" }]
})
print("Inserting 3 documents into patients collection");
printjson(insertion);


update = db.patients.update
(
    { age: 30 },
    { $push: { prescriptions : 
    [{ id: "RX743009", tradename : "Hydrochlorothiazide" },
	{ id : "RX656003",tradename : "LEVAQUIN", formula : "levofloxacin" }]}}
)
print("Updating 30 year old patient");
printjson(update);

			
patients = db.patients.find();
print("Displaying all documents in patients collection");
while (patients.hasNext())
{
	printjson(patients.next());
}


AgeTwenty = db.patients.find({age: 20});
print("Document with age equal to 20");
while (AgeTwenty.hasNext())
{
	printjson(AgeTwenty.next());
}


AgeLessThan = db.patients.find({age: {$lt: 25}});
print("Documents where age is less than 25");
while (AgeLessThan.hasNext())
{
	printjson(AgeLessThan.next());
}


drop =  db.patients.drop();
print("Documents dropped");
printjson(drop);
