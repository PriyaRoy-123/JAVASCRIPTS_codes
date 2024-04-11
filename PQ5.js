let marks=[65,97,44,37,76,60];
let sum=0;
/*
for(let mark in marks){
    sum+=marks[mark];
    mark++;
    


}
*/

for(let val of marks){
    sum+=val;
}


let avg=sum/ marks.length;
//console.log("AVERAGE MARKS OF ENTIRE CLASS", avg);
console.log(`average marks of the class=${avg}`);