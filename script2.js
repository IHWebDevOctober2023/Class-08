// EVENT LISTENERS listens to user interactions
paragraph.addEventListener("click", () => {
    console.log(paragraph.classList)
    if (paragraph.classList.contains("purple")) {
        paragraph.classList.add("light-blue");
        paragraph.classList.remove("purple");
    } else {
        paragraph.classList.remove("light-blue");
        paragraph.classList.add("purple");
    }

})

// Get the value of the attribute
console.log(paragraph.getAttribute("title"));

paragraph.removeAttribute("title");
paragraph.setAttribute("ditto-attribute", "54545434")

// CREATE NEW ELEMENT

const heading1 = document.createElement("h1");
heading1.innerText = "The new heading"

// add an element at the end of the body
const body = document.getElementsByTagName("body")

// the body is an HTMLCollection
body[0].appendChild(heading1);

console.log(heading1.parentNode);

const firstLi = document.getElementById("first-li-element");
console.log(firstLi.parentNode);



