let Data="Secrete Information";
class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewdata(){
        console.log("data=",Data);
    }

}
let student1=new user("Priya","priyagmail.com");
let student2=new user("Sweta","sweta@gmail.com");

let teacher=new user("Dean","dean@gmail.com");
