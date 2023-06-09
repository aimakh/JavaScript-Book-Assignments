1
var age = 19;
alert("I am " + age + " Years old.");

2 

var visit = localStorage.getItem('visit');

if (visit === null) {
  visit = 0;
}
visit++;
localStorage.setItem('visits', visit);
document.write("You have visited this site " + visit + " times.");

3. /* Declare a variable called birthYear & assign to it your
 birth year. Show the following message in your browser:
 Declare the birthYear variable and assign it your birth year */


var birthYear = 2006;
document.write("My birth year is " + birthYear + ".");
document.write("data type of my variable is " + typeOf + " birthYear")

4. /* A visitor visits an online clothing store
 www.xyzClothing.com . Write a script to store in variables
 the following information: */

// a. Visitor’s name
var visitorname = prompt("what is your name");

// b. Product title
var productTitle = prompt("product name");

// c. Quantity i.e. how many products a visitor wants to
// order
var quantityOfProduct = +prompt("Enter quantity of the product");

// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
document.write(visitorname + " ordered " + quantityOfProduct + productTitle + " on XYZ Clothing store");