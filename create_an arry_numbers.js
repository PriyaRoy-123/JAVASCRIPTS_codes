 let n=prompt("Enter a  number: ");
 let arr=[];

 for(let i=1;i<=n;i++){
    arr[i-1]=i;  //1(0),2(1),3(2),4(3)
 }
 console.log(arr);

 let newarr=arr.reduce((prev,cur)=>{
    return prev+cur;

 })
 console.log(newarr);


 let factorial=arr.reduce((prev,cur)=>{
    return prev*cur;

 })
 console.log(factorial);