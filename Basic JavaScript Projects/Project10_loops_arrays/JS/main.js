// a function using a while loop
function count_to_Ten() {
    var Digit = "";
    var x = 1;
    while (x < 11) {
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

//A function using a for loop
var Instruments = ["Guitar", "Piano", "Drums", "Bass", "Violin"];
var Content = "";
var y;
function for_Loop() {
    for (y = 0; y < Instruments.length; y++) {
        Content += Instruments[y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//A function with an array
function color_array() {
    var Colors = [];
    Colors[1] = "Red";
    Colors[2] = "Blue";
    Colors[3] = "Green";
    Colors[4] = "Yellow";
    Colors[5] = "Purple";
    Colors[6] = "Orange";
    document.getElementById("Array").innerHTML = "May favorite color is " + Colors[6] + ".";
}

//Creating an object with the let keyword
function car() {
    let car = {
        make: "Toyota",
        year: 2020,
        color: "Blue",
    };
    document.getElementById("Car").innerHTML = "I have a" + car.year + " " + car.color + " " + car.make + ".";
}
