// DOM = HTML page ka tree-like structure, jisko JavaScript use karke hum read, change, add, delete kar sakte hain.
//dom manipulation
//htmls se selement seleect krna
//text badalna
//html badalna
//csss badalana
//attribute
//eveent listeners

// 1️⃣ getElementById()
// ID se ek single element deta hai

 let abcd=document.getElementById("abcd");
 console.log(abcd);
//  Element
// 1

//  2️⃣ getElementsByClassName()
// 👉 Kya karta hai?
// Same class wale multiple elements deta hai
// HTMLCollection
// Many
document.getElementsByClassName("item");//ye ek arayajaisa structure hota hai

// 3️⃣ querySelector()
// 👉 Kya karta hai?
// CSS selector use karta hai
// Aur sirf FIRST matching element deta hai
// Element
// 1
document.querySelector("#box")
document.querySelector(".item")
document.querySelector("p")

// 4️⃣ querySelectorAll()
// 👉 Kya karta hai?
// CSS selector se ALL matching elements
// NodeList
// Many
document.querySelectorAll(".item")//array jaisa structure dikhta hai

let h1=document.querySelector("h1");
//pahle select kro and then console.dir krke dekho kya kya hai and kya change krna hai
//console.dir krke check kr skte hai sari acccessible properties h1 ki
h1.textContent="Hello harsh kaise ho";//now text is being changed

//innerhtml
// HTML + text dono deta hai
h1.innerHTML="<i>hey</>"

// 1️⃣ innerText
// 👉 Kya karta hai?
// Jo text SCREEN par dikh raha hai wahi deta / set karta hai
p.innerText

//textcontent
// Element ke andar ka SAARA text, chahe hidden ho
p.textContent

// 1️⃣ getAttribute()
// Element ka attribute ki value deta hai
let a=document.querySelector("a");
console.log(a.getAttribute("href"));
o/p= www.google.com


// 2️⃣ setAttribute()
// 👉 Kya karta hai?
// Element par naya attribute set / update karta hai
let a=document.querySelector("a");
a.setAttribute("href","https:://www.google.com")//name,value

// 3️⃣ removeAttribute()
// 👉 Kya karta hai?
// Element se attribute delete kar deta hai
let a=document.querySelector("a");
a.removeAttribute("href");//ab href remove ho jayega

//createelement
// JavaScript se naya HTML element banata hai
let p = document.createElement("p")//create element
p.innerText = "Hello DOM"
document.body.appendChild(p)//append or prepend kro jaha bhi element chahiye wha
// 📌 appendChild ke bina element page me nahi dikhega

//appendCHild()
// Parent ke END me child add karta hai
let p = document.createElement("p")
p.innerText = "Hello"
document.body.appendChild(p)

// 2️⃣ removeChild()
// Parent se specific child ko remove karta hai
let parent = document.getElementById("box")
let child = document.getElementById("p1")
parent.removeChild(child)

// 3️⃣ prepend()
// 👉 Kya karta hai?
// Parent ke START me element add karta hai
let li = document.createElement("li")
li.innerText = "First Item"
ul.prepend(li)

//js se css badalna
let h1=document.querySelector("h1");
h1.style.color="red";
h1.style.fontFamily="Gilroy";
h1.style.textTransform="capiitalize";//har word k pahla letter capital ho jayega

//js se kaise class lagaye ya hataye
let h1=document.querySelector("h1");
//console.dir krke sare props dekhan hai ratna nhi hai in sabko
h1.classList.add("hulu");

//to remove class
h1.classList.remove("hulu");

//toggle hati hai to laga dega lagi hai to hata dega
h1.classList.toggle("hulu");

//questions
let ul=document.querySelector("ul");
let li=document.createElement("li");
li.textContent="New Task";
ul.appendChild(li);

 let img=document.createElement("img");
img.setAttribute("src","rev.com")
document.querySelector("div").prepend(img);

let ul=document.querySelector("ul");
let li=document.querySelector("li");
ul.removeChild(li);

element.style.backgrounfColor="Red";

//add a highlight class to every even item in alist
let li=document.querySelectorAll("ul li:nth-child(2n)");
li.forEach(function(elem){
    elem.classList.add("highlight");
});

//set the font size of all<p> eleements to 18px usong.style
let p=document.querySelectorAll("p");
p.forEach(function(elem){
    elem.style.fontSize:18;
})
