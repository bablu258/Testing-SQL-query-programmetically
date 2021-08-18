mf = function(){
        address = this.address;
        zip = address.zip;
	
	//for(x of zip){
	//	if(x >= "90000"){
        //	emit(this.customerId,{zipcode:zip}, sum:this.zip.length, count:1);
	//	}
	//}

	emit({zipcode:zip}, {sum:zip.length, count:1});	
}

rf = function(keys, values){
	count=0;
	total=0;
        for(x of values){
		total=total+x.sum;
		count=count+x.count;
                zip = x.zipcode;
        }
        return {sum:total, count:count};
}

db.customers.mapReduce(mf, rf, {out:"test1"})

show= db.test1.find(); 
print("Document output:");
while (show.hasNext()){
        printjson(show.next());
}








