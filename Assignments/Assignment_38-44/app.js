1.
/* Write a custom function power ( a, b ), to calculate the value of 
a raised to b */
function power(a, b) {
    let pow = Math.pow(a, b)
    return pow;
}
console.log(power(2, 5));

2
// Any year is entered through the keyboard. Write a function to 
// determine whether the year is a leap year or not

function leapYear(year) {
    switch (true) {
        case year % 400 === 0:
            return true;
        case year % 100 === 0:
            return false;
        case year % 4 === 0:
            return true;
        default:
            return false;
    }
}



console.log(leapYear(2022));

3.
/* If the lengths of the sides of a triangle are denoted by a, b, and 
c, then area of triangle is given by
area = S(S − a)(S − b)(S − c)
where, S = ( a + b + c ) / 2 */

function calculatearea(a, b, c) {
    let s = (a + b + c) / 2
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c))
    return area
}
console.log(calculatearea(2, 5, 6))

4.
/* Write a function that receives marks received by a student in 3 
subjects and returns the average and percentage of these
marks. there should be 3 functions one is the mainFunction 
and other are for average and percentage. Call those functions 
from mainFunction and display result in mainFunction. */

function calculateAverage(marksofsub) {
    let sumofSub = marksofsub.reduce((total, mark) => total + mark, 0);
    const averageMarks = sumofSub / marksofsub.length;
    return averageMarks;
}
function calculatePercentage(marksofsub) {
    let totalMarks = marksofsub.length * 100;
    let sum = marksofsub.reduce((total, mark) => total + mark, 0);
    let percentage = (sum / totalMarks) * 100;
    return percentage;
}
function mainFunction(sub1, sub2, sub3) {
    let marksofsub = [sub1, sub2, sub3];
    let average = calculateAverage(marksofsub);
    let percentage = calculatePercentage(marksofsub);
    return average
    return percentage
}
console.log(mainFunction(83, 78, 69))

5.
/* You have learned the function indexOf. Code your own custom 
function that will perform the same functionality. You can code 
for single character as of now.
 */

function searchIndexOf(str, indexOf) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === indexOf) {
            return i;
        }
    }
}
console.log(searchIndexOf("Here I am Aima khan", "I"))

6.
function removetheVowels(sentence) {
    let removevowelsFromSen = sentence.replace(/[aeiou]/gi, '');
    return removevowelsFromSen
}


console.log(removetheVowels("She is a nice girl"));

7.
function successive_vowels(sentence) {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < sentence.length - 1; i++) {
        let senlowercase = sentence[i].toLowerCase();
        let added = sentence[i + 1].toLowerCase();
        switch (senlowercase) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                switch (added) {
                    case 'a':
                    case 'e':
                    case 'i':
                    case 'o':
                    case 'u':
                        count++;
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    }
    return count;
}
console.log(successive_vowels("Pleases read this application and give me gratuity"));

8.
/* The distance between two cities (in km.) is input through the 
keyboard. Write four functions to convert and print this 
distance in meters, feet, inches and centimeters */

function covertDistanceToMeters(distanceInKm) {
    let meters = distanceInKm * 1000;
    return meters
}
function convertDistanceToFeet(distanceInKm) {
    let feet = distanceInKm * 3280.84
    return feet
}
function convertDistanceToInches(distanceInKm) {
    let inches = distanceInKm * 39370.1
    return inches
}
function convertDistanceTocm(distanceInKm) {
    let cm = distanceInKm * 100000
    return cm
}
console.log(covertDistanceToMeters(25) + " m")
console.log(convertDistanceToFeet(25) + " ft")
console.log(convertDistanceToInches(25) + " inch")
console.log(convertDistanceTocm(25) + " cm")

9./* Write a program to calculate overtime pay of employees. 
Overtime is paid at the rate of Rs. 12.00 per hour for every hour 
worked above 40 hours. Assume that employees do not work 
for fractional part of an hour. */

function calculateOvertime(morehours) {
    let overtimeRate = 12.00
    let hours = 40
    if (morehours > hours) {
        let overtimeHours = morehours - hours
        let overtimePay = overtimeHours * overtimeRate
        return overtimePay
    }
    else {
        return 0;
    }
}
console.log(calculateOvertime(35))
console.log(calculateOvertime(45))

10.
/* A cashier has currency notes of denominations 10, 50 and 
100. If the amount to be withdrawn is input through the 
keyboard in hundreds, find the total number of currency notes 
of each denomination the cashier will have to give to the 
withdrawer. */

let notes = +prompt("Enter amount to be withdrawn in hundreds")
let amountIn100 = notes
let amountLeft = notes % 100
let notesOf50 = Math.floor(amountLeft / 50)
amountLeft %= 50
let notesOf10 = Math.floor(amountLeft / 10)
console.log("The number of 100 rupees notes " + amountIn100)
console.log("The number of 50 rupees notes " + notesOf50)
console.log("The number of 10 rupees notes " + notesOf10)