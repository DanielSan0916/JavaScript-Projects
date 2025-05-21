//window.alert method
window.alert("Hello, World!"); //This will create a pop-up alert box with the message "Hello, World!"

//document.write method     
var A = "This is a string."; //This will create a string variable and assign it the value "This is a string."
document.write(A);

//Creating two variables and writing them to the document
var Sent1 = "This is the begining of the string.";
var Sent2 = "This is the end of the string.";
document.write(Sent1 + Sent2); //This will concatenate the two strings and write them to the document.

//String With quotation marks Challenge
document.write("  \"The red wagon was stollen!\" - said the man. \"I'll get it back!\" the helper replied."
+ " Next time, we\'ll have to paint it white."
+ " Maybe then it won't be stolen again.")

//Concatenated String Challenge
var B = "This is a Concatenated" + "String.";
document.write(B);

//Multiple Variables Challenge
var Family = "The Sanchez", Dad = "Daniel", Mom = "Arleney", Son = "Xhavi", Daughter = "Bridget";
document .write(Dad);
document .write(Mom);
document .write(Son);
document .write(Daughter);

//Expressions Assignment
document.write("The sum of 2 + 2 is: " + (2 + 2));

//Functions Assignment
function My_First_Function() {              //defining a function and naming it
    var str = "This is the button text!";   //Defining a variable and giving it a string value
    document.getElementById("Button_Text").innerHTML = str; //Putting the value of str into the HTML elementFromPoint 
                                                            //with the "Button_Text" id
    }