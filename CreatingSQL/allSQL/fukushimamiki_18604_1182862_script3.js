/*
CST363 Intro to Database Systems
Student Name: Miki Fukushima
Assignment 4
Script 3
*/

// Join the customers and orders collections and summerize the quantity of items sold by zip code
// Output should have for each zip code, the count of items sold to customers in that zip code

/* 

Two collecitons can be joined using customerId and customer

# Order Example
{ 
	"_id" : ObjectId("60bc84bcc8b7419756ed781d"), 
	"orderId" : 20, 
	"customer" : 115, 
	"date" : "2018-05-10", 
	"total" : 6, 
	"items" : 
		[ { "itemNo" : 10, "qty" : 3 } ] 
}

# Customer Example
{ 
	"_id" : ObjectId("60bc82e588f60f7ec7e9edac"), 
	"customerId" : 20, 
	"customer_name" : "Diversified Printing & Pub", 
	"address" : { "street" : "2632 Saturn St", "city" : "CA", "state" : "Brea", "zip" : "92621" }, 
	"contact" : { "last_name" : "Lane", "first_name" : "Vanesa" } 
}

*/


// From orders collection, emit customer (this is id) and the quantity
mapf_orders = function() {
	for (item of this.items) {
		emit(this.customer, {quantity:item.qty});
	};
};

// Summerize by quantity
reduce_orders = function(key, values) {
	sum = 0;
	for (x of values) {
		sum = sum + x.quantity;
	}
	return {quantity:sum};
};

db.orders.mapReduce(mapf_orders, reduce_orders, {out: "temp1"});

// From the customer collection, emit customerId and the corresponding zipcode
mapf_customer = function() {
	emit(this.customerId, {zipcode:this.address.zip});
}

// Aggregate the results, if zipcode is in the attribute, map to zipcode, if quantity is in attribute, map to sum
reduce_customer = function(key, values) {
	zipcode="";
	sum=0
	for (x of values) {
		if ("zipcode" in x) {
			zipcode = x.zipcode;
		}
		if ("quantity" in x) {
			sum = sum + x.quantity;
		}
	}
	return {sum:sum, zipcode:zipcode};
}

db.customers.mapReduce(mapf_customer, reduce_customer, {out: { reduce: "temp1" }});

// Emit zipcode and the sum (aggregated quantity)
map_merge = function() {
	emit(this.value.zipcode, this.value.sum);
}

// Aggregate by the zipcode
reduce_merge = function(key, values) {
	sum = 0
	for (x of values) {
		sum = sum + x
	}
	return sum
}

db.temp1.mapReduce(map_merge, reduce_merge, {out: "temp2"})

// Print out the results stored in temp2 
cursor = db.temp2.find();
while (cursor.hasNext()) {
	printjson(cursor.next());
};

/* OUTPUT 

{ "_id": ZIPCODE, "value": TOTAL COUNT OF ITEMS SOLD FOR CORRESPONDING ZIPCODE}

{ "_id" : "90084", "value" : 3 }
{ "_id" : "02134", "value" : 2 }
{ "_id" : "28217", "value" : 0 }
{ "_id" : "93777", "value" : 0 }
{ "_id" : "89163", "value" : 4 }
{ "_id" : "93722", "value" : 4 }
{ "_id" : "55439", "value" : 0 }
{ "_id" : "07004", "value" : 0 }
{ "_id" : "93711", "value" : 30 }
{ "_id" : "48326", "value" : 6 }
{ "_id" : "75284", "value" : 2 }
{ "_id" : "94160", "value" : 0 }
{ "_id" : "38101", "value" : 131 }
{ "_id" : "10591", "value" : 0 }
{ "_id" : "93728", "value" : 0 }
{ "_id" : "92691", "value" : 0 }
{ "_id" : "91186", "value" : 0 }
{ "_id" : "10010", "value" : 0 }
{ "_id" : "93101", "value" : 0 }
{ "_id" : "66061", "value" : 0 }
{ "_id" : "92621", "value" : 0 }
{ "_id" : "52556", "value" : 0 }
{ "_id" : "93726", "value" : 0 }
{ "_id" : "93718", "value" : 4 }
{ "_id" : "91185", "value" : 12 }
{ "_id" : "93745", "value" : 0 }
{ "_id" : "53707", "value" : 0 }
{ "_id" : "94294", "value" : 0 }
{ "_id" : "94152", "value" : 0 }
{ "_id" : "95887", "value" : 13 }
{ "_id" : "06484", "value" : 0 }
{ "_id" : "02206", "value" : 0 }
{ "_id" : "90025", "value" : 0 }
{ "_id" : "90312", "value" : 0 }
{ "_id" : "43260", "value" : 7 }
{ "_id" : "93727", "value" : 0 }
{ "_id" : "49684", "value" : 0 }
{ "_id" : "95380", "value" : 3 }
{ "_id" : "94161", "value" : 8 }
{ "_id" : "93714", "value" : 1 }
{ "_id" : "20559", "value" : 0 }
{ "_id" : "60694", "value" : 0 }
{ "_id" : "93662", "value" : 0 }
{ "_id" : "93715", "value" : 4 }
{ "_id" : "94244", "value" : 0 }
{ "_id" : "90266", "value" : 0 }
{ "_id" : "95827", "value" : 0 }
{ "_id" : "94257", "value" : 4 }
{ "_id" : "90247", "value" : 0 }
{ "_id" : "88905", "value" : 18 }
{ "_id" : "19170", "value" : 7 }
{ "_id" : "43221", "value" : 0 }
{ "_id" : "92186", "value" : 0 }
{ "_id" : "93704", "value" : 0 }
{ "_id" : "93706", "value" : 7 }
{ "_id" : "90074", "value" : 0 }
{ "_id" : "92704", "value" : 0 }
{ "_id" : "94208", "value" : 0 }
{ "_id" : "52353", "value" : 0 }
{ "_id" : "20006", "value" : 3 }
{ "_id" : "48106", "value" : 9 }
{ "_id" : "93710", "value" : 0 }
{ "_id" : "93703", "value" : 0 }
{ "_id" : "93031", "value" : 6 }
{ "_id" : "93792", "value" : 0 }
{ "_id" : "93721", "value" : 0 }
{ "_id" : "07882", "value" : 0 }
{ "_id" : "45225", "value" : 0 }
{ "_id" : "08816", "value" : 0 }
{ "_id" : "45264", "value" : 0 }
{ "_id" : "90096", "value" : 0 }
{ "_id" : "10802", "value" : 0 }
{ "_id" : "91355", "value" : 4 }
{ "_id" : "93888", "value" : 0 }
{ "_id" : "32231", "value" : 0 }
{ "_id" : "19034", "value" : 0 }
{ "_id" : "90038", "value" : 0 }
{ "_id" : "45002", "value" : 2 }
{ "_id" : "93786", "value" : 0 }
{ "_id" : "22101", "value" : 0 }
{ "_id" : "63105", "value" : 0 }
{ "_id" : "43305", "value" : 0 }
{ "_id" : "85038", "value" : 7 }
{ "_id" : "08810", "value" : 0 }
{ "_id" : "92807", "value" : 0 }
{ "_id" : "60197", "value" : 0 }
{ "_id" : "94230", "value" : 0 }
{ "_id" : "85023", "value" : 0 }
{ "_id" : "92850", "value" : 0 }
{ "_id" : "60680", "value" : 0 }
{ "_id" : "02107", "value" : 0 }
{ "_id" : "63177", "value" : 0 }
{ "_id" : "93720", "value" : 4 }
{ "_id" : "20120", "value" : 0 }
{ "_id" : "91109", "value" : 0 }
{ "_id" : "44074", "value" : 0 }
{ "_id" : "85062", "value" : 0 }


*/


