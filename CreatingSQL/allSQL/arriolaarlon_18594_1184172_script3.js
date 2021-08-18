

//  Script 3
//  Arlon Arriola
//  CST-363
//  Module 6 - Mongo DB
//  script3.js

print('\nHomework Problem #3:');//  Join orders, customers, zip codes, to get zip codes/orders - by strategy of reducing into a third temporary table:

print("Join orders, customers, zip codes, to get zip codes/orders - by strategy of reducing into a third temporary table:");
print("Number of Orders per Zip Code:")

db.temp_orders_zip_codes.drop();
db.temp_orders_per_zip_code.drop();

db.orders.mapReduce(
  mapF1=function(){
    emit(this.customer,{theOrderId:this.orderId,order_count:1});}
  ,reduceF1=function(key,values){var count=0;
    for (x of values)count+=x.order_count;
    return {order_count:count};}
    ,{out:'temp_orders_zip_codes'});

db.customers.mapReduce(
  mapF2=function(){emit(this.customerId, {theZip:this.address.zip,order_count:0});}
  ,reduceF2=function(key,values){
    var count = 0,theZip;
    for (x of values){if("order_count" in x)count+=x.order_count;
      if("theZip" in x)theZip=x.theZip;}
    return {order_count:count,theZip:theZip};
  }
  ,{out:{reduce:'temp_orders_zip_codes'}}
);

db.temp_orders_zip_codes.mapReduce(
  mapF3=function(){emit(this.value.theZip, this.value.order_count);}
  ,reduceF3=function(key,values){var count=0;
    for (x of values)count+=x;
    return count;},'temp_orders_per_zip_code');
    
var orders_per_zip=db.temp_orders_per_zip_code.find();
while(orders_per_zip.hasNext())printjson(orders_per_zip.next());

