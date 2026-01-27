//this keyword special keyword hai,kyoki jaise ki baki saare keywords ke=i value ya unka nature same rhta ha
//this ki value ya nature badal jataa hai is bat se ki aap use kha use kr rhe ho

//global scope
//window hai prdhanmantri supreme thing
console.log(this);//window ko refer krta hai

//function ke andr
function abcd(){
    console.log(this);//yha bhi window hai
}

//method
let obj={
    name:"harsh",
    sayName:function(){//functon jo object k andr ho use hm method khte h
        console.log(this.name);//yaha p harsh ayega
        //gr arrow function use krenge to waap se wo window ko refer krega
    }
}
obj.sayName();//this yaha pe refers to the objecto
//method k andr ek aur method banayenge to this phir se window bn jayega
//to stop this ndr wale ko arrow functio bnao

//event handler
document.querySelector("h1").addEventListener("click",function(){
    console.log(this);//this whi banda hogaa jispe addeventlistener laga hai
})

//claass
class Abcd{//first letter capital hoga classname ka
    constructor(){
        console.log("heyhe");
        this.a=12;
    }
}
let val=new Abcd();

//globl => window
//function=> window
//method with es5 function =>object
//method with es6 arrow function =>window
//es5 inside es5 method =>window
//arow function inside es5 => object
//event hndler=>element
// class=>blank object
//aisa isliye kyoki rrow function hamesh aapne vlue apne parent se lete hai


//mnual binding bind call aapply
//function ko cll krte waqt aap set kr skte ho ki uski this ki value kya hogi

let obj={
    name:"harsh",
}
function abcd(){//functionn me this winow ko refer kr rha hota hai
    console.log(this.name);//hm chaahte bhai ki this ki value window s obj chnge ho jay
}
abcd.call(obj);//insted of avcd() we use this method
//obj pass kiya to ab obj ko rwefer kr rha hai

function abcd(a,b,c){
    console.log(this,a,b,c);
}
// Same as call, bas arguments array me pass hote hain
abcd.apply(obj,[1,2,3]);

//bind
// 👉 this set karke naya function return karta hai (immediately call nahi karta)
let fnc=abcd.bind(obj,1,2,3);//ek nyi copy banata hai jisme this ki value bydefault pbject hoti hai
fnc();