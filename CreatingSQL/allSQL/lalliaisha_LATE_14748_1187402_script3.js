// I have an issue accessing the database so I could not check

var mapf1 = function() {
	for(i = 0; i < items.length; i++){
		var item = this.items[i];
		emit(this.customer, {amount: item.qty})
	}
};

var reducef1 = function(key, values){
 	
 	var quantity = 0;
	for(i = 0; i < this.values.length; i++){		
		quantity=quantity+ this.values[i];
	}
 	return{quantity: quantity}; 
 };


db.orders.mapReduce(mapf1, reducef1, {out: "temp1"})


 var map2 = function() {
	
	emit(this.customerId, {zip : this.address.zip} );
};
var reduce2 = function(key, values) {
	
	var quat = 0;
	
	var zipCode = "";
	for (x of values)
	{
		
		if ("zip" in x)
		{
		zipCode = x.zip;
		
		}
		
		if ("quantity" in x)
		{
			quat = quat + x.quantity;
		}
		 
	}
   return {quantity: quat, zip:zipCode};
};
db.customers.mapReduce(
   map2,
  reduce2,
  {	
	out:  {reduce : "temp1"}
   }
)
 cursor =  db.temp1.find();
 while (cursor.hasNext()){
	printjson(cursor.next())
};

















/*

var mapf1 = function() {
	var itemQty = 0;
	for(i = 0; i < this.items.length; i++){
		itemQty += this.items[i].qty;
	}
	emit(this.customer, {quantity: itemQty})
};

var reducef1 = function(customer, values){
 	
 	return(customer, 
 }

db.customers.mapReduce(
	mapf1, reducef1, {out: "stepJoin"})


// Step 2


var reducef2 = function(customer, values){
	return(customer, quantity)
}

db.orders.mapReduce(
	mapf2, reducef2, {out: {reduce : "stepJoin"}})


 // Step 3
 var mapf3 = function(){
 	forEach(customer in values){
 		emit(zip: this.zip , quantity: this.quantity)
 	}
 }

 var reducef3 = function( zip , values ){
 	total = 0;
 	for(i=0; i<values.length; i++){
 		total +=values[i]; 
 	}
 	return total;
 }

 db.stepJoin.mapReduce(mapf3, reducef3, {out: "FinalStep"})
q = db.FinalStep.find();
while(q.hasNext()){
	printjson(q.next());
}

 */x.f





