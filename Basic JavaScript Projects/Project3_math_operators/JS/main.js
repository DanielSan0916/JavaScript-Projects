function addition() {
    var add = 10 + 10; // Perform addition
    document.getElementById("Add").innerHTML = "10 + 10 = " + add;
}

function subtraction() {
    var sub = 10 - 5; // Perform subtraction
    document.getElementById("Sub").innerHTML = "10 - 5 = " + sub;
}

function multiplication() {
    var mult = 10 * 10; // Perform multiplication
    document.getElementById("Mlt").innerHTML = "10 * 10 = " + mult;
}

function division() {
    var divide = 10 / 2; // Perform division
    document.getElementById("Div").innerHTML = "10 / 2 = " + divide;
}

function random() {
    document.getElementById("Ran").innerHTML = Math.random()*10; // Display the random number
}   

function more_Math() {  
    var simple_Math = (1 + 2) * 10 / 2 - 5; // Perform a more complex math operation
    document.getElementById("More").innerHTML = "1 plus 2, multiplied 10, divided by 2, minus 5 equals " + simple_Math;
}

function modulus_Operator() {          
    var simple_Math = 25 % 6; // Perform modulus operation
    document.getElementById("Mod").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() {
    var x = 10; // Define a variable
    document.getElementById("Neg").innerHTML = -x; // Negate the variable
}

function increment() {
    var Value = document.getElementById("IncrementText").innerHTML; // Display the incremented value
    Value++;
    document.getElementById("IncrementText").innerHTML = Value; // Print Result in HTML
}

function decrement() {      
    var Value = document.getElementById("DecrementText").innerHTML; // Display the decremented value
    Value--;
    document.getElementById("DecrementText").innerHTML = Value; // Print Result in HTML
}