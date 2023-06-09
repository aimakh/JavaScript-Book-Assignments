1
/* Write a program that takes two user inputs for first and 
last name using prompt and merge them in a new variable 
titled fullName. Greet the user using his full name */

let firstName = prompt("Enter your first name");
let lastName = prompt("Enter your last name");

let fullName = firstName + " " + lastName;

alert("Hello, " + fullName + " Welcome!");


/* Write a program to take a user input about his favorite 
mobile phone model. Find and display the length of user 
input in your browse */
document.write("<h3>Task-2</h3>" )
let favMobModel = prompt("What is your fav mobile phone model");
document.write("Length of string is " + favMobModel.length );
document.write("<br>")

3./* Write a program to find the index of letter “n” in the word
“Pakistani” and display the result in your browser */
document.write("<h3>Task-3</h3>")
let word= "Pakistani"
let index= word.indexOf('n')
document.write("Index of n is " + index )
document.write("<br>")
"<br>"
4.
/* Write a program to find the last index of letter “l” in the 
word “Hello World” and display the result in your browse */
document.write("<h3>Task-4</h3>")
let word1 = "Hello World";
var lastIndex = word1.lastIndexOf("l");

document.write("The last index of 'l' in the word 'Hello World' is: " + lastIndex);
document.write("<br>")

5.
/* Write a program to find the character at 3rd index in the 
word “Pakistani” and display the result in your browser */
document.write("<h3>Task-5</h3>")
let word2 = "Pakistani"

let index3 = word2.charAt(3);

document.write("The character at the 3rd index in the word 'Pakistani' is: " + index3);
document.write("<br>")

6.
document.write("<h3>Task-6</h3>")
let firstName1 = prompt("Enter your first name");
let lastName1 = prompt("Enter your last name");
let fullName1 = firstName1.concat(" " + lastName1)
document.write("fullname is " + fullName1)
document.write("<br>")

7.
/* write a program to replace the “Hyder” to “Islam” in the 
word “Hyderabad” and display the result in your browser. */
document.write("<h3>Task-7</h3>")
let wordHy = "Hyderabad";
let replace = wordHy.replace("Hyder", "Islam");

document.write("Hyderabad to  " + replace);
document.write("<br>")

// 8.
document.write("<h3>Task-8</h3>")
let string = "Ali and Sami are best friends. They play cricket and football together.";
let newString = string.replace(/and/g, "&");

document.write("replaced to : " + newString);
document.write("<br>")

9.
document.write("<h3>Task-9</h3>")
let string1 = "472";
let num1 = parseInt(string1);

document.write("String is " + string1 + "<br>");
document.write("Number  is " + num1+ "<br>");
document.write("String type: " + typeof string1 + "<br>");
document.write("Number type: " + typeof num1 + "<br>");
document.write("<br>")

10.
document.write("<h3>Task-10</h3>")
let user = prompt("Enter your input:");
let capitalized = user.toUpperCase();

document.write("Original input: " + user + "<br>");
document.write("Uppercase input: " + capitalized + "<br>");
document.write("<br>")

11.
document.write("<h3>Task-11</h3>")
let userInput = prompt("Enter your input:");

let firstLetter = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();

document.write("Original input: " + userInput + "<br>");
document.write("Updated input: " + firstLetter + "<br>");



12.
document.write("<h3>Task-12</h3>" )
let num = 111;
let str = String(num);

document.write("Number: " + num + "<br>");
document.write("Result: " + str + "<br>");

13.
document.write("<h3>Task-13</h3>")


let username = prompt("Enter your username:");
let  isItValid = true;

for (let i = 0; i < username.length; i++) {
  let charCode = username.charCodeAt(i);

  if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
    isItValid = false;
    break;
  }
}

if (isItValid) {
  alert("Username accepted: " + username);
} else {
  alert("Please enter a valid username without special symbol");
}
document.write("<br>")

14.
/* You have an array
A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an 
array. After searching, prompt the user whether the given 
item is found in the list or not.
Note: Perform case insensitive search. Whether the user 
enters cookie, Cookie, COOKIE or coOkIE, program 
should inform about its availability */

document.write("<h3>Task-14</h3>" + "<br>")
let array= ["cookie", "apple", "banana", "brownie", "patties", "pizza"];
let userInput1 = prompt("Enter an item to search:");


let search= false;
for (var i = 0; i < array.length; i++) {
  if (array[i].toLowerCase() === userInput1.toLowerCase()) {
    search = true;
    break;
  }
}

if (search) {
  alert("Item found in the list: " + array[i]);
} else {
  alert("Item not found in the list.");
}

16.
document.write("<h3>task-16</h3>" )
let university = "University of Karachi";
let array1 = university.split(" ");

document.write("Array elements: " + array1);

