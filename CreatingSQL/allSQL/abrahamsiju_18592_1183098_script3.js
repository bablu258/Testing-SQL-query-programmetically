//mySQL equivalent: SUM(quantity) then GROUP BY zipcode
mapf1 = function() {
    emit(customers._id, {qty_count: 1} );
}

reducef1 = function(key, values) {
    count = 0;
    for (x of values) {
        count = count + x.qty_count;
    }
    return {zip_count:count}
}

db.orders.mapReduce(mapf1, reducef1, {out:"temp1"})


//step 2 
mapf2 = function() {
    for (_id of this.customers){
        emit(_id, {zip:this.zip});
    }
}

reducef2 = function(key, values) {
    count = 0;
    name = "";
    for (x of values) {
        if ("qty_count" in x) {
            count = count + x.qty_count;
        }
        if ("zip" in x) {
            zip = x.zip;
        }
    }
    return {qty_count:count, zip:zip}
}

db.customers.mapReduce(mapf2, reducef2, {out: {reduce:"temp1"}});



mapf3 = function() {
    emit(this.value.zip, {qty_count:this.value.qty_count}) 
}

reducef3 = function(key, values) {
    count = 0;
    for (x of values) {
        count = count + x.qty_count;
    }
    return {qty_count: count}
}


print("Total quantity order by zip code")
db.temp1.mapReduce(mapf3, reducef3, {out:"temp2"})
q = db.temp2.find();
while (q.hasNext()){
    printjson(q.next());
}
