// script.js

// Form validation
function validateForm() {
    const form = document.getElementById('myForm');
    const input = form.querySelector('input');
    if (input.value === '') {
        alert('Input cannot be empty!');
        return false;
    }
    return true;
}

// Modal functionality
const modal = document.getElementById('myModal');
const btn = document.getElementById('myBtn');
const span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
    modal.style.display = 'block';
}

span.onclick = function() {
    modal.style.display = 'none';
}

document.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Hamburger menu toggle for mobile
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.onclick = function() {
    navMenu.classList.toggle('show');
};

// Basic interactivity
const interactiveElement = document.getElementById('interactiveElement');
interactiveElement.onclick = function() {
    alert('You clicked the interactive element!');
};

// Initialize form validation on submit
const form = document.getElementById('myForm');
form.onsubmit = function() {
    return validateForm();
};
