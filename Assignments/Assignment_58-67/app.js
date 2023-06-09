// Q1

// 1 Get element of id "main-content" and assign them to a variable.

let main = document.getElementById("main-content");

//2 Display all child elements of "main-content" element

console.log(main.children);
// 3 Get all elements of class "render" and show their innerHTML in the browser.
let render = document.getElementsByClassName("render");
for (var i = 0; i < render.length; i++) {
    console.log(render[i].innerHTML);
}

// 4 Fill input value whose element id is "first-name" using JavaScript.
let  input = document.getElementById("first-name");
input.value = "Umer";

// 5 Repeat part iv for id "last-name" and "email".

let  lastinput = document.getElementById("last-name");
let emailInput = document.getElementById("email");
lastinput.value = "khan";
emailInput.value = "abc@example.com";

// Q2
//1 What is the node type of the element having id "form-content"?
let formcontent = document.getElementById("form-content")
console.log(formcontent.nodeType)
//2 Show the node type of the element having id "lastName" and its child node.
let lastName = document.getElementById("lastName");
console.log(lastName.nodeType);
console.log(lastName.firstChild.nodeType);
// 3 Update the child node of the element having id "lastName".
lastNameElement.firstChild.nodeValue = "New Last Name: tailor";

// 4 Get the first and last child of id "main-content".

let mainContent = document.getElementById("main-content");
console.log(mainContent.firstChild);
console.log(mainContent.lastChild);

// 5 Get the next and previous siblings of id "lastName".

let siblingNext = lastName.nextSibling;
let siblingPrevious = lastNameElement.previousSibling;
console.log(siblingNext);
console.log(siblingPrevious);

// 6 Get the parent node and node type of the element having id "email"
var email = document.getElementById("email");

console.log(email.parentNode);
console.log(email.nodeType);