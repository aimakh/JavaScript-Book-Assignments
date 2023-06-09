// 1.Write a function that displays current date & time in your 
// browser


function CurrentDateTime() {
    let currentDate = new Date();
    let dateTimeString = currentDate.toLocaleString();
    document.getElementById("date").innerHTML = dateTimeString;
  }
  
  CurrentDateTime();


2./* Write a function that takes first & last name and then it 
  greets the user using his full name */


function greetTheUser(firstName, lastName) {
  let fullName = firstName + " " + lastName;
  let greeting = "Hello, " + fullName ;
  return greeting }

let firstName = prompt("Firstname?");
let lastName = prompt("Lastname?");
let greetings = greetTheUser(firstName, lastName);
console.log(greetings);

3. /* Write a function that adds two numbers (input by user) 
and  returns the sum of two numbers.  */

function addNum() {
    let num1 = +prompt("Add num 1")
    let num2 = +prompt("Add num 2")

    let sumThem = num1 + num2
    return sumThem
}
let sum = addNum()
console.log("The sum is " + sum)

4./* Write a function that takes three arguments num1, num2 
& operator & compute the desired operation. Return and 
show the desired result in your browser */

function operation(num1, num2, operator) {
  let result;

  if (operator === '+') {
     result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === '/') {
    result = num1 / num2;
  } else if (operator === '*') {
    result = num1 * num2;
  } else {
    console.log('invalid operator');
    return;
  }

  console.log(result);
}
operation(3 , 4, "*");
operation(3 , 4, "/");
operation(3 , 4, "-");
operation(3 , 4, "+");
operation(3 , 4, "%");

5./* Write a function that squares its argument */
function squareTheNum(num){
  return num * num
}
let result = squareTheNum(8)
console.log(result);


6./* Write a function that computes factorial of a number. */

function computeFactorial(num1){
  let numFactorial = 1
  
  if(num1 ===0 || num1 ===1)
  return 1
  for (let i = 2; i <= num1; i++) {
    numFactorial *= i;
  }

  return numFactorial;
} 
 
console.log(computeFactorial(4));
console.log(computeFactorial(6));
console.log(computeFactorial(5)); 

7./* Write a function that take start and end number as inputs 
& display counting in your browser */

function counting(startNum , endNum){
  if(startNum <= endNum) {
    for(let i = startNum; i <=endNum; i++){
      console.log(i)
    }
  }
    
}
counting(3 , 9)

8./* Write a nested function that computes hypotenuse of a 
right angle triangle. 
Hypotenuse2 = Base2 + Perpendicular2 */

function calculateHypotenuse(base , perpendicular){
  function square(num){
    return num * num
  }
  let squareOfBase = square(base)
  let sqaureOfPerpendicular = square(perpendicular)
  let hypotenuseSquare = sqaureOfPerpendicular + squareOfBase
  let hypotenuse = Math.sqrt(hypotenuseSquare);

  return hypotenuse
}
console.log(calculateHypotenuse(7 , 2));

9. /* write a JavaScript function that checks whether a passed 
string is palindrome or not? */
function checksPalindrome (str){
  let stringToArray= str.split("");
  let arrayReverse = stringToArray.reverse();
  let arrayToString = arrayReverse.join("");

  if(str == arrayToString){
    console.log( "it is palindrome")
  }
  else{
    console.log("it is not a palindrome")
  }

}
let str = prompt("Write something")
checksPalindrome(str);


10./* Write a JavaScript function that accepts a string as a 
parameter and converts the first letter of each word of the 
string in upper case */

function capitalized(str)
{
  var arr= str.split(' ');
  var newarr = [];
    
  for(var i = 0; i < arr.length; i++){
      newarr.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
  }
  return newarr.join(' ');
}
console.log(capitalized("hello beautiful world"));


11. /* Write a JavaScript function that accepts a string as a 
parameter and find the longest word within the string. */

function longest_word(string) {

  let array = string.split(' ');
  let longest = ' ';
  let longestLength = 0;


  for (let i = 0; i < array.length; i++) {

    let longestword = array[i].replace(/[^a-zA-Z0-9]/g, '');


    if (longestword.length > longestLength) {
      longest = longestword;
      longestLength = longestword.length;
    }
  }


  return longest;
}
let phrase="Hello beautiful "
let longest = longest_word(phrase)
console.log(longest)

13./* Write a JavaScript function that accepts two arguments, a 
string and a letter and the function will count the number of 
 */
function countOccurrences(string, letter) {
  let lowercase_String = string.toLowerCase();
  let lowercase_Letter = letter.toLowerCase();
  let countletter = 0;
  for (let i = 0; i < lowercase_String.length; i++) {
    if (lowercase_String[i] === lowercase_Letter) {
      countletter++;
    }
  }
  return countletter;
}
let string = "hhelwlwoieuueuueuuuue"
let letter = "u"
let counts = countOccurrences(string, letter)
console.log(counts);

14.
function calcCircumference(radius) {
  let circumOfCircle = 2 * Math.PI * radius
  console.log("The circumferance of " + circumOfCircle)
}
console.log(calcCircumference(3))

function calcArea(radius) {
  let area = Math.PI * Math.pow(radius, 2);
  console.log("The area of " + area)
}
console.log(calcArea(4));



