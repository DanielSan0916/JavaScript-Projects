// This function demonstrates the use of a loop
function Call_Loop() {
    let i = 0;
    let result = "";

    while (i < 5) {
        result += "Loop iteration: " + i + "<br>";
        i++;
    }

    document.getElementById("Loop").innerHTML = result;
}

// This function demonstrates the use of a for loop
function for_Loop() {
    let instruments = ["Guitar", "Piano", "Violin", "Drums", "Flute"];
    let result = "";

    for (let i = 0; i < instruments.length; i++) {
        result += "Instrument: " + instruments[i] + "<br>";
    }

    document.getElementById("List_of_Instruments").innerHTML = result;
}


// This function demonstrates the use of an array
function array_Function() {
    let myArray = ["Apple", "Banana", "Cherry", "Date"];
    document.getElementById("Array").innerHTML = myArray.join(", ");
}

// Use of an object using the const keyword
        const myObject = {
            name: "Daniel",
            age: 25,
            hobby: "coding"
        };

// Use of a Function to display a property value 
        myObject.hobby = "gaming"; //** Update - Changed a property’s value

        // Adding a new property with a value
        myObject.favoriteColor = "blue"; //** Update - Added a new property

        // Function to display the changed and added properties
        function constant_function() {
            document.getElementById("Constant").innerHTML = 
                `Hello, my name is ${myObject.name}. My favorite color is ${myObject.favoriteColor}, and I now enjoy ${myObject.hobby}!`;
        }


// Creating an object using the let keyword
    let person = {
        name: "Daniel",
        age: 25,
        favoriteActivity: "hiking",

// Method to display a message using object properties
    introduce: function() {
        return `Hello! My name is ${this.name}, I am ${this.age} years old, and I love ${this.favoriteActivity}.`;
        }
    };

// Function to call the object's method and display the message
    function constant_function() {
        document.getElementById("ConstantLet").innerHTML = person.introduce();
    }