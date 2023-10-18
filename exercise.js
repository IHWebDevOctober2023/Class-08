// CREATE AN HTML FILE WITH THE BOILERPLATE CODE, A CSS and A JS file
// DON'T ADD ANYTHING ELSE TO THE HTML

// Do it with JS only

// Create a heading with the title of your fancy page

// create a UL with 5 elements (with the innertext htat you want)

// create a button that ;t
console.log("js is working");


const heading = document.createElement("h1");

heading.innerText = "Our amazing heading!";

const bodyElement = document.querySelector("body");

bodyElement.prepend(heading);

const listOf5 = document.createElement("ul");

bodyElement.appendChild(listOf5);


const numberOfElements = 5
for (let i = 0; i < numberOfElements; i++) {
    const item = document.createElement("li");
    item.innerText = "This is the first element"
    listOf5.appendChild(item);
}
const listElements = document.querySelectorAll("li");

listElements[2].innerText = "new text"

const btn = document.createElement("button");
btn.innerText = "Click here!";

bodyElement.prepend(btn);
// heading.setAttribute("class", "original-color");
heading.classList.add("original-color");

btn.addEventListener("click", ()=>{
    console.log("You are clicking!!");
    if(heading.classList.contains("original-color")){
        heading.classList.add("new-color");
        heading.classList.remove("original-color");
    }else{
        heading.classList.add("original-color");
        heading.classList.remove("new-color");
    }
})