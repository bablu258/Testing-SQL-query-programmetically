

mapf= function() {
	if(this.address.zip.startsWith('9')){
		emit(this.address.zip, 1)
	}
}
reducef = function(key,emits){
	tcount=0;
	for(var x of emits){
		tcount = tcount + x;
	}
	return {count: tcount}

}

db.customers.mapReduce(mapf, reducef, {out:"script2"});
var cursor = db.script2.find();
cursor.forEach(printjson);




