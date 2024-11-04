// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // 1. Mobile Navigation Toggle
    const navToggle = document.querySelector("#nav-toggle");
    const navMenu = document.querySelector("header nav ul");

    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });

    // 2. Modal Pop-up for Announcements
    const modal = document.querySelector("#announcement-modal");
    const openModalButton = document.querySelector("#open-modal");
    const closeModalButton = document.querySelector("#close-modal");

    openModalButton.addEventListener("click", () => {
        modal.classList.add("visible");
    });

    closeModalButton.addEventListener("click", () => {
        modal.classList.remove("visible");
    });

    // Close modal if clicked outside of the modal content
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.remove("visible");
        }
    });

    // 3. Contact Form Validation
    const contactForm = document.querySelector("#contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const name = document.querySelector("#name").value.trim();
            const email = document.querySelector("#email").value.trim();
            const message = document.querySelector("#message").value.trim();

            if (!name || !email || !message) {
                alert("Please fill out all fields.");
                return;
            }

            if (!validateEmail(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            alert("Thank you for reaching out! We'll get back to you soon.");
            contactForm.reset();
        });
    }
});

// Helper function for email validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
