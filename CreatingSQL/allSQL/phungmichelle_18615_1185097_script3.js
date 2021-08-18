mapf1 = function(){
        address = this.address;
        zip = address.zip;
        emit(this.customerId, {zip:zip});
}

reducef1 = function(keys, values){
        for(x of values){
            zip = x.zip;
        }
        return {zip:zip};
}

db.customers.mapReduce(mapf1, reducef1, {out:"temp1"})

mapf2 = function() {
        for(item of this.items){
            emit(this.customer, {qty: item.qty});
        }
}

reducef2 = function(keys, values){
        sum = 0;
        zip = "";
        for (x of values) {
                if ("zip" in x) {
                  zip = x.zip;
                }
                if ("qty" in x) {
                  sum = sum + x.qty;
                }
        }
        return {zip:zip, qty: item.qty}
}

db.orders.mapReduce(mapf2, reducef2, {out: {reduce:"temp1"}});

mapf3 = function(){
        
        emit(this.value.zip, {qty:this.value.qty});
}

reducef3 = function(key, values){
        qty = 0;
        for (x of values) {
        qty = qty + x.qty;
        }
        return {qty:qty};
}


db.temp1.mapReduce(mapf3, reducef3, {out:"temp2"})

display = db.temp2.find();
print("Displaying Zipcodes with Quantity Sold");
while (display.hasNext()){
        printjson(display.next());
}

