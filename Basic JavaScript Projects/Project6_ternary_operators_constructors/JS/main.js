//A function with HTML and JS usung a ternary operator with input from the browser
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//A constructor function utilizing "new" and "this" keywords
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Eric = new Vehicle("Ford", "Pinto", 1971, "Mustard");

//A function to display the results of the constructor in an HTML element
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Eric drives a " + Eric.Vehicle_Color + "-colored " + Eric.Vehicle_Model +
        " manufactured in " + Eric.Vehicle_Year;
}

//A nested function
function add_Strings() {
    var start_string = "Hello";

    function Adding(str) {
        start_string = start_string + "" + str;
    }
    Adding(" World");
    document.getElementById("Nested_Function").innerHTML = start_string;
}
