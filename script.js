//words vs keywords 
//keywords are erserve dwords hote hai jis ehm use nhi kr skte

// var let const
//declartion and inootoalization
// /initaoilaze means phli valuye assign krna vatiabl=le ko
var a;//declare
var a=12;//declae and initiailze

var a=12;
//window mwen add hota hai
//function scoped hota hai
//phir se declare ho skta hais ame name se and reassigned

//scope (global.block,functional)
{
    //block scoped hota hai ye curly barcaes k andr block khte hai
}

//reassignmnent redecalartion
var a=12;
a=13;//reassign

let a=13;
var a=23;//allowed 
let a=23;//not possible


//TEMPORAL DEAD ZONE
//TDZ wo time hota hai jab variable exist karta hai memory me,
// par use access karna allowed nahi hota.
// Ye sirf let aur const ke saath hota hai.
// var me TDZ nahi hota.
console.log(a);
let a=12;

//HOISTING IMPACT PER TYPE
// EK VAR KO JAB JS M ANATE HAI TO WO VA DO HIIS M TUTU JATA HAI AND USKA DECLARE PART UPR CHLA JATA HAI AD INITIALIZATION PART ECHE RH JATA HAI
// Hoisting = declarations are moved to the top of their scope before execution

// var a=12; breaks into
var a=undefined;//aur ye upr chla jata hai
a=12;
// var->hoist->undefined;
// let->hoist->

//const se object k properties change kr skte hai bcz it protect the variable not value


//DATA TYPES +TYPE SYSYTEM
//data tyoes meas data k type

//primitive ->inko coy krne pr hame ek real copy mil jaye
//refernce-> inko copy krne pr real copy nhi milegi refrence milegi
//arrays objects functions

//sting ako declrae kr skte hai using ''."",``;

//nulll ka matlab hai aapne jan bujh kr koii value nhi di
let students=null;

//undefined k matlab ki apne ek variable banaya aur use value nhi di jo value by default mili wo hai undefuned
let a;

//sybmbol ->unique immutable(not change) value
//future me i ham koi libraraies use krenge un librraaies mai kai bar kuch fields hoti hai jinse similar hum bhi banand ete hai aur galti se hamari banai hui us library ki original firelds ko change kr deta hai

// let sheryjs{
//     uid:12,
//     model:"harsh"
// }
// sheryjs.uid=1;ye wlai uid phle wali(sheryjs) k overwrite n kre isliyeSymnol k use krte hai

let u1=Symbol("uid");
let u2=Symbol("uid");

//BIGINT
//limit to know the max limit of let or any variable NUmber.MAX_SAFE_INTEGER
let a=98984784987489n;// n in last represents big int

//REFERENCE TYPES
let a={
    name="Harsh";
}
let b=a;
b.name="Harshiota";//yaha change krne se a ki hi value change ho jayegi bcz regference se pass ho rha hai

//DYNAMIC TYPING
// JS MEIN STATIC TYPIG NNI HAI AND YHAA PR HAI DUNMAIC TYPING JISK AMTLB HAI AAP DATA KO CHANGE KR SKTE HO KYKOI YHA PR DYNAMIC DATA TYPES HAI

let a=12;
a=true;
a="harsh";
a=[];
a=null;
a=undefined;

//TYPE OFF QUIRKS 
typeof 12//number
typeof Nan//number

//TYPE COERCION(== VS ===)
// COCEPT JISMEIN AAPKA EK TYPE AUTOMATICALLY COINVERT HO JAYEGA 

"5"+1//"51" nuber cinverted to sting
//+ me koi bhi ek operand stirng hai to use string m convert kr dega another data type ko

"5"-1// answer 4 aayega nooption for minus

//TRUTHY VS FALSY VBLUES
0 ,false,"",null,undefuined,NaN ,document.all//these all are falsy values
//rest all cinvert into true

//COMMON CONFUSIONS ??
//why nan is a number because it is a failed numebric operation and numebric opeartion k type always number hoga

//undefined means the variable was never assigned. by degfault assin hota hai
// null means you intentionally set it to "nothing"

// "5" + 1 = "51" but "5" - 1 = 4
// + operator string ko prefer karta hai
// - operator sirf number pe kaam karta hai


//🔄 Chapter 3: Operators
// = - * / ** % (arithmetic)

1+2=3;
"ha"+"rsh"="harsh";

12-2=10;

12/6=2;

12*2=24;

// 12%2=0(remainder deta hai)

2**3=8//(power)

//comparison opeartors
= == === != !== >= <= < >
= value dalna (assing krna)
let a=12;
12==13 //false(loose)
12=="12"//true only value chekc kr rha(nit strict)
12==="12"//false value + type dono check krta hai(strict)
12!=13//true
12!="12" //false
12!=="12//TRUE

 {/* //ASSINGMENT OPERATOR */}

 let a=12;
 +=.-=,*=,/=,%=</>

 //LOGICAL OPEARTORS
 && || !

 //UNARY OPEARTOR
 + - ++ -- typeof

 //TERBARY OPERATOR
 ?:
 CONDITION ? TRUE HUI K CODE : FALSE K CODE

 //type of null and [] k galat batata hai dono mai values object hoti haui

 //INSTANCE OF always works with refernce values
 a=[]
 a instance of array //answer true 

//  /COMMON DOUBTS
 !! WE CAN USE FOR KNOWING TRUTHY OR FALSY
 ! WILL CONVERT IT INTO TRUTHU OR FALSE AND RHEN AGAIN ! WILL GIVE THE REAL VALUES OF TRUTHY OR FALSY


//  🧭 Chapter 4: Control Flow

if(CONDITION)

    //SWITCH CASE
    switch(val){
        case 1:
        //code 
        break;
    }

    //EARLY RETURN PATTERN
    function getVal(val){
        if(val<25) return 'D';
        else if(val<50) return 'C';
        else if(val<70) return 'B';
        else return "A";
    }
    getVal(89);

    //COFUSION PATTERNS

    function getFrade(score){
        if(score>=90 && score<=100) return "A";
        else if(score>=80 && score<=89) return "B";
          else if(score>=70 && score<=79) return "c";
             else if(score>=60 && score<=69) return "d";
                else if(score>=33 && score<=59) return "d";
                   else if(score>=0 && score<=32) return "e";
                   else return"Invalid marks";

                   //also can done by early return
    }

    //rock paper scissors logic

    function rps(user,computer){
        // if(user==="rock" && computer==="scissor") return "user";
        // if(user ==="scissor " && computer ==="rock") return "compputeer";
        //  if(user==="paper" && computer==="rock") return "user";
        // if(user ==="rock " && computer ==="paper") return "compputeer";

        if(user===computer) return "draw";
        if(user ==="rock" && computer==="scissor") return "user";
          if(user ==="scissor" && computer==="paper") return "user";
            if(user ==="paper" && computer==="rock") return "user";

            return "computer";
    }

    rps("rock","scissor");


// 🔁 Chapter 5: Loops
//repeat krne ko loop khte hai
// for while do-while forin forof foreach

//1 1 1 1 1 1 1 1 
// 1 2  3 4  5 6 7 8 
//kaha se jaana hai akaha tka jana hai -> kaise jana hai  use for loop

//kaha se jaana ahai ->kan rukna hai ->kaise jana hai then while loop

//FOR LOOP
for(let i=1;i<=100;i++){
    console.log(i);
}
//WHILE LOOP
let i=1;
while(i<=100){
    console.log(i);
    i++;
    
}

//DO WHILE LOOP
let i=1;
do{//ek br jrur chlega condition false hone k bavjood ek br jjurur chlta hai
    console.log(i);
    i++;
    
} while(i<=100);

//BREAK
// break → loop poora bandh
for (let i = 1; i <= 5; i++) {
  if (i === 3) break
  console.log(i)
}
// op 1
// 2

//continue current iteration skip, loop chalti rahe
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue
  console.log(i)
}
// op 1 2 4 5


// � Chapter 6: Functions
//WHAT WHY HOW

//WHAT
//AGAR  normal CODE LIKH DIYA TO WO TURANT CHal jata hai

function lolo(){
    console.log("happy new year");
}
lolo();//funtion call krne opr andrd k content chla jeyag

let fnc=function(){//variable k nma hi function k nam hia
    console.log("h3ido");
}
fnc();

//function declartion
function lolo(){
    console.log("happy new year");
}

//function expression
let fnc=function(){//variable k nma hi function k nam hia
    console.log("h3ido");
}

//fat arrow function
let fnc =()=>{
    console.log("wfirrnfon");
}


//para,etres vs arguments
function dance(v1){//v1 is parameter
    console.log(`${v1} nach ha hai`);  
}
dance(ghdoa);//arguments hai ghoda 

//default 
function add(v1=0,v2=0){//parameters ko defualt value assign krna aur agr argument ami value missing hai to default params use hojta hai

    console.log(v1,v2);
    
}
add(1,2);

//rest opeartor
function abcd(...val){//jab argument kai sare ho to hame utne hi parameter banane [padebnge] isse bachne k liye hm rest k use krte hai ...
console.log(val);
//agr ... function k para,eter space m lage to wo rest hai and agar woo arrays and objects m lage to wo spraed hai
}
// val ek array hota hai
abcd(1,2,3,4,5,6,7,8,9,10)

function abcd (1,2,3,...val){
    console.log(a,b,c,val); 
}
abcd(1,2,3,4,5,6,7);

//return and early return
//return matlabjaha e aaye ho wahi dal denge
function abcd(){
    return 12;
}
let val=abcd();
console.log(val);
//eraly return done in if else

//first class functions=>funbction  ko values ki trh trate kr skte hai

    //jaha jahah values likh skte hai wha funcitons likh skte hai
    function abcd(val){
        val();
    }
    abcd(function (){
        console.log("hey");
    })

    //higher order functins=>aise functions hote hai jo ki return kre ek function y fir accept kre ek function apne parameter me
    function abcd(val){//abcd i higher orderr function

    }
    abcd(function(){
    })
    //ya
     function abcd(){
        return function(){
            console.log("heyy");
            
        }
     }
abcd()();//pahle() function call k dusra jo fn return huwa ska)

//pure vs impure functions

//aisa function jo ki bhr ki value ko na badle wo pure hai 
let a=12;
function abcd(){//ye koi bhi bhr ki value change nhi kr rha hai to pure hai
    console.log("dehb");
}
//aisa fn jo bhr ki val ko badal de wo impure fn hai
function hui(){
    a++;//ye bhr ki value change kr rha hai to impure hai
}


//closure =?ek fn jo return kre ek aur function aur return hone wal function hamesha use krega parent fn k koi variable
function abcd(){
    let a=12;
    return function(){
        console.log(a);
    }
}

//lexical scoping
fucntion abcd(){
    let a=12;//a ko pure abcd k andr accese kr skte hia
    function defg(){
        let b=13;//b ko pure defg k andr access kr skte hai
        functoion ghij(){
            let c=14;//c ko pure ghij ke andr accesss kr skte hai thats lexical scoping
        }
    }
}


//⚡ IIFE – Immediately Invoked Function Expression
//Function jo define hote hi turant execute ho jaye
// Used to create private scope instantly
(function(){
    //functiion ko () wrap kro and last me () laagdo
}
)();

//� Hoisting: Declarations vs Expressions
hello(); // works
function hello() {
 console.log("Hi");
}//function expression me hoisting nhi hoti

//bmi calculator
function bmi(weight,height){
    return weight/(height*height);
}
console.log(bmi(50,(1.5)).toFixed(2));//tofixed 2 preciosion tk values rkhta hai

//reusabel deiscount calculator
function discountCalculator(discount) {
    return function(price) {
        return price - price * (discount / 100);
    }
}

let ten = discountCalculator(10);
let twenty = discountCalculator(20);

console.log(ten(1200));     // 1080
console.log(twenty(1200)); // 960


//pure function to grabsform a value
function double(val){
    return val*2;
}
double(4);

//use iife to isolate vari(ables
(function () {
  let count = 0;

  function increment() {
    count++;
    console.log(count);
  }

  increment();
  increment();
})();
// o/p
// 1
// 2
// 👉 count sirf IIFE ke andar zinda hai
// Bahar se access ❌

// 🧰 Chapter 7: Arrays
let marks = [90, 85, 78];
marks[2]=80;//updare uindex 2

let arr=[1,2,3,4,5];
arr.push(7000);

arr.pop();//last avalue hatti hai

arr.shift();//suru se value hatat hai

arr.unshift(0);//shuru m add kr deta hai

arr.splice(1,2);//remove 2 items starting at index 1
arr.splice(-1, 1); // last element remove
// splice(start, deleteCount, item1, item2...)
colors.splice(1,0,"kkk","mmm");//hatega to kuch hi lekin first idnex pe 2 values add ho jayengi
// splice() → original array ko change karta hai

arr.slice(1,2);//array ko change nhi krta ek naya return copy deta hai
// slice() → copy nikaalta hai, original array safe
// slice(start, end)   // end included ❌
arr.slice(-2);   // last 2 elements
//removes froem index 1 to index 2-1 

arr.reverse();//reverse the array main array change hoga

arr.sort(function (a,b){
    return a-b;//incresing orderm sort kr dega
    return b-a;//decreasing order m sort kr dega
});//
//if array me sirf string s ya character hai to only.sort() kam kr jayega 

//foreach
// Array ke har element pe ek function chalata hai
// Bas iterate karta hai, kuch return nahi karta

arr.forEach(function(val){
    console.log((val));
    val+5;
    console.log(val);
    
})

//map

//map sirf tb use krna hai jab aapko ek naya array bannaa hai pichle array k data ke basis pr
//map dikhte hi saath man mein ek blank array banalo
// map → har element ko change karta
arr.map(function(val){
 return 12;//[12.12.12.,12,12] new array
 //kuch return nhi rkenge to undefined aa jayega utni hi times jitna orignal array hai
});
//jab bhi aapko aisa koi case dikh jaye jaha pr ek array se nya array bnega and wo naya array kuch values ko rkrhega tb map lgega

// let arr = [1, 2, 3, 4];

// let sq = arr.map(x => x * x);

// console.log(sq); // [1, 4, 9, 16]

//2️⃣ filter() → select elements
// let arr = [1, 2, 3, 4, 5];

// let even = arr.filter(x => x % 2 === 0);

// console.log(even); // [2, 4]

arr.filter(function(val){
    if(val>4) return true;//jo 4 se badi hai sirf whi jayengei
});


// 3️⃣ reduce() → combine to one value
// let arr = [1, 2, 3, 4];

// let sum = arr.reduce((acc, curr) => acc + curr, 0);

// console.log(sum); // 10
arr.reduce(function(accumulator,val){//accumulaor wo banda hai jsiki value last m define ki hai in here 0
    //accumulator apne value yad rkhta hai aur change hoti hai to bhi
return accumulator+val;
},0)


//find 
// find() → pehla matching element deta hai
arr.find(function(val){
return val===1;//first match return krta hai
})
// 👉 First element jo condition satisfy kare

//some
// some() → true / false deta hai
let arr=[10,30,32,90];
arr.some(function(val){
    return val>85;
})
// 👉 Ek bhi element match → true

// 👉 every() kya karta hai?
// Array ke sabhi elements condition satisfy karte hain ya nahi — ye check karta hai
//opposite of some
arr.every(function(val){
    return val>9;
})

// 1️⃣ Destructuring (values nikaalna)
// 🧠 Meaning
// Array ya object se values nikaal ke variables me rakhna
// let arr = [10, 20, 30];
// let [a, b] = arr;
// console.log(a); // 10
// console.log(b); // 20
let[a,b, ,d];//c skip ho gya


// 2️⃣ Spread Operator (...) — phailana
// 🧠 Meaning
// Array ya object ko tod ke individual values bana deta hai
let arr=1,2,3,4,5,6,7,8,9;
let arr2=[...arr];

let a = [1, 2, 3];
let b = [...a];
b.push(4);
console.log(a); // [1,2,3]
console.log(b); // [1,2,3,4]

//questions


// 🧱 Chapter 8: Objects
let student = {
 name: "Ravi",
 age: 21,
 isEnrolled: true
};

// 🔑 Key-Value Structure
console.log(student["name"]); // Ravi
console.log(student.age); // 21
student.age//dotk bad jo likhenge whi exactly dhundha ayega
let aa="name";
student[aa] //then this aa is conerted into name and then it is find in the object

// 🏗️ Nesting and Deep Access

// Jab ek object ke andar doosra object hota hai, use nested object kehte hain.
// Jab tum multiple levels ke andar wali value access karte ho, use deep access kehte hain.
let user = {
 name: "Amit",
 address: {
 city: "Delhi",
 pincode: 110001
 }
};
console.log(user.address.city); // Delhi

// ✂️ Object Destructuring
// Object se values direct variables me nikal lena, bina baar-baar obj.key likhe.
const user = {
    name: "Prince",
    age: 20,
    city: "Noida"
};

const { name, age } = user;

console.log(name); // Prince
console.log(age);  // 20
//to destructure the key "first-name" as a variable called firstName;
const user={
    "first-name":"Harsh",
};
let{"first-name":firstName}=user;

// for-in loop
// for...in loop ka use object ke keys (properties) iterate karne ke liye hota hai.
for (let key in object) {
    // object[key]
}
const user = {
    name: "Prince",
    age: 20,
    city: "Noida"
};

for (let key in user) {
    console.log(key, user[key]);//we cant write user.name
//     object.key      // ❌ literally looks for "key"
// object[key]     // ✅ uses variable value
}
// o/p
name Prince
age 20
city Noida

// Object.keys(), Object.values(), Object.entries()
// Object ki keys ka array return karta hai.  keys
// Object ki values ka array return karta hai.   values
// Object ko [key, value] pairs ke array me convert karta hai.   entries
Object.keys(user);
// o/p
["name", "age", "city"]

Object.values(user);
// o/p
["Prince", 20, "Noida"]

Object.entries(user);
// o/p
[
  ["name", "Prince"],
  ["age", 20],
  ["city", "Noida"]
]


// � Copying Objects
const user = { name: "Prince", age: 20 };
const copy = { ...user };



//object.assign
let obj2=Object.assign({price:Infinity},obj);//obj me ek aur key value opair add ho jayegi

//deep clonong
// Object ki poori copy banana, jisme nested objects / arrays bhi alag memory me copy ho.
//agr aisa nhi kre to upr k keys avalues to shi deep copy hote hai ekin nested elements referce se copy ho jate hai
const deepCopy = JSON.parse(JSON.stringify(obj));

//optional chaining
// Optional chaining safe deep access ke liye use hoti hai.

// Agar koi property / method exist nahi karti,
// ❌ error throw nahi hota
// ✔ undefined milta hai
//without 
user.address.city; // ❌ error if address undefined
user?.address?.city;//with optional chaining

// 🔹 2. Computed Properties ([])
// Jab property name dynamic ho, tab square brackets use karte hain.
user[key]; // "Prince"

//example
let role="admin";
// in object we write
[role]:"Harsh"//to ab adminkey k liye harsh value aa jayegi
//assign krenge is trh se object me

// 🔹 Shallow Copy
// 👉 Meaning

// Shallow copy me:

// Top-level properties copy hoti hain

// Nested objects ka reference share hota hai
const obj = {
    name: "Prince",
    address: { city: "Noida" }
};

const copy = { ...obj };   // shallow copy

copy.address.city = "Delhi";

console.log(obj.address.city); // Delhi ❌ object m bhi change ho gaya

//deep copy
// Deep copy me:

// Har level pe naya object

// Nested objects bhi independent
JSON.parse(JSON.stringify(obj));//for deep copy

