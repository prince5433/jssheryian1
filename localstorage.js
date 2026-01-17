//localstoraage session storage and cookies
//localstorage aapke bowesr k abdr data stoore krna jo ki browser bad hne pr bhi delete nhi hoga
// 👉 Data browser me permanently save hota hai (jab tak manually delete na karo)

//sessionstorage ye aapka data temporily store krta hai matlab ki tab band huwa data gaya
// 👉 Data sirf tab (session) tak rahega
// Tab close → data delete

//cookies ye bhi data store krta hai aur aapka data browwser ke cookie nam ki property mein save hota hai and ye cokie conecpet ;ightdata ke liye hota hai
// 👉 Data small hota hai, server ke saath send hota hai har request me

//loclatsoregae
//store kaise => setItem
//data fetch kaise kre =>  getItem
//remove kaise kre  => removeItem
//update kaise kre => setItem hi update krta hai

localStorage.setItem("name","harsh"); // localStorage me "name" key ke andar "harsh" value store ki
//setitem agr properrty nhi hai to bana deta hai agr hai to overwtite kr deta hai used for updation

let val=localStorage.getItem("name"); // localStorage se "name" key ki value read/return karta hai

localStorage.removeItem("name"); // localStorage se "name" key aur uski value delete kar deta hai

localStorage.setItem("name","harshita");//nahi hogti to bana dega aur hogi to overwrite kr dega

localStorage.clear(); // localStorage ka saara data (all keys/values) delete kar deta hai


//sessionstorage
//same things used for sessionstotrage
sessionStorage.setItem("name","harsh"); //nahi hogti to bana dega aur hogi to overwrite kr dega

//cookies
//browser mein chhota data store krne k liye cookies k istemal hota hai
//nearly 4kb 
//localstorage and sessionstorage me 5 mb tk k data store kr skte hai

//cookies me jo bhhi data store kroge wo data page reload pr automatically server pr jayega
document.cookie = "email=harsh@test.com"; // browser me "email" naam ka cookie set kiya jisme value "harsh@test.com" store hogi
document.cookie = "age=26";

localStorage.setItem("friend",["akash","sumit","amit"]);//string k alawa aur koi ceheej acche se save nhi hogi localstorage me kyoki sirf string save krta hai
//for this we srudy JSON.stringify ye kisi bhi cheej ko string m convert kr deta hai
//now ab
localStorage.setItem("friend",JSON.stringify(["akash","sumit","amit"]));
//and to use this localstroage se data nikalte hai to hame string milta hai aur use apne natural form m lane k liye JSON.parse use krte hai
let fr=JSON.parse(localStorage.getItem("name"));//ab hame actual array milegha;
console.log(fr);


//practise questions theme preference
//laptoopp k dark mode y lightmode k hisab s chlana

function setDarkOrLight() { // system theme ke hisaab se body me class set karega
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) { // agar system dark mode hai
        document.body.classList.add("dark"); // dark class add
        document.body.classList.remove("light"); // light class remove
    } else { // agar system light mode hai
        document.body.classList.add("light"); // light class add
        document.body.classList.remove("dark"); // dark class remove
    }
}

if (localStorage.getItem("theme")) { // agar user ne pehle se theme choose ki hui hai
    document.body.classList.add(localStorage.getItem("theme")); // saved theme class add
} else { // warna system preference follow karo
    setDarkOrLight(); // system theme apply
}

//toggle
let btn = document.querySelector("button"); // toggle button select kiya

btn.addEventListener("click", function () { // button click par theme toggle hoga
    if (document.body.classList.contains("dark")) { // agar currently dark hai
        document.body.classList.remove("dark"); // dark remove
        document.body.classList.add("light"); // light add
        localStorage.setItem("theme", "light"); // localStorage me save
    } else { // agar currently light hai
        document.body.classList.remove("light"); // light remove
        document.body.classList.add("dark"); // dark add
        localStorage.setItem("theme", "dark"); // localStorage me save
    }
});

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () { // system theme change detect
    if (!localStorage.getItem("theme")) { // agar user ne manual theme set nahi ki
        setDarkOrLight(); // system ke according update karo
    }
});


//common confusion 
//local storage m sirf strings kyo kam krti hai
//ans =>localStorage me sirf strings isliye store hoti hain kyunki browser ka storage system key-value text format me bana hai.

// Cookie is a small amount of data that a server sends to the browser, and the browser stores it.
// Later, whenever the browser makes a request to the same website, it automatically sends that cookie back to the server, so the server can recognize the user/session.