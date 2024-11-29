document.addEventListener('DOMContentLoaded', function () {
    const usabilityInputs = document.querySelectorAll('.usability-input'); // Select all usability inputs

    usabilityInputs.forEach((input) => {
        const formGroup = input.closest('.form-group'); // Find the nearest form-group
        const usabilityOptions = formGroup.querySelector('.usability-options');
        const arrowIcon = formGroup.querySelector('.arrow-icon');

        input.addEventListener('click', function (e) {
            e.stopPropagation(); // Prevents click from bubbling up
            formGroup.classList.toggle('show'); // Toggle .show class on the form-group
            arrowIcon.classList.toggle('rotate'); // Rotate the arrow
        });

        usabilityOptions.querySelectorAll('.option').forEach(option => {
            option.addEventListener('click', function () {
                input.value = option.textContent; // Set selected option text to input
                formGroup.classList.remove('show'); // Hide dropdown
                arrowIcon.classList.remove('rotate'); // Reset arrow rotation
            });
        });
    });

    // Close dropdown on outside click
    document.addEventListener('click', function (e) {
        usabilityInputs.forEach((input) => {
            const formGroup = input.closest('.form-group');
            const arrowIcon = formGroup.querySelector('.arrow-icon');
            if (!formGroup.contains(e.target)) {
                formGroup.classList.remove('show'); // Close dropdown
                arrowIcon.classList.remove('rotate'); // Reset arrow rotation
            }
        });
    });
});



document.addEventListener('DOMContentLoaded', function () {
    // Select input fields
    const emailInputs = document.querySelectorAll('input[type="email"]');
    const passwordInputs = document.querySelectorAll('input[type="password"]');
    const popup = document.getElementById('popup-message');
    const popupText = document.getElementById('popup-text');

    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Password validation function
    function isValidPassword(password) {
        const passwordRegex = /^(?=.*[0-9]).{8,}$/;
        return passwordRegex.test(password);
    }

    // Function to show popup message
    function showPopup(message) {
        popupText.textContent = message;
        popup.classList.add('visible');
    }

    // Function to hide popup message
    function hidePopup() {
        popup.classList.remove('visible');
    }

    // Validate email dynamically
    emailInputs.forEach((input, index) => {
        input.addEventListener('input', () => {
            const email = emailInputs[index].value.trim();
            if (!isValidEmail(email)) {
                showPopup('Please enter a valid email address.');
            } else {
                hidePopup();
            }
        });
    });

    // Validate password on hover
    passwordInputs.forEach((input) => {
        input.addEventListener('mouseenter', () => {
            const password = input.value.trim();
            if (!isValidPassword(password)) {
                showPopup('Password must be at least 8 characters long and include a number.');
            }
        });

        input.addEventListener('mouseleave', () => {
            hidePopup();
        });

        // Validate password while typing
        input.addEventListener('input', () => {
            const password = input.value.trim();
            if (isValidPassword(password)) {
                hidePopup();
            }
        });
    });
});
