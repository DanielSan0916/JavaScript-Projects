function type_of() {
        document.getElementById("typeof").innerHTML = typeof 2; // This will return "number"
}

function type_coercion() {
        document.getElementById("typecoercion").innerHTML = 2 + "2"; // This will return "22" because the number is coerced to a string
}

function isNaN() {
        document.getElementById("NaN").innerHTML = 0 / 0; // This will return NaN (Not a Number) because you cannot divide zero by zero
}

function infinity() {
        document.getElementById("infinity").innerHTML = 2E310; // This will return Infinity because the number is too large
}

function negative_infinity() {
        document.getElementById("negativeinfinity").innerHTML = -3E310; // This will return -Infinity because the number is too large in the negative direction
}   

function boolean() {
        document.getElementById("boolean").innerHTML = 2 > 1; // This will return true because 2 is greater than 1
}

console.log(5 + 3); // This will output: 8 on the console when pressing F12

function boolean_object() {
        document.getElementById("booleanobject").innerHTML = (10 < 5); // This will return false because 10 is not less than 5
}

function boolean_object2() {
        document.getElementById("booleanobject2").innerHTML = (10 == 10); // This will return true because 10 is equal to 10
}


//variable with a Boolean data type
var x = true;

//printing the data type of th evariable x
document.write(typeof x); // This will return "boolean"
document.write("<br>");

//an expression combining a string and a number
document.write("10" + 10); // This will return "1010" because the number is coerced to a string
document.write("<br>");

// utilizing the == operator
document.write(5 == 5); // This will return true because 5 is equal to 5
document.write("<br>");

// utilizing the === operator
x = 1;
y = 1;
document.write(x === y); // This will return true because both x and y are equal and of the same type
document.write("<br>");

//utilizing the > and && operators
document.write(5 > 3 && 10 > 5); // This will return true because both conditions are true
document.write("<br>");

//utilizing the < and || operators
document.write(5 < 3 || 10 > 5); // This will return true because one of the conditions is true
document.write("<br>");

//Utilizing the ! operator
function not_Function() {
        document.getElementById("Not").innerHTML = !(1 > 2); // This will return true because 1 is not greater than 2, and the ! operator negates the result
}