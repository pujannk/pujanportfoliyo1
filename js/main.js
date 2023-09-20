// Smooth scroll effect for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 20,
            behavior: 'smooth'
        });
    });
});

// Form submission alert
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // You can add form validation logic here if needed

        // Display a submission alert
        alert('Form submitted successfully!');
        // You can also send form data to a server using fetch() or other methods here
    });
}
