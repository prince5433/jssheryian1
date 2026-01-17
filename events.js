// briwser mei page pr moi bhi harkayt kro event raise hojayega
//kuch screen pr ho aur aapko reaction dena ho to us wakt aapko event handle krrn aana chahiye
//evemt matlab hota hai kuch action huwa
//evenetlistener k mtlb hai aapne koi action k reaction diya

//sellect the poaragraph first
let p=document.querySelector("p");
function dblclick(){
    p.style.color="yellow";
}
p.addEventListener("dblclick",dblclick);

//add event listener
//element.addEventListener("event name",function(){

// })

//removeeventlistner
p.removeEventListener("dblclick",dblclick);

//common events
//click
let p=document.querySelector("p");
p.addEventListener("click",function(){
    p.style.color="Red";
})

//input
let inp=document.querySelector("input");
inp.addEventListener("input",function(dets){//function m details accept kr skte hai
if(dets.data!==null){//null backspaace pe aata hia to sue kyo hi print krna matlab data backspoace nhi hai
    console.log(dets.data);//consoel log krke dekhne pe pata chla ki data m values aa rhi hai
}
})


//change event tb chlta hai jab aapka koi input selet ya textarea mein koi change ho jaye
let sel=document.querySelector("select");
//h3 has id device
let device=document.querySelector("#device");
sel.addEventListener("change",function(dets){
    // console.log(dets.target.value);//yad nhi krna hai log krke properties ko dhundh lena hai aaram see
    // device.textContent="DEVICe selected"
    device.textContent=`${dets.target.value} DEvice Selected`;//backticks se dynamic value put in kr skte hai
})

//keys dabane pe whi key aaye
let h1 = document.querySelector("h1"); // h1 element ko select karke variable me store kiya

window.addEventListener("keydown", function(det){ // window par keydown event listener lagaya (keyboard press detect karega)
    if(det.key===" "){ // agar pressed key space hai
        h1.textContent="SPC"; // h1 ke text ko "SPC" set kar do
    } else { // warna koi aur key press hui hai
        h1.textContent=det.key; // h1 me wahi pressed key ka naam/character show karo
    }
});


// 
let btn=document.querySelector("#btn"); // button element ko select kiya
let fileInp=document.querySelector("#fileInp"); // file input element ko select kiya

btn.addEventListener("click",function(){ // button par click event lagaya
fileInp.click(); // button click hone par file input ko programmatically open kar diya
});

fileInp.addEventListener("change",function(dets){ // file input me file select/change hone par event chalega
    const file=dets.target.files[0]; // selected file ka first file nikala
    if(file){ // agar file selected hai
        btn.textContent=file.name; // button ke text me file ka name show kar diya
    }
});


//submit
//form hai submit krne opr card ban jaye form ko submit hone pr rokna hai
let form=document.querySelector("form"); // form element select kiya
let inputs=document.querySelectorAll("input"); // saare input elements select kiye (NodeList)
let main=document.querySelector("#main"); // main container select kiya jaha card add hoga

form.addEventListener("submit",function(dets){ // form submit hone par event chalega
    dets.preventDefault(); // page reload hone se roka
    
    let card=document.createElement("div"); // naya div create kiya card ke liye
    card.classList.add("card"); // card class add ki

    let profile=document.createElement("div"); // profile section ke liye div banaya
    profile.classList.add("profile"); // profile class add ki

    let img=document.createElement("img"); // image element create kiya
    img.setAttribute("src",inputs[0].value) // first input se image url lekar src set kiya

    let h3=document.createElement("h3"); // name/title ke liye h3 create kiya
    h3.textContent="inputs[1].value"; // second input ki value show karni thi (but yaha string ban gayi hai)

    let h5=document.createElement("h5"); // subtitle/role ke liye h5 create kiya
    h5.textContent-"inputs[2].value"; // third input ki value set karni thi (but yaha assignment galat hai)

    let p=document.createElement("p"); // description ke liye paragraph create kiya
    p.textContent="inputs[3].value"; // fourth input ki value show karni thi (but yaha string ban gayi hai)

    profile.appendChild(img); // profile div ke andar img add kiya
    card.appendChild(profile); // card ke andar profile add kiya

    card.appendChild(h3); // card ke andar h3 add kiya
    card.appendChild(h5); // card ke andar h5 add kiya
    card.appendChild(p); // card ke andar p add kiya
    main.appendChild(card); // main container me final card append kiya

    inputs.forEach(function(inp){ // saare inputs par loop chalaya
        if(inp.type!="submit"){ // submit button ko chhod ke
            inp.value=""; // baaki inputs ko empty kar diya
        }
    })
})


//mouseover and mouseout
let abcd=document.querySelector("#abcd"); // #abcd id wale element ko select karke variable me store kiya

abcd.addEventListener("mouseover",function(val){ // mouse element ke upar aate hi event trigger hoga
    abcd.style.backgroundColor="Yellow"; // hover par background color Yellow kar diya
})

abcd.addEventListener("mouseout",function(val){ // mouse element se bahar jaate hi event trigger hoga
    abcd.style.backgroundColor="Red"; // mouse out hone par background color Red kar diya
})

//mousemove
let abcd=document.querySelector("#abcd"); // #abcd id wale element ko select karke variable me store kiya

window.addEventListener("mousemove",function(dets){ // mouse move hote hi event trigger hoga
// console.log(dets.clientX,dets,clientY); // mouse ka X aur Y position console karne ke liye (yaha clientY me typo hai)
abcd.style.top=dets.clientY+"px"; // element ko mouse ke Y position par move kar diya
abcd.style.left=dets.clientX+"px"; // element ko mouse ke X position par move kar diya
})

//keyup
// 👉 jab tum keyboard ki key press karke chhod dete ho (release) tab event trigger hota hai.
window.addEventListener("keyup", function(e){
    console.log("Key released:", e.key);
});


//event object //target type prevent default
// e.target = jis element par actually event hua
// e.type = kaunsa event trigger hua (click, keydown, submit etc.)
// ✅ preventDefault()
// Default browser action ko rok deta hai.
let abcd=document.querySelector("#abcd");
abcd.addEventListener("click",function(dets){
console.log();
})

//event bubbling 
// Jab tum kisi child element par event karte ho (click etc.), to event upar parent → grandparent → document tak propagate hota hai.
// Isko Event Bubbling bolte hain.
//jispe event aayega agr uspr listener nahi huwa to hamara event uske parent pr listendr dhudnehga aur asisa krte krte upr ki trf move krega
<div id="parent">
  <button id="child">Click</button>
</div>

let parent = document.querySelector("#parent");
let child = document.querySelector("#child");

parent.addEventListener("click", function () {
  console.log("Parent clicked");
});

child.addEventListener("click", function () {
  console.log("Child clicked");
});
// o/p
// Child clicked
// Parent clicked
// 👉 Pehle child ka event, phir parent ka (bubble up).


//event captuirng
// Event top (window/document) se start hoke pehle parent → child tak aata hai.
// Matlab bubbling ka reverse.
//event captuirng
// ChatGPT said:
// ✅ Event Capturing (Event Trickling) kya hota hai?
// Event top (window/document) se start hoke pehle parent → child tak aata hai.
// Matlab bubbling ka reverse.

// 📌 Flow:
// Window → Document → Parent → Child

//jab bhi aap click krte ho ya koi bhi event raise krte ho to appak ajo event hai wo do pjhases mein chalta hain
// phase 1: event top level elements se neecheki traf aayega
// phase2: event raies element s parent ki traf jayega
// aur pahle phase 1 hoti haiai
//humesha phase 1 hi phle hoti hai pr wo bydefault off rhti hai agar hm use on krde to phle sphase 1 ka naser milega
//pahle capture phae chlta hia phir bubbling phase chlta hai
//onr krne k liye last m true mark kr do 
element.addEventListener("click", handler, true);

//event delgation
// Parent element pe ek hi event listener lagake, uske child elements ke events handle karna = Event Delegation.
<ul id="list">
  <li>Apple</li>
  <li>Mango</li>
  <li>Banana</li>
</ul>

let list = document.querySelector("#list");

list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        console.log("Clicked:", e.target.innerText);
    }
});
// Ab har li pe separate listener lagane ki zarurat nahi.

//live character counter 
// input h1 span
let inp=document.querySelector("input"); // input element ko select karke variable me store kiya

inp.addEventListener("input",function(){ // jab bhi input ke andar value change hogi (type/paste/delete) event trigger hoga
    span.textContent=inp.value.length; // input ki current value ki length ko span ke text me show kar diya
})
