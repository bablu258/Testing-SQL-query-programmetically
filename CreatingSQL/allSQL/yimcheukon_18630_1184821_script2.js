mapf = function(){
    if(this.address.zip.toString().charAt(0)=="9"){
        emit(this.address.zip, 1);
    }
}

reducef = function(key, values) {
    count = 0;
    for(x of values){
        count = count + x;
    }
    return count;
}

db.customers.mapReduce( mapf, reducef, {out: "out_collection"});

cursor = db.out_collection.find();
while(cursor.hasNext()){
    printjson(cursor.next());
}