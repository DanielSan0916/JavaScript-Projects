function addition_Function() {
    var addition = 10 + 10; // Perform addition
    document.getElementById("Math").innerHTML = "10 + 10 = " + addition;
}

function subtraction_Function() {
    var subtraction = 10 - 5; // Perform subtraction
    document.getElementById("Math2").innerHTML = "10 - 5 = " + subtraction;
}
function multiplication() {
    var simple_Math = 10 * 10; // Perform multiplication
    document.getElementById("Math3").innerHTML = "10 * 10 = " + simple_Math;
}
function division() {
    var simple_Math = 10 / 2; // Perform division
    document.getElementById("Math4").innerHTML = "10 / 2 = " + simple_Math;
}
function more_Math() {  
    var simple_Math = (1 + 2) * 10 / 2 - 5; // Perform a more complex math operation
    document.getElementById("Math5").innerHTML = "1 plus 2, multiplied 10, divided by 2, minus 5 equals " + simple_Math;
}
function modulus_Operator() {          
    var simple_Math = 25 % 6; // Perform modulus operation
    document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}