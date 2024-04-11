let items=[250,645,300,900,50];
let i=0;
let afterdiscount;
for(let val of items){
    let offer=(val/10 );
  items[i]=items[i]-(offer);
  
    i++;
}
console.log(items);

