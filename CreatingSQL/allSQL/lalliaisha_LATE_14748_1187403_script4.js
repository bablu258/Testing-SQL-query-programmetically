// I have an issue accessing the database so I could not check, I got mixed mesages
// on ; usage. Notes, videos and other sources where not consistant. 

var map1 = function(){
	var totalQty = 0;
	var count = 0;
	for(i=0; i<items.length; i++){
		totalQty += this.items[i].qty;
		count += 1;
	}
	emit(orderid,  {total: this.totalQty, count:this.count});
}

var reduce1 = function(key, values){
	var countTotal = 0;
	var totalQuantity = 0;
	for(x in values){
		countTotal += count;
		totalQuantity += totalQty;
	}
	return{Quantity: totalQuantity, Orders: countTotal, Average: totalQuantity/countTotal};
};

db.orders.mapReduce(map1, reduce1, {out:"answers"})

print {"Average grade by instructor"}
var q = db.answers.find();
while(q.hasNext()){
	printjson(q.next());
};