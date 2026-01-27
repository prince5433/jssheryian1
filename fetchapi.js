// fetch api get post basics'
// Fetch API Basics (GET + POST)
// ✅ 1) GET Request (data lena)
// Using .then()
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())//pahle json banana hotaa hai becaause its unreadable json se wo readable bn jata hai
  .then(data => console.log(data))
  .catch(err => console.log("Error:", err));

//   Using async/await
async function getUsers(){
  try{
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();
    console.log(data);
  } catch(err){
    console.log("Error:", err);
  }
}

getUsers();


// 📌 GET me normally method likhna zaroori nahi hota, default GET hota hai.

// ✅ 2) POST Request (data bhejna / create)
async function createPost(){
  try{
    let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: "Hello",
        body: "This is a post",
        userId: 1
      })
    });

    let data = await res.json();
    console.log(data);
  } catch(err){
    console.log("Error:", err);
  }
}

createPost();


// 📌 POST me 3 cheeze important:

method: "POST"

headers: Content-Type

body: JSON.stringify(data)

//http status codde
// 2xx = OK

// 4xx = Tumhari galti

// 5xx = Server ki galti


// /form submissin via fetch
<form id="form">
  <input id="name" type="text" placeholder="Name" /> <!-- name input -->
  <input id="email" type="text" placeholder="Email" /> <!-- email input -->
  <button type="submit">Submit</button> <!-- submit button -->
</form>

<script>
let form = document.querySelector("#form"); // form ko select kiya

form.addEventListener("submit", async function(e){ // form submit event listener lagaya (async because fetch use ho raha hai)
  e.preventDefault(); // page reload hone se roka

  let name = document.querySelector("#name").value; // name input ki value li
  let email = document.querySelector("#email").value; // email input ki value li

  try{ // try block me risky code (API call) likhte hain
    let res = await fetch("https://jsonplaceholder.typicode.com/posts", { // fetch se POST request bheji
      method: "POST", // request method POST
      headers: { // request headers (batate hain body JSON me hai)
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email }) // JS object ko JSON string me convert karke send kiya
    });

    let data = await res.json(); // response ko JSON me convert kiya
    console.log("Submitted:", data); // console me submitted data print kiya

    form.reset(); // submit hone ke baad inputs clear kar diye
  } catch(err){ // agar network/API me error aaya
    console.log("Error:", err); // error print kar diya
  }
});
</script>








