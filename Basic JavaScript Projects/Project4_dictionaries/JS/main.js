function my_Dictionary() {
    // This function creates a dictionary (object) with car details and displays the make of the car
    // in an HTML element with the ID "Dictionary".
    var Car = {
        "Make": "Toyota",
        "Model": "Corolla",
        "Year": 2020,
        "Color": "Blue"
    };
    document.getElementById("Dictionary").innerHTML = Car.Make;
}