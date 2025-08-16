// Login Form Functionality
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const remember = document.getElementById('remember').checked;
            
            // Show loading state
            const btnText = document.querySelector('.btn-text');
            const loading = document.querySelector('.loading');
            
            if (btnText && loading) {
                btnText.style.display = 'none';
                loading.style.display = 'block';
            }
            
            // Simulate login process
            setTimeout(() => {
                // For demo purposes, accept any email/password combination
                if (email && password) {
                    // Store login info in localStorage
                    if (remember) {
                        localStorage.setItem('userEmail', email);
                        localStorage.setItem('rememberMe', 'true');
                    } else {
                        localStorage.removeItem('userEmail');
                        localStorage.removeItem('rememberMe');
                    }
                    
                    // Store login status
                    localStorage.setItem('isLoggedIn', 'true');
                    
                    // Redirect to main website
                    window.location.href = 'index.html';
                } else {
                    // Show error if fields are empty
                    alert('Please enter both email and password');
                    if (btnText && loading) {
                        btnText.style.display = 'block';
                        loading.style.display = 'none';
                    }
                }
            }, 1500);
        });
    }

    // Check if user was previously logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const rememberMe = localStorage.getItem('rememberMe');
    
    if (isLoggedIn === 'true' && rememberMe === 'true') {
        const savedEmail = localStorage.getItem('userEmail');
        if (savedEmail) {
            const emailInput = document.getElementById('email');
            const rememberCheckbox = document.getElementById('remember');
            if (emailInput) emailInput.value = savedEmail;
            if (rememberCheckbox) rememberCheckbox.checked = true;
        }
    }
});
    