/*
*    Matthew Stoney
*    CST-363, Wisneski
*    06/08/2021
*
*    Assignment 4, problem 3
*/

/*
*    map over orders collection
*    key= customer 
*    emits qty for each item in this.items
*/
var mapf1 = function() {
    for(item of this.items)
        emit(this.customer, item.qty);   
}
/*
*    reduce orders map
*    key = customer
*    output: {"qty": sum of quantites, "zip": 0}
*/
var reducef1 = function(key, values) {
    var total = 0;
    for (x of values) {
        total += x;
    }
    return {"qty": total, "zip": 0};
}

/*
*    map over customers collection
*    key = customerId
*    emits zip code for each key in form {"qty":, "zip":}
*/
var mapf2 = function() {
    emit(this.customerId, {"qty": 0, "zip": this.address.zip});   
}
/*
*    reduces collections from mapf2 and reducef1
*    input has either form {"qty": 0, "zip": zip code } or {"qty": quantity, "zip": 0}
*
*    outputs {"qty: qty, "zip": 0}
*/
var reducef2 = function(key, values) {
    var reducedVal = {"zip": 0, "total_qty": 0};
    for (val of values) {
        if (val.qty > 0) {
            reducedVal.total_qty = val.qty;   
        }
        if (val.zip != 0.0) {
            reducedVal.zip = val.zip;   
        }   
    }
    return reducedVal;
}

//Emit over prob3 collection to set zip as the key, qty as the value
/*
{ 
    "_id" : 104.0, 
    "value" : {
        "zip" : "93711", 
        "total_qty" : 2.0
    }
}


*/
var mapf3 = function() {
       emit(this.value.zip, this.value.total_qty);
}

var reducef3 = function(key, values) {
    return {"total_qty": values[0]};   
}

db.orders.mapReduce(mapf1, reducef1, {out: "prob3"}); 
db.customers.mapReduce(mapf2, reducef2, {out: {reduce: "prob3"}}); 
db.prob3.mapReduce(mapf3, reducef3, {out: "final"});


cursor = db.final.find({}).sort({"value.total_qty": -1});
while(cursor.hasNext()) {
    printjson(cursor.next());
}




