// static/js/dark_mode.js

// Function to switch to dark mode
function switchToDarkMode() {
    // Get the body element
    var body = document.body;

    // Add the 'dark-mode' class to the body
    body.classList.add('dark-mode');

    // Get all elements with the 'card' class
    var cards = document.getElementsByClassName('card');

    // Add the 'dark-mode' class to all cards
    for (var i = 0; i < cards.length; i++) {
        cards[i].classList.add('dark-mode');
    }

    // Get all elements with the 'navbar-brand' class
    var navbarBrands = document.getElementsByClassName('navbar-brand');

    // Add the 'dark-mode' class to all navbar brands
    for (var i = 0; i < navbarBrands.length; i++) {
        navbarBrands[i].classList.add('dark-mode');
    }

    // Get all elements with the 'nav-link' class
    var navLinks = document.getElementsByClassName('nav-link');

    // Add the 'dark-mode' class to all nav links
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.add('dark-mode');
    }
}

// Function to switch back to light mode
function switchToLightMode() {
    // Get the body element
    var body = document.body;

    // Remove the 'dark-mode' class from the body
    body.classList.remove('dark-mode');

    // Get all elements with the 'card' class
    var cards = document.getElementsByClassName('card');

    // Remove the 'dark-mode' class from all cards
    for (var i = 0; i < cards.length; i++) {
        cards[i].classList.remove('dark-mode');
    }

    // Get all elements with the 'navbar-brand' class
    var navbarBrands = document.getElementsByClassName('navbar-brand');

    // Remove the 'dark-mode' class from all navbar brands
    for (var i = 0; i < navbarBrands.length; i++) {
        navbarBrands[i].classList.remove('dark-mode');
    }

    // Get all elements with the 'nav-link' class
    var navLinks = document.getElementsByClassName('nav-link');

    // Remove the 'dark-mode' class from all nav links
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove('dark-mode');
    }
}

// Function to toggle between light and dark mode
function toggleDarkMode() {
    // Get the body element
    var body = document.body;

    // Check if the body has the 'dark-mode' class
    if (body.classList.contains('dark-mode')) {
        // If it does, switch to light mode
        switchToLightMode();
    } else {
        // If it doesn't, switch to dark mode
        switchToDarkMode();
    }
}

// Listen for a click event on the dark mode button
document.getElementById('dark-mode-button').addEventListener('click', toggleDarkMode);
