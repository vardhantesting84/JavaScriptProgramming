//If-Else
let temperature = 25; // degrees Celsius

if (temperature > 30) {
    console.log("It's a hot day!");
} else if (temperature >= 20) {
    console.log("It's a pleasant day.");
} else {
    console.log("It's a bit chilly.");
}
// Output: It's a pleasant day.

//Switch - Example 1
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName); // "Wednesday"

//Switch - Example 2
let userRole = "editor";

switch (userRole) {
  case "admin":
    console.log("Access: Full control");
    break;
  case "editor":
    console.log("Access: Can edit content");
    break;
  case "viewer":
    console.log("Access: Read-only");
    break;
  default:
    console.log("Access: No permissions");
}

//For Loop
for (let i = 0; i < 5; i++) {
    console.log("Loop iteration: " + i);
}
// Output:
// Loop iteration: 0
// Loop iteration: 1
// Loop iteration: 2
// Loop iteration: 3
// Loop iteration: 4

//While Loop
let count = 0;
while (count < 3) {
    console.log("Count is: " + count);
    count++;
}
// Output:
// Count is: 0
// Count is: 1
// Count is: 2

//Do-While Loop
let i = 0;
do {
    console.log("Value of i: " + i);
    i++;
} while (i < 0); // Condition is false, but loop runs once
// Output: Value of i: 0

//ForEach() method
const numbers = [10, 20, 30];
numbers.forEach(function(number, index) {
    console.log(`Element at index ${index}: ${number}`);
});
// Output:
// Element at index 0: 10
// Element at index 1: 20
// Element at index 2: 30

//for of loop - example 1
const colors = ["red", "green", "blue"];

for (let color of colors) {
    console.log(color);
}
// Output:
// red
// green
// blue

//for of loop - example 2
const greeting = "Hello";
for (let char of greeting) {
    console.log(char);
}
// Output:
// H
// e
// l
// l
// o

//for in loop
const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
// Output:
// name: Alice
// age: 30
// city: New York

//Break
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Stop the loop when i is 5
    }
    console.log(i);
}
// Output: 0, 1, 2, 3, 4

//Continue
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // Skip printing 2
    }
    console.log(i);
}
// Output: 0, 1, 3, 4

//Return
function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return "Error: Both arguments must be numbers."; // Exits function
    }
    return a + b; // Returns the sum
}

console.log(add(5, 3));    // Output: 8
console.log(add(5, "abc")); // Output: Error: Both arguments must be numbers.


