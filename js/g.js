// Form submission handling (just for demonstration)
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Login submitted!');
});

document.getElementById('registerForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Registration submitted!');
});
