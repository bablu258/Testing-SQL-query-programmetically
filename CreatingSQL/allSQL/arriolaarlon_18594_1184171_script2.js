

//  Script 2
//  Arlon Arriola
//  CST-363
//  Module 6 - Mongo DB
//  script2.js

//  Zip codes that start with 9 and the number of customers in each zip code:

print("Show the customers zip codes that start with 9 and the count of how many customers are in that zip code, using map reduce:");
var mapF=function(){    //    unlabelled count
  if(this.address.zip.substring(0,1)=='9')
    emit(this.address.zip,1);
}
,reduceF=function(key,values){
  count=0;
  for (x of values)count+=x;
  return count;
}
              
// var mapF=function(){    //    labelled count
  // if(this.address.zip.substring(0,1)=='9')
    // emit(this.address.zip,{count:1});
// }
// ,reduceF=function(key,values){
  // count=0;
  // for (x of values)
    // count+=x.count;
  // return {count:count};
// };

db.customers.mapReduce(mapF,reduceF,{out:'temp_out_zipCodesThatStartWith9_collection'});
var zipCodesThatStartWith9_cursor=db.temp_out_zipCodesThatStartWith9_collection.find();
while(zipCodesThatStartWith9_cursor.hasNext())
  printjson(zipCodesThatStartWith9_cursor.next());



