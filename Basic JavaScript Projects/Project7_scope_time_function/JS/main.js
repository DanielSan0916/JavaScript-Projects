//Assigning local and global variables
var x = 10; //global variable

function Add_numbers() {
    var  x = 99; //local variable
    document.write(10 + x + "<br>"); // using local variable
}

function Add_numbers2() {
    document.write(x + 11); // using global variable
    console.log(x); //using console.log to debug whcih variable is being used
}

//A function that includes an if statement
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "It is currently before 6pm.";
    }
}