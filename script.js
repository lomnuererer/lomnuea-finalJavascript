// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Load CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    // link.href = 'style.css';
    document.head.appendChild(link);

    // Load Navbar
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
        });
});
