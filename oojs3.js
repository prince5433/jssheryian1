// Object Oriented JavaScript (OOP in JS) ka matlab hai code ko objects + classes ke through structure karna, taaki reusability, maintainability, aur scalability better ho.

function CreateBiscuts(name,price,qty,compnay,category){//first letter capotal letter me hona chahiye
    this.name=name;
    this.price=price;
    this.qty=qty;
    this.company=company;
    this.category=category;
}

let bisc1=new createBiscuts("Oreo",5,5,"sunfeat","chcoclolate biscuits");

//humein sikhna hai factores banan aki matlab ki p ek br bluepirnt bana do ki hr object kaisa dikhegaa and hamlog
//nye nye objects values bana paayenge,yahi upr uppr se pooraa kaam hai oops mein

//agr tumhara constructor funcrtion koi field apne prototype pr attaach krle to us constructor se bnne wale sare instances
//yaani ki objects k pass wo field automatically chli jati hai
CreateBiscuts.prototype.company="Sheryians";

//class
class CreatePencil{
    constructor(name,company,price,color){
        this.name=name;
        this.company=company;
        this.price=price;
        this.color=color;
    }
    erase(){
        document.body.querySelectorAll("h1").forEach(function(ele){
            ele.remove();
        })
    }
    write(text){
        let h1=document.createElement("h1");
        h1.textContent=text;
        h1.style.color=this.color;
        document.body.appendChild("h1");
    }
}

let p1=new CreatePencil("antraj","nataraj",10,black);//inititalze krna default values set krna
let p2=new CreatePencil("apsara","apsara",15,blue);//inititalze krna default values set krna

//extends and super
1️⃣ extends

// extends ka use hota hai inheritance ke liye.
// Matlab ek class dusri class ke properties + methods le leti hai.
class Parent {
  greet() {
    console.log("Hello from Parent");
  }
}

class Child extends Parent {
}

let c = new Child();
c.greet(); // Hello from Parent

// 2️⃣ super

// super ka use hota hai parent class ko call/access karne ke liye.
class Parent {
  greet() {
    console.log("Hi Parent");
  }
}

class Child extends Parent {
  greet() {
    super.greet(); // parent ka greet call
    console.log("Hi Child");
  }
}

new Child().greet();
// o/p
// Hi Parent
// Hi Child


//protytypical inheritnce vs classical inheritance
// 1️⃣ Prototypical Inheritance (JavaScript ka real system)

// JavaScript me objects directly dusre object se inherit karte hain using prototype chain.
let parent = {
  greet() {
    console.log("Hello");
  }
};

let child = Object.create(parent);

child.greet(); // Hello
// 👉 child ke paas greet nahi hai, but JS prototype chain me parent se le leta hai.
// Object → Object se inherit karta hai

//classical
// Classical inheritance me classes hoti hain aur object un classes se bante hain.
class Parent {
  greet() {
    console.log("Hello");
  }
}

class Child extends Parent {}

new Child().greet(); // Hello
// Class → Class inherit → Object