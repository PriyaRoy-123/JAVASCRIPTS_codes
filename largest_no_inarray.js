let arr=[5,6,2,1,101,3];
const output=arr.reduce((prev,curr)=>{
    return prev> curr ? prev : curr;
});
console.log(output);//10