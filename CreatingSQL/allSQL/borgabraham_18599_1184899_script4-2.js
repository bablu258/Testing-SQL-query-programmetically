// extra credit script 4

// calculate averge quantity for orders
// to calculate average we calculate the number of
// items for each order, and the number of orders
// documents in collection are of the form
//  {oderId: ..., customer: ... and so on}
// output key=0, value={sum: quantity of items, count:1 order}
mapf1 = function()
{
	total = 0;
	for (item of this.items)
	{
		total = total + item.qty;
	}

	emit(0, {sum:total, count:1} )
}

// summarize the input data which consists of
// key:0
// values: [{sum:, count: }, {sum:, count: }, . . . ]
// return the value {sum:  , count: , average: }
reducef1 = function(key, values){
  count = 0;
  sum = 0;
  for (x of values){
    sum = sum + x.sum;
    count = count + x.count;
  }
  return {sum: sum, count: count, average: sum/count}
}

db.names.mapReduce(mapf1, reducef1, {out:"Ave_Order_QTY"});
q = db.Ave_Order_QTY.find();
while ( q.hasNext() ){
  printjson(q.next());
}