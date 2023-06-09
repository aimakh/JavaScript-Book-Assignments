1.
var Userinput = prompt("Enter a character:");

var charCodes = Userinput.charCodeAt(0);

if (charCodes >= 48 && charCodes <= 57) {
  console.log(Userinput + " is a number.");
} else if (charCodes >= 97 && charCodes <= 122) {
  console.log(Userinput + " is a lowercase letter.");
} else if (charCodes >= 65 && charCodes <= 90) {
  console.log(Userinput + " is an uppercase letter.");
} else {
  console.log("Invalid input.");
}

2.
var num1 = +(prompt("Enter the number:"));
var num2 = +(prompt("Enter another number:"));

if (num1 > num2) {
  console.log(num1 + " is larger ");
} else if (num2 > num1) {
  console.log(num2 + " is larger ");
} else {
  console.log("Both numbers are equal.");
}

3.
var num = +(prompt("Enter a number:"));

if (num > 0) {
  console.log("The number is positive.");
} else if (num < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

4.
let character = prompt("Enter a character:");

let lowercaseCharacter = character.toLowerCase();

if (lowercaseCharacter === "a" || lowercaseCharacter === "e" || lowercaseCharacter === "i" || lowercaseCharacter === "o" || lowercaseCharacter === "u") {
  console.log(true);
} else {
  console.log(false);
}

5.
var originalPassword = "yougood";

var userPassword =prompt("Enter your password:");

if (userPassword === "") {
  console.log("Please enter your password.");
} else if (userPassword === originalPassword) {
  console.log("Correct! The password you entered matches the original password.");
} else {
  console.log("Incorrect password.");
}

6.
// This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";}
else{
greeting = "Good evening";
}
console.log(greeting)

7.
var time = parseInt(prompt("Enter the time in 24-hour clock format (e.g., 1900): "));
if (time >= 0000 && time< 1200) {
    console.log("Good Morning")
    
}
else if (time >= 1200 && time < 1700){
    console.log("Good afternoon")
}
else if (time >= 1700 && time < 2100){
    console.log("Good evening")
}
else if (time >= 2100 && time < 2359){
    console.log("Good night")
}
else{
    console.log("hey")
}


