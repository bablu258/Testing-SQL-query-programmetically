/*
CST363 Intro to Database Systems
Student Name: Miki Fukushima
Assignment 4
Script 4 Extra Credit
*/

// Extra Credit: get the average quantity for orders?
// The script calculates the average quantity and displays a signle number

// Emit orderId and quantity
mapf_orders = function() {
	for (item of this.items) {
		emit(this.orderId, {quantity:item.qty});
	};
};

// Aggregate to calculate the sum of quantity in each order
reduce_orders = function(key, values) {
	sum = 0;
	for (x of values) {
		sum = sum + x.quantity;
	}
	return sum;
};

db.orders.mapReduce(mapf_orders, reduce_orders, {out: "temp1"});

// Get the average quantity, use _id: null to get the average of the entire collection
average = db.temp1.aggregate([
    {
        "$group": { 
            "_id": null, 
            "avg": { "$avg": "$value" } 
        }
    }
]);

print("The average quantity for order is: ")
while (average.hasNext()) {
	printjson(average.next());
};

/* OUTPUT 

The average quantity for order is: 
{ "_id" : null, "avg" : 2.675438596491228 }

*/


