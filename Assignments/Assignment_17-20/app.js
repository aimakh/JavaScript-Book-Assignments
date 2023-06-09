1.
let array = [[]];
array.push([])

2.
let matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

3.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

4.
let Number = +(prompt("Enter the number to show its multiplication table:"));
let Length = +(prompt("Enter the length of the multiplication table:"));

console.log("Multiplication Table of " + Number + ":");

for (let i = 1; i <= Length; i++) {
    let result = Number * i;
    console.log(Number + " x " + i + " = " + result);
}

5.
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

console.log("Items:");

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

6.

document.write("Counting:" + "<br>");
for (var i = 1; i <= 15; i++) {
    document.write(i + ", ");
}
document.write("<br>");


document.write("Reverse counting:" + "<br>");
for (var i = 10; i >= 1; i--) {
    document.write(i + ", ");
}
document.write("<br>");


document.write("Even: " + "<br>");
for (var i = 0; i <= 20; i += 2) {
    document.write(i + ", ");
}
document.write("<br>");


document.write("Odd: " + "<br>");
for (var i = 1; i <= 19; i += 2) {
    document.write(i + ", ");
}

document.write("<br>");


document.write("Series: " + "<br>");
for (var i = 1; i <= 10; i++) {
    document.write(i * 2 + "k, ");
}



7.
let array1 = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput1 = prompt("Welcome to ABC bakery what do you want to order?");
let iffound = false;

for (var i = 0; i < array1.length; i++) {
    if (array1[i] === userInput1) {
        iffound = true;
        break;
    }
}

if (iffound) {
    console.log(userInput1 + " is available");
} else {
    console.log(userInput1 + " not available");
}

8.

let A = [24, 53, 78, 91, 12];
let largestNumber = A[0]; 

for (var i = 1; i < A.length; i++) {
  if (A[i] > largestNumber) {
    largestNumber = A[i];
  }
}

console.log("The largest number in this array is: " + largestNumber);


9.
let A1 = [24, 53, 78, 91, 12];
let smallestNumber1 = A1[0]; 

for (var i = 1; i < A1.length; i++) {
  if (A1[i] < smallestNumber1) {
    smallestNumber1 = A[i];
  }
}

console.log("The smallest number in this array is: " + smallestNumber1 );

10.


for (var i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log("Multiples of 5 ranging from 1 to 100: "+ i);
  }
}

