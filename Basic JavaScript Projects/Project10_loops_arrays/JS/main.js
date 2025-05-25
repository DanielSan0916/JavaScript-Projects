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
        function constant_function() {
            document.getElementById("Constant").innerHTML = 
                `Hello, my name is ${myObject.name}, and I love ${myObject.hobby}!`;
        }
