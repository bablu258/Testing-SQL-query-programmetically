step1 = db.patients.insertMany([{ name: "Franco",  ssn: "1234", age: 10, address: "1500 Apple Ave" },
								{ name: "Marilyn", ssn: "5678", age: 20, address: "1600 Orange Ave" },
								{ name: "David",   ssn: "9101", age: 30, address: "1700 Grape St" }])
print("\n Step 1 (Insert patients): ")
printjson(step1)
   
   
   
step2 = db.patients.update(
		   { age: 30 },
		   { $push: { prescriptions : [
					{ id: "RX743009",  tradename : "Hydrochlorothiazide" },
					{ id : "RX656003", tradename : "LEVAQUIN", formula : "levofloxacin" }]
					}
			})
print("\nStep 2 (Add Prescriptions): ")
printjson(step2)					



print("\nStep 3 (Display Patients): ")			
step3 = db.patients.find()
while (step3.hasNext())
{
	printjson(step3.next())
}



step4 = db.patients.find({age: 20})
print("\nStep 4 (Display Patient w/ Age 20): ")	
while (step4.hasNext())
{
	printjson(step4.next())
}



step5 = db.patients.find({age: {$lt: 25}})
print("\nStep 5 (Display Patient w/ Age < 25): ")	
while (step5.hasNext())
{
	printjson(step5.next())
}



step6 = db.patients.drop()
print("\nStep 6 (Drop Collection): ")
printjson(step6)