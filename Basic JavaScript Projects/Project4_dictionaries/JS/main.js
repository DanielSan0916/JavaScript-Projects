function dictionary_display() {
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

function dictionary_delete() {
    // This function creates a dictionary (object) with car details and displays the model of the car
    // in an HTML element with the ID "Dictionary".
    var Car = {
        "Make": "Toyota",
        "Model": "Corolla",
        "Year": 2020,
        "Color": "Blue"
    };
    delete Car.Color; // This line deletes the Color property from the Car object
    // The following line will display the Model of the car in the HTML element with ID "Dictionary"
    document.getElementById("DictionaryDelete").innerHTML = Car.Model;
}