// Mobile navigation menu

function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}


// Contact form

document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you, " + name +
        "! Your message has been received by Astra Tech."
    );

    this.reset();
});