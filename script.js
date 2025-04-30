// Button click event
document.getElementById('changeBtn').addEventListener('click', function() {
    this.textContent = 'You clicked me!';
    this.style.backgroundColor = 'green';
});

// Hover effect
document.getElementById('changeBtn').addEventListener('mouseover', function() {
    this.style.backgroundColor = '#f39c12';
});

document.getElementById('changeBtn').addEventListener('mouseout', function() {
    this.style.backgroundColor = '#008CBA';
});

// Email validation
document.getElementById('myForm').addEventListener('submit', function(event) {
    const email = document.getElementById('email').value;
    if (!email.includes('@')) {
        alert('Please enter a valid email address');
        event.preventDefault();
    }
});

// Password length check
document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    if (password.length < 8) {
        alert('Password must be at least 8 characters long');
    }
});

// Image gallery functionality
let currentIndex = 0;
const images = document.querySelectorAll('.gallery-image');

function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = (i === index) ? 'block' : 'none';
    });
}

setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}, 3000); // Automatically change image every 3 seconds
