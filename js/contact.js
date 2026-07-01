const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const userName = document.getElementById("user-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("contact-number").value.trim();
    const message = document.getElementById("message").value.trim();

    if (
        userName === "" ||
        email === "" ||
        phone === "" ||
        message === ""
    ) {
        alert("All field are required.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    const phonePattern = /^\d+$/;
    if (!phonePattern.test(phone)) {
        alert("Phone number must contain only digits.");
        return;
    }

    alert("Message submitted successfully!");
    contactForm.reset()
});