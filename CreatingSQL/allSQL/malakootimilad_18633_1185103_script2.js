
mapF = function()
{
  if(this.address.zip.startsWith("9"))
  {
    emit(this.address.zip,1);
  }
}

reduceF = function(key,values)
{
 total = 0;
 for (x of values){
 total = total + x;
 }
return total;
}

db.customers.mapReduce(mapF,reduceF,{out:"out_result"});
cursor = db.out_result.find();

while(cursor.hasNext()){
  printjson(cursor.next());
}
// db.customers.getPlanCache().clear()
