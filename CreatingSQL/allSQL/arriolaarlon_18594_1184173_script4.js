

//  Script 4
//  Arlon Arriola
//  CST-363
//  Module 6 - Mongo DB
//  script4.js

var labels=false;

if(labels)print('\nHomework Extra Credit Problem:\n');
// if(labels)print('Average Quantity Per Order, including all orders:');

db.orders.mapReduce(    //  strategy iterate the items of the orders and add up qty items.qty
  mapF1=function(){
    var total_all_qtys=0;
    for(x of this.items)total_all_qtys+=x.qty;
    emit(1,{total_all_qtys5:total_all_qtys,count1:1});
  }
  ,reduceF1=function(key,values){
    var count=0,total_total_all_qtys=0;
    for(x of values){
      if("total_all_qtys5" in x)
        total_total_all_qtys+=x.total_all_qtys5;
      if("count1" in x)
        count+=x.count1;
    }
    
    var average_qty=total_total_all_qtys/count;
    
    return {average_qty:average_qty,count1:count,total_all_qtys5:total_total_all_qtys};
  }
  ,{out:'temp_out_averager_collection'}
);
if(labels)print('Average Quantity Per Order, including all orders: '+db.temp_out_averager_collection.findOne().value.average_qty+'\n');
if(!labels)print(db.temp_out_averager_collection.findOne().value.average_qty);

