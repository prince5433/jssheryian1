//design patterns
//module pattern
//module patern ek design pattern hai jismne haum apna code ek self executing function (IIFE) ke andar likhte hai ,taki variables aur functions private rahe
//iske andr se ham sirf whi cheejen return karte hain jo bhar use krni hai
//is pttern ka main fayd hiding(encapsulatiion)aur clean structure ,taaki code secure,resusable aur manageable ban sake

let Bank=(function(){
    let bankbalance=12000;
    
    function checkBalance(){
        console.log(bankbalance);

        function setBalance(val){
            bankbalance=val;
        }
        
        function withdraw(val){
            if(val<=bankbalance){
                bankbalance-=val;
                console.log(bankbalance);
                
            }
        }
        return {
           check: checkBalance,
          set:  setBalance,
           draw: withdraw
           //revealing module pattern m ns jo return kr rhe hai usko kis nam se bhej rhe hai yahi hota hai
        };
    }
})();


//factory function pattern
//ek function banate ho jo objects create krta hai (factory=object banane ki machine)

//factory fn pattern ek aisa design pattern hai jisme hum ek simple fn likhte hai jo naye obbjets banakar return karta hai,bina class ya new keuword use kiye

//is pattern ka maain idea hai-object creation ko ek function ke thorugh control krna

//har baar jab tum factory function call karte ho,tumhe ek naya object milta hai jsme apne method aagar chaho to private data ho sakta hai

//yeh pattern specially useful ha jab tumhe ek hi type ke bohot sare objects chahiye,jaise users ,products,tasks etc

function createProduct(name,price){
    let stock=10;
    return {
        name,
        price,
        checkStock(){
            console.log(stock);
        }
        buy(qty){
            if(qty<=stock){
                stock-=qty;
                console.log("booked");
            } else{
                console.log(`we only have ${stocks} pieces left`);
                
            }
        },
        refill(qty){
            stocks+=qty;
            console.log("refilled the stocks");
        }
    }
}
let iphone=createProduct("iphone,70000");
iphone.buy

//observer pattern
// Observer Pattern ek behavioral design pattern hai jisme
// 👉 one-to-many dependency hoti hai
// 👉 ek object (Subject) change hota hai to saare observers automatically notify ho jaate hain

// Simple words me:

// “Ek jagah change → sabko khabar” 🔔

class YouTubeChannel{
    constructor(){
        this.subsscribers=[];
    }
    subscribe(user){
        this.subsscribers.push(user);
        user.update(`You have subscribed the channel`);
    }
    unsubscribe(user){
         this.subsscribers=  this.subsscribers.filter((sub)=>sub!=user);
        user.update(`You have unsubscribed the channel`);
    }
    notify(message){
        this.subsscribers.forEach(sub=>sub.update(message));
    }
}

class User{
    constructor(name){
        this.name=name;
    }
    update(data){
        console.log(data);
    }

}

let sheryians=new YouTubeChannel();
let user1=new User("Harsh");
let user2=new User("Amit");

sheryians.subscribe(user1);
sheryians.subscribe(user2);

sheryians.notify("new video uploaded..");

//performance optimization
//debouncing=>ap koi action kr rhe ho and aap ye nhi chahte ki hr action pe kuch ho,jb bhi mere actions k beech me koi specific gap aa jaye to phir action perform ho
// 👉 bar-bar aane wale events ko rokna, jab tak user thoda ruk na jaaye ⏳
// Classic Debounce Function
function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

document.querySelector("input").addEventListener("input",debounce(function (){
    console.log("hey");
},1000));

//debounce=>ek delayy bataohe tum utna delay jab bhi ayeg action k reaction milega

//throttle=>innterval pr chalunga,action agar hota rha and aapne ek interval btaaya to utne interval me aapka event chlega
// 👉 fixed time interval me hi function chalne dena, chahe event kitni baar aaye ⏱️
// “Har X ms me sirf ek baar execute.”

function throttle(fn, delay) {
   let timer=0;
   return function(...args){
    let now=Date.now();
    if(now-timer>=delay){
        timer=now;
        fn(...args);
    }
   }
}

document.querySelector("input").addEventListener("input",throttle(function (){
    console.log("hey");
},1000));


// Lazy Loading Images ka matlab hai:
// 👉 images tab load hon jab unki zarurat ho (viewport ke paas aane par),
// na ki page load hote hi sab.

// Result:
// ⚡ faster page load
// 📉 less bandwidth
// 🧠 better performance (LCP improve)

// 1️⃣ Easiest Way (HTML Native) ✅
<img src="photo.jpg" loading="lazy" alt="img" />


// 2️⃣ JavaScript Way (Intersection Observer) 🔥
// Select all images jinke paas `data-src` attribute hai
// Abhi actual image load nahi hui hoti
const images = document.querySelectorAll("img[data-src]");

// IntersectionObserver create kar rahe hain
// Ye batata hai ki element viewport me aaya ya nahi
const observer = new IntersectionObserver(entries => {

    // Multiple observed elements ke liye loop
    entries.forEach(entry => {

        // Agar image viewport me dikh rahi hai
        if (entry.isIntersecting) {

            // Current image element
            const img = entry.target;

            // Actual image load kar rahe hain
            // data-src se src me value daal rahe hain
            img.src = img.dataset.src;

            // Ek baar load ho jaaye to observe karna band
            // Taaki repeat na ho
            observer.unobserve(img);
        }
    });
});

// Har image ko observer ke saath attach kar rahe hain
images.forEach(img => observer.observe(img));


{/* <img <!-- data-src me real image hai -->
<!-- src initially nahi diya, isliye page load pe image load nahi hogi -->
<img data-src="photo.jpg" alt="img" /> */}


// code splitting (intro level)
// “Pure app ka JS ek saath load karne ke bajay, zarurat ke hisaab se parts me load karna.”
// Code splitting is a technique to split application code into smaller bundles and load them on demand instead of loading everything upfront.

// Problem (Without Code Splitting)

Ek hi badi JS file

Initial load slow

User sirf homepage pe hai, par dashboard ka code bhi load ho raha hai ❌


// Solution: Code Splitting

App ko chhote chunks me tod do

Jo feature jab chahiye → tab load karo

// 1️⃣ Basic Idea Example (Concept)
// heavy feature
import Dashboard from "./Dashboard";


// ⬆️ Ye hamesha load hoga

// load only when needed
import("./Dashboard");
//for import ande xport scrip ttag me type="module " krna zaroori hota hai

// ⬆️ Ye on-demand load hoga


// avoidinng unnecessary reflews and repiants
// 🔹 Reflow (Layout)

// Browser layout calculate karta hai

// Size, position, geometry change hoti hai
// ❌ Expensive

// Examples:

// width, height, margin, padding

// top, left

// display


// 🔹 Repaint (Paint)

// Sirf visual change

// Layout same rehta hai
// ✔ Cheaper than reflow

// Examples:

// color

// background

// visibility
//we can also use document.createDocumentFragment();


// memory leaks :timers an d evenet listeeners
// “Object hata diya, reference zinda reh gaya → memory leak.”
// 1️⃣ Memory Leak due to Timers ⏱️
// ❌ Problem
function startTimer() {
    setInterval(() => {
        console.log("running...");
    }, 1000);
}


// 👉 Interval kabhi clear nahi hua
// 👉 Function remove ho gaya, timer zinda 😵

// ✅ Fix
let timer = setInterval(() => {
    console.log("running...");
}, 1000);

clearInterval(timer);


//advamce topics and architecture thinkign
//pure vs immpure function already done
//functioonal progrmming basics(map/filter/reduce as pipeline) already done

//separtion of concerns(dom vs logic)
“UI ka kaam UI kare, logic ka kaam logic.”

//dom k code and logic k code alag rhna chahiye thats separtion of concerns
// Problem: Mixed DOM + Logic ❌
document.getElementById("btn").addEventListener("click", () => {
    let price = 100;
    let tax = price * 0.18;
    document.getElementById("total").innerText = price + tax;
});
// 👉 Issues:

Hard to test

Reuse nahi hota

Logic DOM se tightly coupled


// Solution: Separate DOM & Logic ✅
// 1️⃣ Pure Logic (No DOM)
function calculateTotal(price) {
    return price + price * 0.18;
}

// 2️⃣ DOM Layer
const btn = document.getElementById("btn");
const total = document.getElementById("total");

btn.addEventListener("click", () => {
    total.innerText = calculateTotal(100);
});


✔ Clean
✔ Testable
✔ Reusable

//custom utility
//map ek array ke top pe chalta hai and us array k sabhi members us map function ke andr aate hain and map function ek naya array return krta hai and us naye array me jo bhi map n return kiya hoga wahi placed hota hai
const arr=[1,2,3,4,5];

function myMap(arr, callback) {
    let newarr = [];              // naya array banaya jo final result store karega

    for (let i = 0; i < arr.length; i++) {  
        // loop har element ke liye chalega

        // callback ko call kar rahe hain
        // arr[i]  → current element
        // i       → current index
        // arr     → original array
        newarr.push(callback(arr[i], i, arr)); 
        // callback ka return value new array me push ho raha hai
    }

    // original array unchanged rehta hai
    return newarr;                
}

myMap(arr,function(val){
    return val+2;
})

// 🔹 Shallow Copy
// Shallow copy duplicates only the top-level object, while deep copy creates a completely independent copy including all nested objects.

// 👉 Sirf top-level properties copy hoti hain
// 👉 Nested objects ka reference share hota hai
const obj1 = {
    name: "Prince",
    address: { city: "Noida" }
};

const shallow = { ...obj1 };

shallow.address.city = "Delhi";

console.log(obj1.address.city); // Delhi ❌

// 🔹 Deep Copybh
👉 Har level pe naya object banta hai
👉 Koi reference share nahi hota


//call stack(execution stack)
//js single threade hai ek time par ek hi kaam krta hai
//jab tum function call krte ho wo stack ke top p chla jata hai
//function compete hone kbad stack se nikal jata hai(pop ho jata hai);

function a(){
    console.log(a);
}
function b(){
    a();
        console.log(b);
}
function c(){
    b();
        console.log(c);
}

c();


//webapis
// “Browser jo extra powers or features deta hai JS ko, unhe Web APIs kehte hain.”

// Common Web APIs (Most Important 🔥)
// 1️⃣ setTimeout / setInterval
setTimeout(() => {
    console.log("Hello");
}, 1000);


// Browser ka Web API handle karta hai timer ⏱️

// 2️⃣ DOM API
document.getElementById("btn");
element.addEventListener("click", fn);

// 3️⃣ Fetch API
fetch("/api/data")
    .then(res => res.json())
    .then(data => console.log(data));

    // 4️⃣ Event Listeners
button.addEventListener("click", () => {
    console.log("clicked");
});

// 5️⃣ LocalStorage / SessionStorage
localStorage.setItem("user", "Prince");
localStorage.getItem("user");

    // event loop
    // “Event Loop decide karta hai next kaunsa code chalega.”

    // Pehle base samjho (Players)
// 1️⃣ Call Stack

JS yahin code execute karta hai

LIFO (Last In First Out)

// 2️⃣ Web APIs (Browser)

setTimeout

fetch

DOM events

// 3️⃣ Queues

Microtask Queue → Promise.then, queueMicrotask

Task / Callback Queue → setTimeout, events

// 4️⃣ Event Loop

Watchman 👀

Call stack empty hua?

Haan → queue se kaam bhejo

// Rule (MOST IMPORTANT) 🏆

Microtask Queue → pehle
Task Queue → baad me

Simple Example
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");

Output
A
D
C
B

Step-by-step kya hua?

A → Call Stack → print

setTimeout → Web API → Task Queue

Promise.then → Microtask Queue

D → Call Stack → print

Call Stack empty ✅

Microtask Queue run → C

Task Queue run → B

// Visual Flow 🧠
Call Stack
   ↓ (empty)
Microtask Queue (Promises)
   ↓
Task Queue (setTimeout, events)

// Another Tricky Example (Interview 🔥)
setTimeout(() => console.log("timeout"), 0);

Promise.resolve()
    .then(() => console.log("promise1"))
    .then(() => console.log("promise2"));

console.log("sync");

Output
sync
promise1
promise2
timeout

// Why Promises are faster?

Microtask queue

Event loop hamesha saare microtasks clear karta hai

Phir hi task queue pe jaata hai

// Real Life Analogy 🚦

Call Stack → Road

Microtasks → Ambulance 🚑 (priority)

Tasks → Normal traffic 🚗

Event Loop → Traffic police 👮