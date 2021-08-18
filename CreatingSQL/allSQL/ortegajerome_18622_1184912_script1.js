db.createCollection('patients');

db.patients.insertMany(
	[
		{
			name: 'Jerome Ortega',
			ssn: '123-456-7890',
			age: 10,
			address: '123 Canary Road'
		},
		{
			name: 'Marina Martinez',
			ssn: '123-456-7899',
			age: 20,
			address: '123 Canary Circle'
		},
		{
			name: 'Roy Green',
			ssn: '123-456-7889',
			age: 30,
			address: '123 Canary Avenue',
			prescriptions: [
				{
					id: 'RX743009',
					tradename: 'Hydrochlorothiazide'
				},
				{
					id: 'RX656003',
					tradename: 'LEVAQUIN',
					formula: 'levofloxacin'
				}
			]
		}
	]
);

var cursor = db.patients.find();
while(cursor.hasNext()) {
	printjson(cursor.next());
}

cursor = db.patients.find({age: 20});

while(cursor.hasNext()) {
	printjson(cursor.next());
}

cursor = db.patients.find({ age: { $lt: 25 }});

while(cursor.hasNext()) {
	printjson(cursor.next());
}

db.patients.drop();