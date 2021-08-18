/* 
 * Mike Limpus
 * Assignment 4
 * Script 3
 * code a script3.js file that does uses map reduce to do a join of the 
 * customers and orders collections and summarizes the quantity of items sold by
 * zip code. Your output should have for each zip code, the count of items sold
 * to customers in that zip code.
 */ 

// Map Reduce on orders 
mapOrders = function() {
    for (i of this.items) {
        emit(this.customer, {quantity: i.qty});
    }
}


// Key = customerID
// Value = quantity of values
reduceOrders = function(key, values) {
    sumQuant = 0;
    for (x of values) {
        sumQuant = sumQuant + x.quantity;
    }
    return {sum_quantity: sumQuant}
}
db.orders.mapReduce(mapOrders, reduceOrders, {out: "temp1"});

// Map Reduce on customers
mapCust = function() {
    emit(this.customerId, {zip: this.address.zip});
}

// Key = CustomerID
// Value = zip, sum_quantity
reduceCust = function(key, values) {
    zip = "";
    countQuant = 0;
    for(x of values) {
        if ("zip" in x) {
            zip = x.zip;
        }
        if("sum_quantity" in x) {
            countQuant = countQuant + x.sum_quantity; 
        }     
    }
    return {zip: zip, quantity: countQuant}
}

db.customers.mapReduce(mapCust, reduceCust, {out: {reduce: "temp1"}});

// Map reduce on the joined collection
mapFinal = function() {
    emit(this.value.zip, {quantity_zip: this.value.quantity});
}

reduceFinal = function(key, values) {
    countFinal = 0;
    for (x of values) {
        countFinal = countFinal + x.quantity_zip;
    }
    return {zip: key, count: countFinal}
}

db.temp1.mapReduce(mapFinal, reduceFinal, {out: "temp2"}); 


/* cursor = db.temp1.find().sort({_id: 1});
while(cursor.hasNext()) {
    printjson(cursor.next());
} */

cursor2 = db.temp2.find().sort({_id: 1});
while(cursor2.hasNext()) {
    printjson(cursor2.next());
}