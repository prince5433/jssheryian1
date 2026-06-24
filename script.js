// WORDS vs KEYWORDS

// Keywords JavaScript ke reserved words hote hain.
// Inka special meaning hota hai, isliye inhe variable ya function name
// ke roop me use nahi kar sakte.
//
// Examples:
// let, const, var, if, else, for, while, return, function, class



// VARIABLES (var, let, const)

// Declaration = Variable banana
// Initialization = Variable ko pehli value assign karna

var a;        // Declaration
a = 12;       // Initialization

var b = 20;   // Declaration + Initialization



// VAR

// Function Scoped hota hai
// Block Scope ko ignore karta hai
// Redeclare bhi kar sakte hain aur Reassign bhi
// Hoisting ke time undefined se initialize hota hai

var x = 10;
var x = 20;   // Redeclaration allowed
x = 30;       // Reassignment allowed

// Browser environment me global var
// window object ka part ban jata hai

var test = 100;
// window.test => 100



// LET

// Block Scoped hota hai
// Redeclare nahi kar sakte same scope me
// Reassign kar sakte hain
// Hoist hota hai but TDZ me rehta hai

let age = 20;
age = 21;     // Allowed

// let age = 22; // Error



// CONST

// Block Scoped hota hai
// Redeclare nahi kar sakte
// Reassign nahi kar sakte
// Declaration ke saath value dena mandatory hai
// TDZ apply hoti hai

const PI = 3.14;

// PI = 3.14159; // Error



// IMPORTANT: const variable ko protect karta hai,
// value ko nahi.

const student = {
    name: "Prince"
};

student.name = "Seth"; // Allowed
student.age = 20;      // Allowed

// student = {}; // Error

// Same rule arrays ke saath bhi apply hota hai

const arr = [1, 2, 3];

arr.push(4); // Allowed

// arr = []; // Error



// SCOPE

// Global Scope
// Block Scope
// Function Scope

{
    // Is curly braces ke andar ka area Block Scope kehlata hai
}

function demo() {
    // Function Scope
}



// REASSIGNMENT vs REDECLARATION

var a = 10;
a = 20;       // Reassignment

var a = 30;   // Redeclaration


let b = 10;
b = 20;       // Reassignment Allowed

// let b = 30; // Redeclaration Not Allowed



// TEMPORAL DEAD ZONE (TDZ)

// TDZ wo time period hota hai jab variable memory me exist karta hai,
// lekin declaration line execute hone se pehle usse access nahi kar sakte.
//
// Sirf let aur const ke saath hota hai.
// var ke saath TDZ nahi hoti.

console.log(num); // ReferenceError

let num = 10;



// HOISTING

// JavaScript execution se pehle memory create karti hai.
// Declarations ko logically top par move kiya hua mana jata hai.
// Is behavior ko Hoisting kehte hain.



// VAR HOISTING

console.log(a); // undefined

var a = 10;

// JS internally kuch is tarah treat karti hai:

var a = undefined;
console.log(a);

a = 10;



// LET / CONST HOISTING

// let aur const bhi hoist hote hain,
// lekin initialize nahi hote.
//
// Isliye TDZ me rehte hain aur access karne par
// ReferenceError milta hai.

console.log(b); // ReferenceError

let b = 20;



// BLOCK SCOPE EXAMPLE

{
    var x = 5;
    let y = 10;
    const z = 15;
}

console.log(x); // 5

// console.log(y); // ReferenceError
// console.log(z); // ReferenceError



// INTERVIEW POINTS

// 1. var => Function Scoped
// 2. let & const => Block Scoped
// 3. var => Redeclare + Reassign
// 4. let => Reassign only
// 5. const => Neither Redeclare nor Reassign
// 6. let & const => TDZ
// 7. var => Hoisted with undefined
// 8. let/const => Hoisted but uninitialized
// 9. const object/array ke contents modify ho sakte hain
// 10. Modern JavaScript me:
//     const by default use karo
//     let jab value change karni ho
//     var avoid karo

// DATA TYPES + TYPE SYSTEM

// Data Type ka matlab hai kisi value ka type.
// Example: Number, String, Boolean, Object, etc.


// PRIMITIVE vs REFERENCE TYPES

// Primitive Types:
// Copy karne par actual value ki alag copy milti hai.

let a = 10;
let b = a;

b = 20;

// a => 10
// b => 20

// Primitive Types:
// String, Number, Boolean, Null, Undefined, Symbol, BigInt


// Reference Types:
// Copy karne par actual copy nahi milti,
// memory address (reference) copy hota hai.

let obj1 = {
    name: "Harsh"
};

let obj2 = obj1;

obj2.name = "Harshita";

// obj1.name bhi change ho jayega
// kyunki dono same object ko reference kar rahe hain.

// Reference Types:
// Object, Array, Function



// STRING

// String ko declare karne ke 3 tarike hain:

let str1 = 'Hello';
let str2 = "Hello";
let str3 = `Hello`;



// NULL

// Null ka matlab hai ki aapne intentionally
// variable ko "empty" ya "no value" set kiya hai.

let student = null;



// UNDEFINED

// Undefined ka matlab hai variable declare hua hai,
// lekin usme abhi tak koi value assign nahi hui.

let x;

// x => undefined



// SYMBOL

// Symbol unique aur immutable value create karta hai.
//
// Mainly property name collisions avoid karne ke liye use hota hai.
// Jab libraries aur application code me same property name
// accidentally clash kar sakta hai tab Symbol useful hota hai.

let uid1 = Symbol("uid");
let uid2 = Symbol("uid");

console.log(uid1 === uid2); // false

// Har Symbol unique hota hai,
// chahe description same hi kyu na ho.



// BIGINT

// JavaScript Number ki safe integer limit hoti hai.

Number.MAX_SAFE_INTEGER;

// Bahut bade integers store karne ke liye BigInt use karte hain.

let bigNum = 98984784987489n;

// Last me 'n' BigInt ko represent karta hai.


// DYNAMIC TYPING

// JavaScript dynamically typed language hai.
//
// Variable ka type runtime par change ho sakta hai.

let value = 12;

value = true;
value = "Harsh";
value = [];
value = null;
value = undefined;

// Same variable alag-alag type ki values hold kar sakta hai.


// TYPEOF OPERATOR

// Kisi value ka data type check karne ke liye use hota hai.

typeof 12;           // "number"
typeof "Harsh";      // "string"
typeof true;         // "boolean"
typeof undefined;    // "undefined"
typeof {};           // "object"
typeof [];           // "object"
typeof function(){}; // "function"


// TYPEOF QUIRKS (INTERVIEW IMPORTANT)

// JavaScript ka purana bug

typeof null; // "object"

// NaN ka type bhi "number" hota hai

typeof NaN; // "number"

// Reason:
// NaN ek failed numeric operation ka result hai,
// aur numeric operations ka type number hi hota hai.



// TYPE COERCION

// Jab JavaScript automatically ek type ko
// doosre type me convert kar deti hai,
// use Type Coercion kehte hain.


// "+" operator string ko prefer karta hai

"5" + 1; // "51"

// Number ko string me convert kar diya


// "-" operator sirf numbers par kaam karta hai

"5" - 1; // 4

// String ko number me convert kar diya


true + 1;       // 2
null + 1;       // 1
undefined + 1;  // NaN



// == vs ===

// ==  -> Value compare karta hai (type conversion ke saath)
// === -> Value + Type dono compare karta hai

5 == "5";   // true

5 === "5";  // false

// Interview Rule:
// Hamesha === prefer karo.


// TRUTHY vs FALSY VALUES

// Falsy Values:

false;
0;
-0;
0n;
"";
null;
undefined;
NaN;
document.all;

// Inke alawa almost sab kuch Truthy hota hai.


// Truthy Examples

"0";
"false";
[];
{};
function(){};



// COMMON CONFUSIONS

// 1. typeof null => "object"
//    Ye JavaScript ka historical bug hai.

// 2. undefined ka matlab:
//    Variable declare hua hai lekin value assign nahi hui.

// 3. null ka matlab:
//    Aapne jaan-bujhkar empty value assign ki hai.

// 4. NaN ka type "number" hota hai.

// 5. "5" + 1 => "51"
//    String concatenation

// 6. "5" - 1 => 4
//    Numeric subtraction

// 7. Arrays technically objects hote hain.

typeof []; // "object"

// 8. Functions bhi objects hote hain,
//    lekin typeof unka "function" return karta hai.

typeof function(){}; // "function"



// INTERVIEW MINDSET

// Primitive => Value copy hoti hai
// Reference => Memory reference copy hota hai

// == => Type conversion karta hai
// === => Type conversion nahi karta

// null => Intentional absence of value
// undefined => Value assign nahi hui

// typeof null => "object" (bug)
// typeof NaN => "number"

// JavaScript is Dynamically Typed

// CHAPTER 3 : OPERATORS


// ARITHMETIC OPERATORS

// Arithmetic operators mathematical calculations ke liye use hote hain.

+   // Addition
-   // Subtraction
*   // Multiplication
/   // Division
%   // Modulus (Remainder)
**  // Exponentiation (Power)

1 + 2;            // 3

"Ha" + "rsh";     // "Harsh"
// String ke saath + concatenation karta hai

12 - 2;           // 10

12 / 6;           // 2

12 * 2;           // 24

12 % 2;           // 0
// Modulus operator remainder return karta hai

2 ** 3;           // 8
// 2 raised to the power 3



// COMPARISON OPERATORS

// Values ko compare karne ke liye use hote hain.

==   // Loose Equality
===  // Strict Equality
!=   // Loose Not Equal
!==  // Strict Not Equal
>    // Greater Than
<    // Less Than
>=   // Greater Than Equal To
<=   // Less Than Equal To


// Assignment Operator

// "=" value assign karne ke liye use hota hai

let a = 12;


// Equality Operators

12 == 13;      // false

12 == "12";    // true
// Sirf value compare karta hai
// Type coercion allow karta hai

12 === "12";   // false
// Value + Type dono compare karta hai

12 != 13;      // true

12 != "12";    // false
// Value same hai

12 !== "12";   // true
// Type different hai



// ASSIGNMENT OPERATORS

let num = 10;

num += 5;   // num = num + 5
num -= 5;   // num = num - 5
num *= 5;   // num = num * 5
num /= 5;   // num = num / 5
num %= 5;   // num = num % 5

// Interview Point:
// Assignment operators code ko short aur readable banate hain.



// LOGICAL OPERATORS

&&  // AND
||  // OR
!   // NOT


// AND Operator

true && true;     // true

// Dono conditions true honi chahiye


// OR Operator

true || false;    // true

// Ek condition true hona kaafi hai


// NOT Operator

!true;            // false
!false;           // true

// Truthy ko falsy aur falsy ko truthy bana deta hai



// UNARY OPERATORS

// Ye operators sirf ek operand par kaam karte hain.

+        // Convert to Number
-        // Negation
++       // Increment
--       // Decrement
typeof   // Data Type Check


+"5";       // 5

-"5";       // -5

let x = 10;

x++;        // 11
x--;        // 10

typeof 12;  // "number"



// PRE-INCREMENT vs POST-INCREMENT

let a1 = 5;

console.log(a1++); // 5
// Pehle value return hogi, phir increment

console.log(++a1); // 7
// Pehle increment hoga, phir value return hogi



// TERNARY OPERATOR

// Short form of if-else

// Syntax:

condition ? valueIfTrue : valueIfFalse;

let age = 18;

let result = age >= 18 ? "Adult" : "Minor";



// TYPEOF QUIRKS

typeof null; // "object"

// Ye JavaScript ka historical bug hai

typeof []; // "object"

// Arrays technically objects hote hain

typeof function(){}; // "function"



// INSTANCEOF OPERATOR

// instanceof Reference Types ke saath use hota hai.
// Ye check karta hai object kis constructor se bana hai.

let arr = [];

arr instanceof Array;    // true
arr instanceof Object;   // true

// Kyunki Array internally Object se inherit karta hai


let obj = {};

obj instanceof Object;   // true


// IMPORTANT INTERVIEW POINT

// instanceof primitive values ke liye reliable nahi hota

"Harsh" instanceof String; // false

// Kyunki ye primitive string hai,
// String object nahi



// COMMON DOUBTS


// DOUBLE NOT (!!)

// Kisi bhi value ko boolean me convert karne ka shortcut

!!true;      // true
!!false;     // false

!!1;         // true
!!0;         // false

!!"Harsh";   // true
!!"";        // false

!![];        // true
!!{};        // true

!!null;      // false
!!undefined; // false


// Kaise kaam karta hai?

// Pehla ! value ko opposite boolean me convert karta hai
// Doosra ! uska reverse kar deta hai

!"Harsh";    // false
!!"Harsh";   // true



// INTERVIEW MINDSET

// ==  -> Type conversion karta hai
// === -> Type conversion nahi karta

// typeof null -> "object" (bug)

// typeof [] -> "object"

// instanceof -> Reference types ke saath use hota hai

// !!value -> Truthy/Falsy check karne ka shortcut

// Always prefer === over ==

// + string ke saath concatenation karta hai
// - operator numeric conversion karta hai

"5" + 1; // "51"
"5" - 1; // 4


// CHAPTER 4 : CONTROL FLOW

// Control Flow decide karta hai ki
// kaunsa code chalega, kab chalega,
// aur kitni baar chalega.


// IF, ELSE IF, ELSE

if (condition) {
    // Jab condition true ho
}
else if (anotherCondition) {
    // Jab pehli false aur ye true ho
}
else {
    // Jab saari conditions false ho
}


// IMPORTANT

// else-if chain top-to-bottom execute hoti hai.
// Isliye order bahut important hota hai.


// SWITCH CASE

// Ek hi value ko multiple cases ke against
// compare karne ke liye use hota hai.

switch (value) {

    case 1:
        // Code
        break;

    case 2:
        // Code
        break;

    default:
        // Fallback code
}

// IMPORTANT:

// break lagana zaroori hota hai.
// Agar break nahi lagaya to execution
// next cases me bhi chali jayegi.

// Is behavior ko Fall Through kehte hain.


// EARLY RETURN PATTERN

// Function me unnecessary nesting avoid karne ke liye
// jaldi return kar dete hain.

// Isse code zyada readable aur clean ban jata hai.

function getVal(val) {

    if (val < 25) return "D";

    if (val < 50) return "C";

    if (val < 70) return "B";

    return "A";
}

getVal(89);

// Output: A


// NOTE:

// Early Return Pattern me generally
// else likhne ki zarurat nahi hoti,
// kyunki return ke baad function wahi khatam ho jata hai.


// GRADE CALCULATOR

function getGrade(score) {

    if (score >= 90 && score <= 100)
        return "A";

    if (score >= 80 && score <= 89)
        return "B";

    if (score >= 70 && score <= 79)
        return "C";

    if (score >= 60 && score <= 69)
        return "D";

    if (score >= 33 && score <= 59)
        return "E";

    if (score >= 0 && score <= 32)
        return "F";

    return "Invalid Marks";
}


// BETTER APPROACH

// Jab ranges descending order me ho,
// tab upper limit baar-baar check karne ki
// zarurat nahi padti.

function getGrade(score) {

    if (score > 100 || score < 0)
        return "Invalid Marks";

    if (score >= 90)
        return "A";

    if (score >= 80)
        return "B";

    if (score >= 70)
        return "C";

    if (score >= 60)
        return "D";

    if (score >= 33)
        return "E";

    return "F";
}


// ROCK PAPER SCISSORS

// User aur Computer ke move ke basis par
// winner decide karna hai.

function rps(user, computer) {

    // Sabse pehle draw check karo

    if (user === computer)
        return "Draw";


    // User winning conditions

    if (user === "rock" && computer === "scissor")
        return "User";

    if (user === "scissor" && computer === "paper")
        return "User";

    if (user === "paper" && computer === "rock")
        return "User";


    // Baaki sab cases me computer jeetega

    return "Computer";
}

rps("rock", "scissor");


// TRUTHY / FALSY IN IF

// if condition me hamesha boolean hi hona zaroori nahi hai.
// JavaScript value ko internally boolean me convert kar deti hai.

if ("Harsh") {
    // Run karega (Truthy)
}

if (0) {
    // Run nahi karega (Falsy)
}


// COMMON CONFUSIONS


// 1. switch me break bhool gaye

switch (2) {

    case 2:
        console.log("Two");

    case 3:
        console.log("Three");
}

// Output:
// Two
// Three

// Kyunki break nahi tha.


// 2. else-if order matters

let marks = 95;

if (marks >= 33)
    console.log("Pass");

else if (marks >= 90)
    console.log("A");

// Output:
// Pass

// Isliye specific conditions ko pehle likho.


// 3. Early Return vs Deep Nesting

// Avoid this:

function checkAge(age) {

    if (age >= 18) {

        if (age <= 60) {

            return "Allowed";
        }
    }

    return "Denied";
}


// Prefer this:

function checkAge(age) {

    if (age < 18)
        return "Denied";

    if (age > 60)
        return "Denied";

    return "Allowed";
}



// INTERVIEW POINTS

// 1. Control Flow decide karta hai code execution path.

// 2. switch-case me break na lagane par
//    fall-through hota hai.

// 3. else-if chain top-down execute hoti hai.

// 4. Early Return code ko clean aur readable banata hai.

// 5. if me truthy/falsy values directly use kar sakte hain.

// 6. Ternary operator simple if-else ka shorthand hai.


// MINDSET

// Control Flow = Decision Making in JavaScript

// if-else => Complex conditions
// switch => Single value ke multiple cases
// Early Return => Cleaner functions

// CHAPTER 5 : LOOPS

// Loops ka use kisi code ko baar-baar repeat karne ke liye kiya jata hai.

// Types of Loops:

// 1. for loop
// 2. while loop
// 3. do-while loop
// 4. for...in loop
// 5. for...of loop
// 6. forEach()


// LOOP SOCHNE KA TARIKA

// Kaha se start karna hai?
// Kahan tak jana hai?
// Kaise move karna hai?

// Ye tino cheezein clear ho to generally for loop use karte hain.


// FOR LOOP

// Syntax:

for (initialization; condition; update) {
    // code
}

// Example:

for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// Initialization  -> Starting point
// Condition       -> Kab tak chalna hai
// Update          -> Har iteration ke baad kya change hoga



// WHILE LOOP

// Jab sirf starting point aur stopping condition pata ho,
// aur iterations pehle se fixed na ho,
// tab while loop useful hota hai.

let i = 1;

while (i <= 100) {

    console.log(i);

    i++;
}

// Sabse pehle condition check hoti hai,
// phir code execute hota hai.


// DO-WHILE LOOP

// Pehle code execute hota hai,
// phir condition check hoti hai.

// Isliye ye minimum ek baar zaroor chalta hai,
// chahe condition false hi kyu na ho.

let j = 1;

 

do {

    console.log(j);

    j++;

} while (j <= 100);


// Example:

let x = 10;

do {
    console.log("Runs Once");
} while (x < 5);

// Output:
// Runs Once



// BREAK

// break loop ko turant terminate kar deta hai.

for (let i = 1; i <= 5; i++) {

    if (i === 3)
        break;

    console.log(i);
}

// Output:
// 1
// 2

// i = 3 par poora loop band ho gaya.


// CONTINUE

// continue current iteration ko skip karta hai,
// lekin loop ko band nahi karta.

for (let i = 1; i <= 5; i++) {

    if (i === 3)
        continue;

    console.log(i);
}

// Output:
// 1
// 2
// 4
// 5

// Sirf i = 3 wali iteration skip hui.


// FOR...OF LOOP

// Arrays aur Strings jaise iterable objects ke values
// par iterate karne ke liye use hota hai.

let arr = [10, 20, 30];

for (let value of arr) {

    console.log(value);
}

// Output:
// 10
// 20
// 30


let str = "Harsh";

for (let ch of str) {

    console.log(ch);
}


// FOR...IN LOOP

// Objects ke keys par iterate karne ke liye use hota hai.

let user = {
    name: "Harsh",
    age: 25
};

for (let key in user) {

    console.log(key, user[key]);
}

// Output:
// name Harsh
// age 25


// IMPORTANT:

// for...in object keys ke liye best hai.
// Arrays par generally for...of prefer karte hain.


// FOREACH

// Arrays ke har element par callback function run karta hai.

let nums = [10, 20, 30];

nums.forEach(function (value) {

    console.log(value);
});

// Output:
// 10
// 20
// 30


// COMMON CONFUSIONS


// 1. break vs continue

// break    -> Poora loop band
// continue -> Sirf current iteration skip


// 2. while vs do-while

while (false) {
    console.log("Hello");
}

// Output:
// Kuch nahi


do {
    console.log("Hello");
} while (false);

// Output:
// Hello


// 3. for...in vs for...of

// for...in  -> Keys
// for...of  -> Values


let arr2 = ["A", "B", "C"];

for (let key in arr2) {
    console.log(key);
}

// 0
// 1
// 2


for (let value of arr2) {
    console.log(value);
}

// A
// B
// C


// 4. forEach ki limitation

// forEach me break aur continue use nahi kar sakte.


// WRONG

// arr.forEach((value) => {
//     if(value === 3) break; // Error
// });


// INTERVIEW POINTS

// 1. for loop -> Jab iterations ka count pata ho.

// 2. while loop -> Jab iterations unpredictable ho.

// 3. do-while -> Minimum ek baar execute hota hai.

// 4. break -> Loop terminate karta hai.

// 5. continue -> Current iteration skip karta hai.

// 6. for...of -> Values ke liye.

// 7. for...in -> Object keys ke liye.

// 8. forEach callback-based iteration hai.

// 9. forEach me break aur continue nahi use kar sakte.


// MINDSET

// for      -> Index based looping
// while    -> Condition based looping
// do-while -> At least one execution
// for...of -> Array/String values
// for...in -> Object keys
// forEach  -> Cleaner array iteration

// CHAPTER 6 : FUNCTIONS

// FUNCTIONS = Reusable blocks of code

// WHY?

// Agar normal code likh diya to wo turant execute ho jata hai.
// Lekin function tabhi execute hota hai jab usse call kiya jaye.

// WHAT?

// Function ek reusable logic block hota hai
// jise multiple baar use kiya ja sakta hai.


// FUNCTION DECLARATION

function greet() {
    console.log("Happy New Year");
}

greet();

// Function call karne par hi andar ka code execute hota hai.



// FUNCTION EXPRESSION

// Function ko variable me store kar sakte hain.

let fnc = function () {
    console.log("Hello");
};

fnc();

// Yahan variable ka naam hi function ko refer karta hai.



// ARROW FUNCTION (Fat Arrow Function)

let fnc2 = () => {
    console.log("Arrow Function");
};

fnc2();

// Shorter syntax
// ES6 me introduce hua tha.



// PARAMETERS vs ARGUMENTS

function dance(name) {     // Parameter
    console.log(`${name} naach raha hai`);
}

dance("Ghoda");            // Argument

// Parameter -> Function definition ke andar
// Argument  -> Function call ke waqt pass ki gayi value



// DEFAULT PARAMETERS

// Agar argument pass na ho to default value use hoti hai.

function add(v1 = 0, v2 = 0) {

    console.log(v1 + v2);
}

add(10, 20);
add(10);
add();

// Missing values ki jagah default values use hongi.



// REST OPERATOR

// Jab arguments ki exact quantity pata na ho,
// tab Rest Operator (...) use karte hain.

function printValues(...values) {

    console.log(values);
}

printValues(1, 2, 3, 4, 5);

// Output:
// [1, 2, 3, 4, 5]

// Rest Operator hamesha array return karta hai.


// IMPORTANT

// Rest parameter hamesha last parameter hona chahiye.

function demo(a, b, c, ...values) {

    console.log(a, b, c, values);
}

demo(1, 2, 3, 4, 5, 6, 7);

// Output:
// 1 2 3 [4,5,6,7]


// REST vs SPREAD

// Function parameters me ... = Rest Operator

function abc(...nums) {}

// Arrays/Objects ko expand karne ke liye ... = Spread Operator

let arr = [1, 2, 3];

console.log(...arr);

// Output:
// 1 2 3



// RETURN

// return function ka result wapas bhejta hai.
// return ke baad function immediately stop ho jata hai.

function getValue() {

    return 12;
}

let value = getValue();

console.log(value);


// EARLY RETURN

// Unnecessary nesting avoid karne ke liye
// function ko jaldi exit kara dete hain.

function checkAge(age) {

    if (age < 18)
        return "Denied";

    return "Allowed";
}



// FIRST CLASS FUNCTIONS

// JavaScript me functions ko values ki tarah treat kiya jata hai.

// Isliye function ko:
// 1. Variable me store kar sakte hain
// 2. Argument ki tarah pass kar sakte hain
// 3. Return kar sakte hain

function execute(fn) {

    fn();
}

execute(function () {

    console.log("Hey");
});



// HIGHER ORDER FUNCTIONS (HOF)

// Aisa function jo:

// 1. Function ko parameter me accept kare
// ya
// 2. Function return kare

// use Higher Order Function kehte hain.

function process(fn) {

    fn();
}

// process = Higher Order Function

process(function () {

    console.log("Hello");
});


// Function Returning Function

function createFunction() {

    return function () {

        console.log("Hey");
    };
}

createFunction()();


// PURE vs IMPURE FUNCTIONS


// PURE FUNCTION

// Pure Function:
// 1. Same input -> Same output
// 2. Bahar ki value modify nahi karta

function double(num) {

    return num * 2;
}

double(4);


// IMPURE FUNCTION

// Jo external state ko modify kare
// ya side effects create kare

let count = 10;

function increment() {

    count++;
}

// count ko modify kar raha hai
// Isliye impure function hai.



// LEXICAL SCOPING

// Child function apne parent scope ke variables
// access kar sakta hai.

function outer() {

    let a = 12;

    function inner() {

        console.log(a);
    }

    inner();
}

// Scope lookup parent ki taraf hoti hai.
// Is behavior ko Lexical Scoping kehte hain.



// CLOSURE
//closure=ek fn jo return kre ek aur function aur return hone wal function hamesha use krega parent fn k koi variable

// Closure tab banta hai jab ek function
// apne parent scope ke variables ko yaad rakhta hai,
// even after parent function execute ho chuka ho.

function outer() {

    let a = 12;

    return function () {

        console.log(a);
    };
}

let fn = outer();

fn();

// Output:
// 12

// Inner function ko parent ka variable yaad hai.
// Isi ko Closure kehte hain.



// INTERVIEW LINE

// Closure = Function + Lexical Environment



// IIFE
// Immediately Invoked Function Expression

// Function jo define hote hi turant execute ho jaye.
//functiion ko () wrap kro and last me () laagdo } )();

(function () {

    console.log("Runs Immediately");

})();

// Use Cases:

// 1. Private Scope banana
// 2. Global namespace pollution avoid karna
// 3. Temporary logic execute karna



// HOISTING

// Function Declarations hoist hoti hain.

hello();

function hello() {

    console.log("Hi");
}

// Works



// Function Expressions hoist nahi hoti.


// greet(); // Error

let greet = function () {

    console.log("Hello");
};



// ARROW FUNCTION VS NORMAL FUNCTION

// Arrow functions ka apna this nahi hota.
//wo simply inherit or borrow this from the parent scope ther are written inside
// Arrow functions ke paas arguments object bhi nahi hota.

// Interview me bahut pucha jata hai.


// BMI CALCULATOR

function bmi(weight, height) {

    return weight / (height * height);
}

console.log(bmi(50, 1.5).toFixed(2));

// toFixed(2)
// Decimal ke baad 2 digits tak value dikhata hai.



// REUSABLE DISCOUNT CALCULATOR (HOF + CLOSURE)

function discountCalculator(discount) {

    return function (price) {

        return price - price * (discount / 100);
    };
}

let tenPercent = discountCalculator(10);
let twentyPercent = discountCalculator(20);

console.log(tenPercent(1200));
console.log(twentyPercent(1200));



// PURE FUNCTION EXAMPLE

function doubleValue(value) {

    return value * 2;
}

doubleValue(4);



// IIFE FOR PRIVATE VARIABLES

(function () {

    let count = 0;

    function increment() {

        count++;

        console.log(count);
    }

    increment();
    increment();

})();

// Output:
// 1
// 2

// count sirf IIFE ke andar accessible hai.
// Bahar se access nahi kar sakte.


// COMMON CONFUSIONS

// 1. Parameter != Argument

// Parameter -> Function definition
// Argument  -> Function call


// 2. Rest != Spread

// Function parameter me ... => Rest
// Array/Object expansion me ... => Spread


// 3. Closure != Function Returning Function

// Har function jo function return kare
// zaroori nahi closure ho.

// Closure tab hota hai jab returned function
// parent scope ki value use kare.


// 4. return vs console.log

function demo() {

    return 10;
}

let result = demo();

// return value wapas deta hai
// console.log sirf print karta hai



// INTERVIEW POINTS

// Function Declaration -> Hoisted
// Function Expression -> Not Hoisted

// Arrow Function -> No own this

// Rest Operator -> Extra arguments ko array me collect karta hai

// Spread Operator -> Values ko expand karta hai

// Closure -> Function + Lexical Environment

// HOF -> Function accepts or returns another function

// Pure Function -> No side effects

// IIFE -> Immediately execute + private scope

// CHAPTER 7 : ARRAYS

// Array ek ordered collection hota hai
// jisme multiple values ek hi variable me store kar sakte hain.

// Indexing 0 se start hoti hai.

let marks = [90, 85, 78];

console.log(marks[0]); // 90

marks[2] = 80; // Index 2 ki value update kar di



// ARRAY METHODS

let arr = [1, 2, 3, 4, 5];



// PUSH

// Array ke end me element add karta hai.
// Original array modify hota hai.

arr.push(7000);


// POP

// Last element remove karta hai.
// Original array modify hota hai.

arr.pop();



// SHIFT

// First element remove karta hai.
// Original array modify hota hai.

arr.shift();



// UNSHIFT

// Beginning me element add karta hai.
// Original array modify hota hai.

arr.unshift(0);



// SPLICE

// Original array ko modify karta hai.

// Syntax:
// splice(startIndex, deleteCount, item1, item2...)

arr.splice(1, 2);

// Index 1 se 2 elements remove kar dega.


arr.splice(-1, 1);

// Last element remove kar dega.


colors.splice(1, 0, "kkk", "mmm");

// Index 1 par elements insert karega
// Kuch delete nahi karega.


// IMPORTANT

// splice() original array ko change karta hai.


// SLICE

// Array ki copy return karta hai.
// Original array ko change nahi karta.

// Syntax:
// slice(start, end)

// End index include nahi hota.

arr.slice(1, 3);

// Index 1 se 2 tak copy milegi


arr.slice(-2);

// Last 2 elements ki copy return karega


// IMPORTANT

// slice() original array ko modify nahi karta.


// splice vs slice

// splice() -> Original array change
// slice()  -> New copy return



// REVERSE

// Array ko reverse karta hai.
// Original array modify hota hai.

arr.reverse();



// SORT

// Original array modify hota hai.

arr.sort(function (a, b) {

    return a - b;

});

// Increasing Order


arr.sort(function (a, b) {

    return b - a;

});

// Decreasing Order


// IMPORTANT

// sort() default me values ko strings ki tarah compare karta hai.

[10, 2, 30].sort();

// Result:
// [10, 2, 30]

// Wrong for numbers


// Correct Numeric Sort

[10, 2, 30].sort((a, b) => a - b);



// FOREACH

// Array ke har element par function run karta hai.
// Kuch return nahi karta.
// Hamesha undefined return karta hai.

arr.forEach(function (val) {

    console.log(val);

});

// Iteration ke liye use hota hai.


// IMPORTANT

// forEach me break aur continue use nahi kar sakte.


// MAP

// Jab ek array se naya array banana ho,
// tab map use karte hain.

// map dekhte hi dimaag me ek blank array imagine karo.

let result = arr.map(function (val) {

    return val * 2;

});

// Har element transform hota hai
// Aur naya array return hota hai.


// Example

let nums = [1, 2, 3, 4];

let squares = nums.map(x => x * x);

console.log(squares);

// [1, 4, 9, 16]


// IMPORTANT

// Agar return nahi karoge to
// undefined values ka array milega.


// FILTER

// Sirf wahi elements return karta hai
// jo condition satisfy karte hain.

arr.filter(function (val) {

    return val > 4;

});

// Sirf 4 se bade elements return honge.


// Example

let even = [1, 2, 3, 4, 5].filter(x => x % 2 === 0);

// [2,4]


// REDUCE

// Pura array combine karke
// ek single value return karta hai.

// Syntax

arr.reduce(function (accumulator, val) {

    return accumulator + val;

}, 0);


// accumulator previous result ko store karta rehta hai.

// 0 initial value hai.


// Example

let sum = [1, 2, 3, 4].reduce(

    (acc, curr) => acc + curr,

    0

);

// 10


// FIND

// Condition satisfy karne wala
// pehla element return karta hai.

arr.find(function (val) {

    return val === 1;

});

// First matching value return hogi.


// IMPORTANT

// find() ek value return karta hai
// array nahi.


// SOME

// Check karta hai ki
// kam se kam ek element condition satisfy karta hai ya nahi.

let arr1 = [10, 30, 32, 90];

arr1.some(function (val) {

    return val > 85;

});

// true


// EVERY

// Check karta hai ki
// saare elements condition satisfy karte hain ya nahi.

arr1.every(function (val) {

    return val > 9;

});

// true


// some vs every

// some()  -> Ek bhi match ho jaye
// every() -> Sab match hone chahiye



// ARRAY DESTRUCTURING

// Array se values nikal kar variables me store karna.

let data = [10, 20, 30, 40];

let [a, b] = data;

console.log(a); // 10
console.log(b); // 20


// Elements skip bhi kar sakte hain.

let [x, y, , z] = data;

// x = 10
// y = 20
// z = 40



// SPREAD OPERATOR (...)


// Array ya object ko expand kar deta hai.

let nums1 = [1, 2, 3];

let nums2 = [...nums1];

console.log(nums2);

// [1,2,3]


// Copy banane ke liye useful hai.

let a1 = [1, 2, 3];

let b1 = [...a1];

b1.push(4);

console.log(a1);

// [1,2,3]

console.log(b1);

// [1,2,3,4]


// IMPORTANT

// Spread shallow copy banata hai.


// COMMON CONFUSIONS


// map vs forEach

// map     -> New array return karta hai
// forEach -> Kuch return nahi karta


// find vs filter

// find   -> First match
// filter -> All matches


// some vs every

// some  -> At least one true
// every -> All true


// slice vs splice

// slice  -> Copy
// splice -> Modify


// push/pop

// End se operation


// shift/unshift

// Start se operation


// INTERVIEW POINTS

// Arrays reference types hote hain.

// push/pop => O(1) generally

// shift/unshift => O(n)
// Kyunki saare indexes shift hote hain.

// map => Transformation

// filter => Selection

// reduce => Single output

// find => First match

// some => Any match

// every => All match

// spread => Shallow copy

// destructuring => Easy value extraction



// MINDSET

// map    -> Transform
// filter -> Select
// reduce -> Combine
// find   -> Search one
// some   -> Any?
// every  -> All?

// CHAPTER 8 : OBJECTS

// Object JavaScript me key-value pairs ka collection hota hai.
// Real-world entities jaise User, Product, Student etc.
// ko represent karne ke liye use kiya jata hai.

let student = {
    name: "Ravi",
    age: 21,
    isEnrolled: true
};


// KEY - VALUE STRUCTURE

// Key ke through value access karte hain.

console.log(student["name"]); // Ravi

console.log(student.age);     // 21


// DOT NOTATION vs BRACKET NOTATION

student.age;

// Dot notation me jo likhte ho
// wahi exact property name search hota hai.


let key = "name";

student[key];

// Yahan key variable ki value ("name")
// property name ke roop me use hogi.


// IMPORTANT

student.key;

// Ye "key" naam ki property dhundhega ❌

student[key];

// Ye variable key ki value use karega ✅



// NESTED OBJECTS

// Jab ek object ke andar doosra object ho,
// use Nested Object kehte hain.

let user = {

    name: "Amit",

    address: {
        city: "Delhi",
        pincode: 110001
    }
};


// DEEP ACCESS

// Nested object ke andar wali values access karna.

console.log(user.address.city);

// Delhi



// OBJECT DESTRUCTURING

// Object se values directly variables me nikal lena.

const person = {

    name: "Prince",
    age: 20,
    city: "Noida"
};

const { name, age } = person;

console.log(name);

console.log(age);


// Renaming While Destructuring

const user2 = {

    "first-name": "Harsh"
};

let { "first-name": firstName } = user2;

console.log(firstName);


// FOR...IN LOOP

// Object ki keys iterate karne ke liye use hota hai.

const user3 = {

    name: "Prince",
    age: 20,
    city: "Noida"
};

for (let key in user3) {

    console.log(key, user3[key]);
}


// IMPORTANT

// object.key

// "key" naam ki property dhundhega ❌


// object[key]

// Variable key ki value use karega ✅



// OUTPUT

// name Prince
// age 20
// city Noida



// OBJECT.KEYS()

// Object ki saari keys ka array return karta hai.

Object.keys(user3);

// ["name", "age", "city"]



// OBJECT.VALUES()

// Object ki saari values ka array return karta hai.

Object.values(user3);

// ["Prince", 20, "Noida"]



// OBJECT.ENTRIES()

// Object ko [key, value] pairs me convert karta hai.

Object.entries(user3);

// [
//   ["name", "Prince"],
//   ["age", 20],
//   ["city", "Noida"]
// ]



// COPYING OBJECTS

const original = {

    name: "Prince",
    age: 20
};


// SPREAD COPY

const copy = {

    ...original
};


// OBJECT.ASSIGN()

// Multiple objects merge karne ya copy banane ke liye use hota hai.

let obj = {

    name: "Laptop"
};

let obj2 = Object.assign(

    { price: Infinity },

    obj
);

// Result:

// {
//     price: Infinity,
//     name: "Laptop"
// }



// SHALLOW COPY

// Top-level properties copy hoti hain.
// Nested objects reference se copy hote hain.

const obj3 = {

    name: "Prince",

    address: {
        city: "Noida"
    }
};

const shallowCopy = {

    ...obj3
};

shallowCopy.address.city = "Delhi";

console.log(obj3.address.city);

// Delhi

// Original object bhi change ho gaya.


// IMPORTANT

// Spread Operator aur Object.assign()
// dono shallow copy banate hain.



// DEEP COPY

// Har level par nayi memory create hoti hai.
// Nested objects bhi independent ho jate hain.

const deepCopy = JSON.parse(

    JSON.stringify(obj3)

);


// IMPORTANT

// JSON method ki limitations:

// 1. Functions remove ho jate hain
// 2. undefined remove ho jata hai
// 3. Symbol remove ho jata hai
// 4. Date object string ban jata hai

// Modern JavaScript:

// structuredClone(obj)



// OPTIONAL CHAINING

// Safe deep access ke liye use hoti hai.

// Agar property exist na kare to
// error ki jagah undefined return hota hai.


user.address.city;

// Error agar address undefined hua


user?.address?.city;

// Safe Access

// undefined return karega
// error nahi dega



// COMPUTED PROPERTIES

// Jab property name dynamic ho,
// tab [] syntax use karte hain.

let role = "admin";

let personInfo = {

    [role]: "Harsh"
};

console.log(personInfo);

// { admin: "Harsh" }


// Ye internally aisa banega:

// {
//     admin: "Harsh"
// }



// DELETE OPERATOR

// Object se property remove karta hai.

delete personInfo.admin;



// COMMON CONFUSIONS


// 1. Dot vs Bracket

obj.name;

// Fixed property


obj[key];

// Dynamic property


// 2. Object.keys()

// Keys ka array deta hai


// 3. Object.values()

// Values ka array deta hai


// 4. Object.entries()

// Key-value pairs deta hai


// 5. Spread Copy != Deep Copy

// Spread sirf shallow copy banata hai


// 6. Optional Chaining

// Error se bachne ke liye use hoti hai


// 7. Objects Reference Types hote hain

let a = {

    name: "Prince"
};

let b = a;

b.name = "Harsh";

console.log(a.name);

// Harsh

// Kyunki dono same object ko reference kar rahe hain.



// INTERVIEW POINTS

// Objects = Key Value Store

// Dot Notation -> Fixed Key

// Bracket Notation -> Dynamic Key

// for...in -> Object Keys

// Object.keys() -> Keys Array

// Object.values() -> Values Array

// Object.entries() -> Key Value Pairs

// Spread -> Shallow Copy

// JSON Copy -> Deep Copy (limited)

// Optional Chaining -> Safe Access

// Computed Properties -> Dynamic Keys

// Objects are Reference Types



// MINDSET

// Object = Real World Entity

// Destructuring -> Extract Values

// Optional Chaining -> Safe Access

// Spread -> Copy

// Computed Property -> Dynamic Key

// Object.keys / values / entries
// -> Object ko array form me convert karne ke tools