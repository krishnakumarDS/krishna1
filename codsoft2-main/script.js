document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed(".text", {
        strings: [" Frontend Developer", " Student", " Web Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});

window.addEventListener('DOMContentLoaded', (event) => {
    const logo = document.querySelector('.logo');
    logo.classList.add('show'); // Add 'show' class to trigger animation
});