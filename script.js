document.addEventListener("DOMContentLoaded", function() {
    // Check if user is already registered (from localStorage)
    const isRegistered = localStorage.getItem('isRegistered');
    if (isRegistered === 'true') {
        enableBuyButton();
    }

    // Handle registration form submission
    const form = document.getElementById('registration-form');
    const buyButton = document.getElementById('buy-button');
    const registrationMessage = document.getElementById('registration-message');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const address = document.getElementById('address').value;

            // Validate all fields
            if (fullName && email && phone && address && email.includes('@') && email.includes('.')) {
                localStorage.setItem('isRegistered', 'true');
                enableBuyButton();
            } else {
                alert('Please fill in all fields with a valid email.');
            }
        });
    }

    function enableBuyButton() {
        form.classList.add('hidden');
        buyButton.removeAttribute('disabled');
        registrationMessage.classList.remove('hidden');
    }
});