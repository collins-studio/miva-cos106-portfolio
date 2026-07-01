const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const userName = document.getElementById("user-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("contact-number").value.trim();
    const message = document.getElementById("message").value.trim();

    document.getElementById("name-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("phone-error").textContent = "";
    document.getElementById("message-error").textContent = "";
    document.getElementById("success-message").textContent = "";

    let isValid = true;

    if (userName ==="") {
        document.getElementById("name-error").textContent = "Name is required.";
        isValid = false;
    }
    
    if (email === "") {
        document.getElementById("email-error").textContent = "Email is required.";
        isValid = false;
    } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            document.getElementById("email-error").textContent = "Please enter a valid email address";
            isValid = false;
        }
    }

    if (phone === "") {
        document.getElementById("phone-error").textContent = "Phone number is required";
        isValid = false;
    } else {
        const phonePattern = /^\d+$/;
        if (!phonePattern.test(phone)) {
            document.getElementById("phone-error").textContent = "Phone number must contain only digits";
            isValid = false;
        }
    }

    if (message === "") {
        document.getElementById("message-error").textContent = "Message is required";
        isValid = false;
    }

    if (isValid) {
        document.getElementById("success-message").textContent = "Message submitted successfully!";
        contactForm.reset();
    }
});