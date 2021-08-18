db.patients.insertMany([
{ name: "Alice", ssn: "111", age: "10", address: "main st"},
{ name: "Bob", ssn: "222", age: "20", address: "first st"},
{ name: "Charlie", ssn: "333", age: "30", address: "second st"}
])

all = db.patients.find()
print("Document with all entries")
while (all.hasNext()){
	printjson(all.next());
}

twenty = db.patients.findOne({age: "20"})
print("Document with age 20")
printjson(twenty)

lessthan = db.patients.find({age:{$lt:"25"}})
print("Document with age less 25")
while (lessthan.hasNext()){
	printjson(lessthan.next());
}



// drop collection
db.patients.drop()
