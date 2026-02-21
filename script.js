// script.js

// Form Validation
function validateForm() {
    // Get the form element
    const form = document.getElementById('myForm');
    const name = form.name.value;
    const email = form.email.value;
    const errorMessage = document.getElementById('error-message');

    // Clear previous error messages
    errorMessage.textContent = '';

    // Simple validation
    if (name === '') {
        errorMessage.textContent += 'Name is required.\n';
    }
    if (email === '') {
        errorMessage.textContent += 'Email is required.\n';
    }
    if (errorMessage.textContent !== '') {
        return false;
    }
    return true;
}

// Smooth Scrolling
const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Interactivity Example
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
    alert('Button Clicked!');
});