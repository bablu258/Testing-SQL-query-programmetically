//Paola Torres 
//PART 3


//map over customers collection 
//emit customer id and zip code 
mapf1 = function() {
   emit(this.customerId, {custID: this.customerId, zip: this.address.zip});
}

//reduce over customer collection 
reducef1 = function(key, values) {
   for (x of values) {
   }
   return {customer: x.custID, zip: x.zip};
}

//map over orders collection 
//emit customer and quantity 
mapf2 = function() {
   //emit(this.customer, {cust: this.customer, quantity: this.qty});
   for (item of this.items) {
      emit(this.customer, {cust: this.customer, quantity: item.qty});
   }
}

//reduce over orders collection 
//takes in reduce1 and map2
reducef2 = function(key, values) {
   qtyTotal = 0;
   zipVal = " ";
   for (x of values) {
      if (zip in x) {
        zipVal = x.zip;
      }
      if ("quantity" in x) {
         qtyTotal = qtyTotal + x.quantity;
      }
   }
   return {zip: zipVal, quantity: qtyTotal};
}

db.orders.mapReduce(mapf2, reducef2, {out: "temp"});
t = db.temp.find();
while (t.hasNext()) {
   printjson(t.next());
}

