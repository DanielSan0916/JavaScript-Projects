function displayModel(element) {
    // Retrieve data attributes from the clicked list item
    let modelName = element.getAttribute("data-name");
    let modelType = element.getAttribute("data-type");
    let modelPrice = element.getAttribute("data-price");

    // Display model details
    alert(`Model: ${modelName}\nType: ${modelType}\nPrice: ${modelPrice}`);
}