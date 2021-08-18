//What is the average quantity for orders?

mapOrder = function() {
    for(let idx = 0; idx < this.items.length; idx++) {
		let key = this.orderId;
		let value = {
			count: 1,
			qty: this.items[idx].qty
		};
		emit(key,value);
	}
}

reduceOrder = function(key, values) {
    reducedVal = { count: 0, qty: 0 };

    for (var idx = 0; idx < values.length; idx++) {
        reducedVal.count += values[idx].count;
        reducedVal.qty += values[idx].qty;
    }

    return reducedVal;
};

finalizeFunction = function(key, reducedVal) {
	reducedVal.avg = reducedVal.qty/reducedVal.count;
	return reducedVal;
};

db.orders.mapReduce( mapOrder,
    reduceOrder,
    {
		out: { merge: "map_reduce_example" },
		finalize: finalizeFunction						
    }
)
				   
display = db.map_reduce_example.find();
print("Displaying Average Quantity for each Orders");
while (display.hasNext()){
        printjson(display.next());
}