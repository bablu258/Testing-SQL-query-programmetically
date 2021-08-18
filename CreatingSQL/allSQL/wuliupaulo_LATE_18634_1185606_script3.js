mf = function(){
        address = this.address;
        zip = address.zip;

        emit(this.customerId, {zipcode:zip});
}

rf = function(keys, values){
        
        for(x of values){
                zip = x.zipcode;
        }
        return {zipcode:zip};
}

db.customers.mapReduce(mf, rf, {out:"test1"})

// 
// summarize qty
mCustomer = function() {
        
        for(item of this.items){
                if(item.itemNo == 3){
                        emit(this.customer, {qty: item.qty});
                }
        }
}

rCustomer = function(keys, values){
        
        total = 0;
        zip = "";
        for (x of values) {
                if ("zipcode" in x) {
                  zip = x.zipcode;
                }
                if ("qty" in x) {
                  total = total + x.qty;
                }
        }
        return {zipcode:zip, qty: item.qty}
}



// map reduce on joins
db.orders.mapReduce(mCustomer, rCustomer, {out: {reduce:"test1"}}); 

mjoin = function(){
        
        emit(this.value.zipcode, {qty:this.value.qty});
}

rjoin = function(key, values){
        
        total=0;
        for(x of values){
                if ("qty" in x) {
                  total = total + x.qty;
                }
        }
        return {qty: total}
}


db.temp1.mapReduce(mjoin, rjoin, {out:"test2"})

show= db.temp2.find();
print("Document output:");
while (show.hasNext()){
        printjson(show.next());
}