// Pizza.js
function getReceipt() {
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    var selectedSize = null;

    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            selectedSize = sizeArray[i].value;
            text1 += selectedSize + "<br>";
            break;
        }
    }

    if (!selectedSize) {
        alert("Please select a pizza size!");
        return;
    }

    const sizePrices = {
        "Personal Pizza": 6,
        "Small Pizza": 8,
        "Medium Pizza": 10,
        "Large Pizza": 14,
        "Extra Large Pizza": 16
    };

    sizeTotal = sizePrices[selectedSize] || 0;
    runningTotal = sizeTotal;

    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("Subtotal: $" + runningTotal + ".00");

    getTopping(runningTotal, text1);
}

function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectedToppings = [];
    var toppingArray = document.getElementsByClassName("toppings");

    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedToppings.push(toppingArray[j].value);
            text1 += toppingArray[j].value + "<br>";
        }
    }

    var toppingCount = selectedToppings.length;
    toppingTotal = toppingCount > 1 ? toppingCount - 1 : 0;
    
    runningTotal += toppingTotal;

    console.log("Total toppings selected: " + toppingCount);
    console.log("Toppings price: $" + toppingTotal + ".00");
    console.log("Final Total: $" + runningTotal + ".00");

    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = `<h3>Total: <strong>$${runningTotal}.00</strong></h3>`;
}