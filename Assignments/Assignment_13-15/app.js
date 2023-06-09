1.
var studentNames = [];
2.
var studentNames = new Array([]);
3.
var stringsArray = ["Hello", "Ladies", "How", "are", "you"];
4.
var numbersArray = [1, 2, 3, 4, 5];
5.
var booleanArray = [true, false];
6.
var mixedArray = ["hello", 123, false, "world", false];
7.
var qualificationsArray = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

for (var i = 0; i < qualificationsArray.length; i++) {
    document.write((i + 1) + ") " + qualificationsArray[i] + "<br>");
}

8.
var studentNames = ["Michael", "John", "Tony"];
var scores = [320, 230, 480];
var totalMarks = 500;
var output = "";
for (var i = 0; i < studentNames.length; i++) {
    var percentage = (scores[i] / totalMarks) * 100;


    document.write("Score of " + studentNames[i] + " is " + scores[i] + ". Percentage: " + percentage + "%<br>");
}

9.
document.write("<h2>task-9</h2>")
var array2 = ["red", "pink", "purple"]
document.write("array of colors : " + array2.join(",") + "<br>")
// a.
var addAtBegin = prompt("Enter a color  at the beginning:");
array2.unshift(addAtBegin);
document.write("added at beginning: " + array2.join(",") + "<br>")
// b.
var addAtEnd = prompt("Enter a color at the end");
array2.push(addAtEnd);
document.write("added at the end: " + array2.join(",") + "<br>")

// c.
array2.unshift("black", "green")
document.write("added two at beginning: " + array2.join(",") + "<br>")

//d.
array2.shift();
document.write("deleted first color " + array2.join(",") + "<br>")

//e.
array2.pop();
document.write("deleted last color " + array2.join(",") + "<br>")

//f 
var index = prompt("Enter the index where you want to add a color:");
var color = prompt("Enter the color to add at index " + index + ":");
array2.splice(index, 0, color);
document.write("added color at index " + index + ": " + array2.join(",") + "<br>")

//g.
var indexDel = prompt("Enter the index where you want to delete a color:");
var colorDel = prompt("Enter the color to delete at index " + indexDel + ":");
array2.splice(indexDel, colorDel);
document.write("deleted color from index " + indexDel + ": " + array2.join(",") + "<br>")

10.

var studentsscores = [45, 66, 99, 90, 78];


var sorted = studentsscores.sort(function (a, b) {
    return a - b;
});

console.log(studentsscores)
console.log(sorted);

11.

var cities = ["karachi", "Lahore", "multan", "Islamabad", "peshawar"];


var selectedCities = [];


selectedCities = cities.slice(0, 3);


console.log(selectedCities);

12.

var arr = ["This", "is", "my", "cat"];

var arrjoin = arr.join(" ");

console.log(arrjoin);








