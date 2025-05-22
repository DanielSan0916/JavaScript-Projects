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
