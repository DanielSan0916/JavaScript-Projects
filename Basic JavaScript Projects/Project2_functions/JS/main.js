function My_First_Function() {
    var str = "This is the button text for the Functions Assignment!";
    var color = "blue"; // New variable to store color value
    document.getElementById("Button_Text").innerHTML = str;
    document.getElementById("Button_Text").style.color = color; // Using second variable to change text color
}

//using Operatos to concatenate strings
function myFunction() {
    var sentence = "I am learning"; //creating the variable
    sentence += " a lot from this class!"; //using the += operator to add the variable to the string
    document.getElementById("Concatenate").innerHTML = sentence; //using document.getElementById to get the element with the id of Concatenate
}