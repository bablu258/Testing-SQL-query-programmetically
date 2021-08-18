print("Creating collection \'patients\' and inserting 3 documents.")
db.createCollection("patients")
db.patients.insertMany([
	{name:"Abigail Williams", ssn:"123-456-7890", age:10, address:"987 Kimbark Street"},
	{name:"John Smith", ssn:"987-654-3210", age:20, address:"789 Cucamonga Ct"},
	{name:"Mike Jones", ssn:"555-666-7777", age:30, address:"123 Cottonwood Ave"}
])
print("Updating record where age=30");
db.patients.update({age:30},  {
	$set : { 
	prescriptions : [
		{ id: "RX743009", tradename : "Hydrochlorothiazide"   },
		{ id : "RX656003", tradename : "LEVAQUIN", formula : "levofloxacin"  }
	]}
})
print("Printing all patient records.")
var cursor = db.patients.find()
cursor.forEach(printjson)
print("Printing patient information where age=20")
cursor = db.patients.findOne({age:20})
printjson(cursor)
print("Printing patient information where age < 25")
cursor = db.patients.find({age:{$lt:25}})
cursor.forEach(printjson)
db.patients.drop()
print("Collection \'patients\' dropped")