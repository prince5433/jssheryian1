//scope -> hai ki aap apne crated variables and functions kaha tk use kr skte ho
// Scope = variable/function ko code me kahan access kar sakte ho (visibility).
function abcd(){
    var a=12;
}
console.log(a);

//fucntional scope global scope and block scope
//functional scope Jo variable function ke andar banta hai, wo bahar access nahi hota.
// Jo variable function ke bahar banta hai, wo har jagah access hota hai.  global scope
// { } ke andar jo let/const banta hai wo sirf block ke andar hi chalega.  block scope

//agr aapka code kisi { } ke andr nhi hai to aapka code global hai


//execution context
// js sabse pahle jaise hi aappa functio dekhta hai sabse pahle js banata hai eexecution context,ye ek process hai jo ki do different phases me chalta hai
//ek ka nam hai memory phase and dusre k nam hai execution phase

function abcd(){
    var a=12;
    let b=13;
    let c=14;
}

//memory craetion phase=> Is phase me JS sirf memory allocate karta hai.

// 2️⃣ Execution Phase
// Is phase me JS line by line code run karta hai.


//lexical scope vs dynamic scope
//js =>lexical scoping hoti hia

//lexical scoping means ki aap kaha pr physically avaialible ho ye puri treeeke se depend krta hai ki aap kya acccess kr paoge

function abcd(){
    let a=12;//pure abcd m khi bhi access ho skat hai
    function defg(){
        console.log(a);//a yahah p bhi access ho jayega
    }
}

//dynamic scoping =>kaha se call kr rhe ho uspe depend krega ki kya value milegi
let a=12;

function abcd(){
console.log(a);
}

function defg(){
    let a=13;
    abcd();//yaha p 13 nhi aayega balki ye dekhege ki abcd kha avaialable hai and uske corepsofning global a ki value ko print krdega
}
defg();//agr dynamic scope hota to 13 output aata na ki 12



//closure def and how var are preserved
//closure hote hai functions jo ki kisi parent function ke andr ho ur andr wlaa function return ho rhaho
//and returning function use kre parent function k koi variable

function abcd(){
    let a=12;
    return function(){
        console.log(a);
    }
}
let fnc=abcd();
fnc();//yaha a aana hi nahi chaahiye tha kyoki a to khtm hi chuka tha


//ye sch hai ki fnction k khtm hone p aapka function and uske variables khmt ho jate hai 
//prjab bhi closure banta hai to apka function and uske varables k ek backlink banaya jat hi nd uska nam hota hai [[environment]]


//faayde nuksan
//faydaa var ko private kr skte ho
//global pollution rokta hai


//private counter
function countForme(){
    let c=0;
    return function(){
        c++;
        console.log(c);
    }
}
let fnc=countForme();//kuch nhi hoga
fnc()//ab value 1 huwi hogi 

//encapsulation
function clickLimiter(){
    let click=0;
    return function(){
       if(click<5){
        click++;
        console.log("clicked":`${click} times`)
       }
        else{
            console.log("limit exceeded try after some time");
            
        }
    }
}

let fnc=clickLimiter();
fnc();//pahle br chlane p kuch nhi hot hi dusri br chlne p hota hai kuch

//project toaster only js
//github se dekh lenge