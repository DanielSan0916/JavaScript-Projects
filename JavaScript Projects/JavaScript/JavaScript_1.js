function Camera_Function() {
    // Get user input
    var cameraChoice = document.getElementById("Camera_Input").value.trim();
    var outputMessage;

    // Convert input to lowercase for case-insensitive comparison
    switch (cameraChoice.toLowerCase()) {
        case "kodak camera":
            outputMessage = "The Kodak Camera (1888) revolutionized photography by making it accessible to the masses!";
            break;
        case "leica i":
            outputMessage = "The Leica I (1925) was a pioneer in 35mm photography and remains an iconic classic.";
            break;
        case "nikon f":
            outputMessage = "The Nikon F (1959) was a game-changer for professional photographers with its robust build and interchangeable lenses.";
            break;
        case "canon eos 300d":
            outputMessage = "The Canon EOS 300D (2003) made digital SLR cameras more affordable, bringing high-quality imaging to consumers.";
            break;
        case "hasselblad 1600f":
            outputMessage = "The Hasselblad 1600F (1948) is legendary for its modular design and medium-format excellence!";
            break;
        case "olympus pen e-p1":
            outputMessage = "The Olympus PEN E-P1 (2009) blended retro design with digital technology, offering a stylish and compact camera.";
            break;
        default:
            outputMessage = "Sorry, I don't recognize that camera. Try picking one from the list!";
    }

    // Display the result
    document.getElementById("Output").innerHTML = outputMessage;
    document.getElementById("Output").style.color = "green"; // Make output text green for better visibility

    // Highlight the selected camera in the list
    let cameraElements = document.getElementsByClassName("camera-list")[0].getElementsByTagName("li");
    for (let i = 0; i < cameraElements.length; i++) {
        cameraElements[i].style.color = "black"; // Reset all items to default color
    }
    for (let i = 0; i < cameraElements.length; i++) {
        if (cameraElements[i].innerText.toLowerCase().includes(cameraChoice.toLowerCase())) {
            cameraElements[i].style.color = "blue"; // Highlight the selected camera
        }
    }

    // Add a camera graphic to the canvas
    const canvas = document.getElementById("cameraCanvas");
    const ctx = canvas.getContext("2d");

    // Clear canvas before drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw a sample camera icon (a rectangle with a small circle for a lens)
    ctx.fillStyle = "gray";
    ctx.fillRect(120, 60, 160, 80); // Body of the camera
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(200, 100, 30, 0, Math.PI * 2); // Camera lens
    ctx.fill();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 3;
    ctx.stroke();
}