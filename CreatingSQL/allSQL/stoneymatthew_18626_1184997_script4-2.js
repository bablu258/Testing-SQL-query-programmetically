/*
*    Matthew Stoney
*    CST-363, Wisneski
*    06/08/2021
*
*    Assignment 4, problem 4 Extra Credit
*/
// map over orders collection
// for each item in this.items, emit(this.order, {"count": 1, "qty": qty})
var mapf1 = function() {
    for(item of this.items) {
        emit(1, {"count": 1, "qty": item.qty});        
    }
}

var reducef1 = function(key, values) {
    var total_count = 0;
    var total_qty = 0;
    for (var i = 0; i < values.length; i++) {
        total_count += values[i].count;
        total_qty += values[i].qty;
    }
    var avg = total_qty / total_count;
    return {"avg": avg};
}

db.orders.mapReduce(mapf1, reducef1, {out: "prob4"}); 

cursor = db.prob4.find({}, {_id:0});
while(cursor.hasNext()) {
    printjson(cursor.next());   
}