// real time search filter

let users = [ // users ka data array (name, pic, bio)
  {
    name: "amisha rathore",
    pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
    bio: "silent chaos in a loud world 🌑🖤 | not for everyone",
  },
  {
    name: "amita mehta",
    pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
    bio: "main character energy 🎬 | coffee > everything ☕✨",
  },
  {
    name: "isha oberoi",
    pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg",
    bio: "walking through dreams in doc martens 💭🖤 | late night thinker",
  },
  {
    name: "Ojin Oklawa",
    pic: "https://i.pinimg.com/736x/01/be/94/01be94b0b5bf03a50b5d6c4bfec78063.jpg",
    bio: "too glam to give a damn 💅 | filter free soul",
  },
  {
    name: "diya bansal",
    pic: "https://i.pinimg.com/736x/74/b0/67/74b067e6c5ece09d99f68c42c5f6754e.jpg",
    bio: "a little chaos, a lot of art 🎨✨ | just vibes",
  },
  {
    name: "tanay rawat",
    pic: "https://i.pinimg.com/736x/9b/78/b9/9b78b95425278ee37e88869b8c5fb2c6.jpg",
    bio: "don’t text, just vibe 🪩 | soft heart, sharp mind",
  },
  {
    name: "mohit chhabra",
    pic: "https://i.pinimg.com/736x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg",
    bio: "aesthetic overload 📸🕊️ | living in lowercase",
  },
];

function showUsers(arr) { // given array ke users ko UI me cards ke form me show karega
  arr.forEach(function (user) { // har user ke liye ek card banega

    // Create outer card div
    const card = document.createElement("div"); // card container div create kiya
    card.classList.add("card"); // card class add ki

    // Create image
    const img = document.createElement("img"); // image element create kiya
    img.src = user.pic; // user ki pic url set ki
    img.classList.add("bg-img"); // bg-img class add ki

    // Create blurred-layer div
    const blurredLayer = document.createElement("div"); // blurred background layer div banaya
    blurredLayer.style.backgroundImage = `url(${user.pic})`; // background image same user pic rakhi
    blurredLayer.classList.add("blurred-layer"); // blurred-layer class add ki

    // Create content div
    const content = document.createElement("div"); // text content ke liye div banaya
    content.classList.add("content"); // content class add ki

    // Create h3 and paragraph
    const heading = document.createElement("h3"); // user name ke liye heading
    heading.textContent = user.name; // name set kiya

    const para = document.createElement("p"); // user bio ke liye paragraph
    para.textContent = user.bio; // bio set ki

    // Append heading and paragraph to content
    content.appendChild(heading); // content me heading add ki
    content.appendChild(para); // content me paragraph add ki

    // Append all to card
    card.appendChild(img); // card me image add ki
    card.appendChild(blurredLayer); // card me blurred layer add ki
    card.appendChild(content); // card me content add ki

    // Finally, append card to the body or any container
    document.querySelector(".cards").appendChild(card); // cards container me final card add kiya
  });
}

showUsers(users); // page load hote hi saare users show kar diye

let inp = document.querySelector(".inp"); // search input field select kiya
inp.addEventListener("input", function () { // jaise jaise user type karega real-time filter hoga

  let newUsers = users.filter((user) => { // users array ko filter karke matching users nikaale
    return user.name.startsWith(inp.value); // name input value se start ho raha hai to include karo
  });

  document.querySelector(".cards").innerHTML = ""; // purane cards remove kar diye
  showUsers(newUsers); // filtered users ko dubara show kar diya
});
