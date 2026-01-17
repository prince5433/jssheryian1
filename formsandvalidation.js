//name 
let nm=document.querySelector("#name"); // #name id wale input ko select karke variable me store kiya
let form=document.querySelector("form"); // form element ko select kiya

form.addEventListener("submit",function(dets){ // form submit hone par event trigger hoga
    dets.preventDefault(); // form submit ka default reload/redirect stop kar diya

   if( nm.value.length<=2){ // agar name ki length 2 ya usse kam hai
    document.querySelector("#hide").style.display="initial"; // error/message wala element show kar diya
   } else{ // agar name valid hai
        document.querySelector("#hide").style.display="none"; // error/message hide kar diya
   }
})

//pattern attribute
// pattern HTML input ka attribute hai jo Regex (regular expression) use karke input ko validate karta hai.
{/* <input type="text" pattern="[0-9]{10}" required> */}

//regex(regule expression)
// Regex = pattern / rule jisse hum text ko match, check, search, replace karte hain.
// /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/ // email k liye


//emial //pasword validator

{/* <form id="form">
  <input id="email" type="text" placeholder="Email" /> <!-- email input -->
  <p id="emailErr" style="display:none;color:red;">Invalid Email</p> <!-- email error message -->

  <input id="pass" type="password" placeholder="Password" /> <!-- password input -->
  <p id="passErr" style="display:none;color:red;">Password must be 8+ chars, 1 uppercase, 1 lowercase, 1 number</p> <!-- password error message -->

  <button type="submit">Submit</button> <!-- submit button -->
</form>

<script>
let form = document.querySelector("#form"); // form select kiya
let email = document.querySelector("#email"); // email input select kiya
let pass = document.querySelector("#pass"); // password input select kiya

let emailErr = document.querySelector("#emailErr"); // email error paragraph select kiya
let passErr = document.querySelector("#passErr"); // password error paragraph select kiya

function isValidEmail(val){ // email validate karne ka function (without regex)
    if(val.includes(" ") || !val.includes("@")) return false; // space hai ya @ nahi hai to invalid

    let parts = val.split("@"); // @ ke basis par split kiya
    if(parts.length !== 2) return false; // agar 2 parts nahi bane to invalid

    let left = parts[0]; // @ se pehle wala part
    let right = parts[1]; // @ ke baad wala part

    if(left.length === 0) return false; // @ se pehle kuch nahi hai to invalid
    if(right.length === 0) return false; // @ ke baad kuch nahi hai to invalid
    if(!right.includes(".")) return false; // domain me dot nahi hai to invalid

    let dotParts = right.split("."); // dot ke basis par split kiya
    if(dotParts.some(p => p.length === 0)) return false; // agar dot ke beech me empty part hai to invalid

    return true; // sab sahi hai to valid email
}

function isValidPassword(val){ // password validate karne ka function (without regex)
    if(val.length < 8) return false; // length 8 se kam hai to invalid

    let hasUpper = false; // uppercase check
    let hasLower = false; // lowercase check
    let hasDigit = false; // digit check

    for(let ch of val){ // password ke har character par loop
        if(ch >= "A" && ch <= "Z") hasUpper = true; // uppercase mila
        else if(ch >= "a" && ch <= "z") hasLower = true; // lowercase mila
        else if(ch >= "0" && ch <= "9") hasDigit = true; // digit mila
    }

    return hasUpper && hasLower && hasDigit; // teeno present hain to valid password
}

form.addEventListener("submit", function(e){ // form submit event listener
    e.preventDefault(); // page reload hone se roka

    let ok = true; // assume valid hai

    if(isValidEmail(email.value)){ // email valid hai?
        emailErr.style.display = "none"; // error hide
    } else {
        emailErr.style.display = "block"; // error show
        ok = false; // form invalid
    }

    if(isValidPassword(pass.value)){ // password valid hai?
        passErr.style.display = "none"; // error hide
    } else {
        passErr.style.display = "block"; // error show
        ok = false; // form invalid
    }

    if(ok){ // agar email + password dono valid hain
        alert("Form Submitted ✅"); // success message
        form.reset(); // inputs clear kar diye
    }
});
</script>
 */}

 //common confusion svalue vs textcontnt
// 1️⃣ .value kaha use hota hai?
// 👉 Form elements ke liye (input, textarea, select)
{/* <input id="inp" value="Prince"> */}

+
{/* // 2️⃣ .textContent kaha use hota hai?
// 👉 Normal elements ke text ke liye (div, p, h1, span)
let h = document.querySelector("#h");
console.log(h.textContent); // Hello */}
