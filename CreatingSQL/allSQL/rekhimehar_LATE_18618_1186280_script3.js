mapZip = function(){
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
db.customers.mapReduce(mapZip, reducef, {out:"temp1"})

mapCust = function() {
        
        for(item of this.items){
                if(item.itemNo == 3){
                        emit(this.customer, {qty: item.qty});
                }
        }
}
reduceCust = function(keys, values){
        
        sum = 0;
        zip = "";
        for (x of values) {
                if ("zipcode" in x) {
                  zip = x.zipcode;
                }
                if ("qty" in x) {
                  sum = sum + x.qty;
                }
        }
        return {zipcode:zip, qty: item.qty}
}
db.orders.mapReduce(mapCust, reduceCust, {out: {reduce:"temp1"}}); 

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
        return {qty: sum}
}
db.temp1.mapReduce(mapf3, reducef3, {out:"temp2"})

display = db.temp2.find();
print("Data = ");
while (display.hasNext()){
        printjson(display.next());
}