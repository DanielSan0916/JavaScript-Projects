document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const messageField = document.getElementById("message");

    form.addEventListener("submit", function (event) {
        let valid = true;

        // Validate Name
        if (nameField.value.trim() === "") {
            showError(nameField, "Name is required.");
            valid = false;
        } else {
            clearError(nameField);
        }

        // Validate Email
        if (!isValidEmail(emailField.value)) {
            showError(emailField, "Please enter a valid email address.");
            valid = false;
        } else {
            clearError(emailField);
        }

        // Validate Message
        if (messageField.value.trim() === "") {
            showError(messageField, "Message cannot be empty.");
            valid = false;
        } else {
            clearError(messageField);
        }

        if (!valid) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });

    // Function to Validate Email Format
    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Function to Show Error Message
    function showError(field, message) {
        field.classList.add("error");
        let errorMessage = field.nextElementSibling;
        if (!errorMessage || !errorMessage.classList.contains("error-message")) {
            errorMessage = document.createElement("span");
            errorMessage.classList.add("error-message");
            field.parentNode.insertBefore(errorMessage, field.nextSibling);
        }
        errorMessage.textContent = message;
    }

    // Function to Clear Error Message
    function clearError(field) {
        field.classList.remove("error");
        let errorMessage = field.nextElementSibling;
        if (errorMessage && errorMessage.classList.contains("error-message")) {
            errorMessage.textContent = "";
        }
    }
});