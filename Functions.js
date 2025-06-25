//creating a function or declaring a function
// function printMessage()
// {
//     console.log("Sachin Tendulkar")
// }

// //function calling/invoking
// printMessage()


// function printFullName(fname, lname)
// {
//     console.log(fname + " " + lname)
// }

// printFullName("Sachin","Tendulkar","Testing");
// printFullName("Virat","Kohli");


// function printFullName(fname, lname)
// {
//     return fname + " " + lname
// }
// let returnedValue = printFullName("Sachin","Tendulkar")
// console.log(returnedValue)

// returnedValue = printFullName("Virat","Kohli")
// console.log(returnedValue)  

//3 function to add, sub, mul 

// let value  = "23";
// let variable1 = function (fname, lname)
// {
//     return fname + " " + lname
// }

// let returnedvalue = variable1("Sachin","Tendulkar")
// console.log(returnedvalue)

let variable1 = (fname, lname) =>
{
    return fname + " " + lname
}

let returnedvalue = variable1("Sachin","Tendulkar")
console.log(returnedvalue)