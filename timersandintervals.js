//settimeout
// setTimeout() ek function hai jo kisi code ko delay ke baad 1 baar run karta hai.
setTimeout(function(){
    console.log("Hello");
}, 2000);
//2 s 

//text change after 3 sec
let h1 = document.querySelector("h1");

setTimeout(function(){
    h1.textContent = "Changed After 3 Sec";
}, 3000);

//cleartimeout(stop timeout)
let timer = setTimeout(function(){
    console.log("Run");
}, 5000);

clearTimeout(timer);


//set interval clearinterval
// setInterval() same code ko baar-baar repeat karta hai har fixed time ke baad.
//basi csyntax
setInterval(function(){
    console.log("Hello");
}, 1000);
// 📌 Har 1 second me print hoga.
// Example (counter)

let count = 0;

let id = setInterval(function(){
    count++;
    console.log(count);
}, 1000);

// ✅ clearInterval() kya karta hai?

// setInterval ko stop kar deta hai.

clearInterval(id);

// Example (stop at 5)
let count = 0;

let id = setInterval(function(){
    count++;
    console.log(count);

    if(count === 5){
        clearInterval(id);
    }
}, 1000);

//download progres
let count=0; // progress percentage ko track karne ke liye variable (0 se start)
let secondd=5; // total download time (seconds) set kiya (yaha 5 seconds)
let progress=document.querySelector(".progress-bar"); // progress bar element select kiya
let percetntText=document.querySelector("#percentText"); // percent text show karne wala element select kiya

let intv=setInterval(function(){ // interval start kiya jo baar-baar run hoga
    if(count<=99){ // jab tak 99% ya usse kam hai
         count++; // progress 1% badhao
         progress.style.width=`${count}%`; // progress bar ki width update karo
         percetntText.textContent=`${count}%`; // text me current percentage show karo
    } else{ // jab 100% complete ho jaye
        document.querySelector("h2").textContent="DOwnloaded"; // heading me downloaded show karo
        clearInterval(intv); // interval stop kar do
    }

},(secons*100)/1000) // interval ka delay set kiya (yaha variable name galat hai: secons)

//ayto ide alert banner after 3s
let banner = document.querySelector("#alertBanner"); // alert/banner element ko select kiya

banner.style.display = "block"; // banner ko show kar diya

setTimeout(function(){ // 3 seconds delay ke baad code run hoga
    banner.style.display = "none"; // banner ko hide kar diya
}, 3000); // 3000ms = 3 seconds
