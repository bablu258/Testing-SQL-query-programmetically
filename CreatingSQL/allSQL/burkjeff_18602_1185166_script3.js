mapfz = function(){
        address = this.address;
        zip = address.zip;
        emit(this.customerId, {zipcode:zip});
}

reducef = function(keys, values){        
        for(x of values){
                zip = x.zipcode;
        }
        return {zipcode:zip};
}

db.customers.mapReduce(mapfz, reducef, {out:"temp1"})

mapC = function() {    
        for(item of this.items){
             emit(this.customer, {qty: item.qty});
        }
}

reduceC = function(keys, values){
        
        sum = 0;
        zip = "";
        for (x of values) {
                if ("zip" in x) {
                  zip = x.zipcode;
                }
                if ("qty" in x) {
                  sum = sum + x.qty;
                }
        }
        return {zipcode:zip, qty: item.qty}
}


db.orders.mapReduce(mapC, reduceC, {out: {reduce:"temp1"}}); 

mapf3 = function(){
        
        emit(this.value.zipcode, {qty:this.value.qty});
}

reducef3 = function(key, values){
        
        sum=0;
        for(x of values){
                if ("qty" in x) {
                  sum = sum + x.qty;
                }
        }
        return sum;
}


db.temp1.mapReduce(mapf3, reducef3, {out:"temp2"})

display = db.temp2.find();
while (display.hasNext()){
        printjson(display.next());

}