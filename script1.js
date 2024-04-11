let div= documnet.querySelector("div");

div.style.backgroundColor="violet";
div.style.Color="white";
div.style.visibility="hidden";
div.style.fontSize="26px";
div.innerText="PRIYA";

let newBtn=document.createElement("buttton");
newBtn.innerText="Click me!";
console.log(newBtn);


newBtn.style.color="white";
newBtn.style.backgroundColor="red";

document.querySelector("body").prepend(newBtn);



