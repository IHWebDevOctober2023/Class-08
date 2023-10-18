console.log("script.js is working");


// SELECTROS
// To select the HTML elements in the dom.


// getElementById

const mainTitle = document.getElementById("main-title");

console.log(mainTitle.innerText);

mainTitle.innerText = "JavaScript is amazing";

// getElementsByClassName

// Here we get an HTML collection
const liElements = document.getElementsByClassName("list-element");

console.log(liElements);

liElements[3].innerText = "I've changed this element"

// HTML collection is not an array, it's an "array like" object
const liElementsArray = Array.from(liElements);

liElementsArray.forEach(element => {
    element.innerText = "Whatever you want"
});

// querySelector selects the first element matching the selector
const secondaryTitle = document.querySelector("h2");
const firstH2 = document.querySelector(".first-h2");

console.log(secondaryTitle);
console.log("This is the variable firstH2",firstH2);

firstH2.innerText = "Whatever I want"

// To select all the elements matching the selector. We get a NodeList
const allTheSecondaryTitles = document.querySelectorAll("h2")

console.log(allTheSecondaryTitles);

allTheSecondaryTitles.forEach(element => {
    element.innerText = "Whatever you want"
    // change styles
    element.style.color = "red"
});

// let's select an element and change it's class

firstH2.className = "purple"

//classList

const paragraph = document.querySelector("#paragraph");
console.log(paragraph.classList);


// innerHTML

const list = document.querySelector("#list")

console.log(list.innerHTML);

// list.innerHTML = "<h1>Hello</h1>"

console.log(document.querySelector("li:first-child")); // this works!!!