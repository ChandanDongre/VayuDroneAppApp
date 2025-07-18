document.addEventListener('DOMContentLoaded', () => {
    // Check if user is logged in
    if (localStorage.getItem('user') && !window.location.pathname.includes('home.html')) {
        // window.location.href = 'home.html';
    }

    // Save profile data
    const saveProfileButton = document.querySelector('button.bg-[#9fd391]');
    if (saveProfileButton && saveProfileButton.textContent.trim() === 'Save and Continue') {
        saveProfileButton.addEventListener('click', () => {
            const fullName = document.getElementById('fullName').value;
            const gender = document.querySelector('input[name="gender"]:checked').value;
            const age = document.getElementById('age').value;
            const address = document.getElementById('address').value;
            const location = document.getElementById('location').value;

            if (!fullName || !age || !address) {
                alert('Please fill out all fields.');
                return;
            }

            if (age < 18) {
                alert('You must be at least 18 years old.');
                return;
            }

            const userProfile = {
                fullName,
                gender,
                age,
                address,
                location
            };
            localStorage.setItem('userProfile', JSON.stringify(userProfile));
            window.location.href = 'home.html';
        });
    }

    // Load profile data
    if (window.location.pathname.includes('profile-overview.html') || window.location.pathname.includes('edit-profile.html')) {
        const userProfile = JSON.parse(localStorage.getItem('userProfile'));
        if (userProfile) {
            if (document.querySelector('p.text-\\[#0f1a0f\\]')) {
                document.querySelector('p.text-\\[#0f1a0f\\]').textContent = userProfile.fullName;
            }
            if (document.querySelector('input[placeholder="Enter your full name"]')) {
                document.querySelector('input[placeholder="Enter your full name"]').value = userProfile.fullName;
            }
            if (document.querySelector('select.form-input')) {
                document.querySelector('select.form-input').value = userProfile.gender;
            }
            if (document.querySelector('input[placeholder="Enter your age"]')) {
                document.querySelector('input[placeholder="Enter your age"]').value = userProfile.age;
            }
            if (document.querySelectorAll('select.form-input')[1]) {
                document.querySelectorAll('select.form-input')[1].value = userProfile.farmerType;
            }
            if (document.querySelectorAll('select.form-input')[2]) {
                document.querySelectorAll('select.form-input')[2].value = userProfile.farmSize;
            }
            if (document.querySelector('input[placeholder="Enter house number"]')) {
                document.querySelector('input[placeholder="Enter house number"]').value = userProfile.houseNo;
            }
            if (document.querySelector('input[placeholder="Enter street name"]')) {
                document.querySelector('input[placeholder="Enter street name"]').value = userProfile.street;
            }
            if (document.querySelector('input[placeholder="Enter area"]')) {
                document.querySelector('input[placeholder="Enter area"]').value = userProfile.area;
            }
            if (document.querySelector('input[placeholder="Enter landmark"]')) {
                document.querySelector('input[placeholder="Enter landmark"]').value = userProfile.landmark;
            }
            if (document.querySelector('input[placeholder="Enter district"]')) {
                document.querySelector('input[placeholder="Enter district"]').value = userProfile.district;
            }
            if (document.querySelector('input[placeholder="Enter village"]')) {
                document.querySelector('input[placeholder="Enter village"]').value = userProfile.village;
            }
            if (document.querySelectorAll('select.form-input')[3]) {
                document.querySelectorAll('select.form-input')[3].value = userProfile.crops;
            }
            if (document.querySelector('input[type="checkbox"]')) {
                document.querySelector('input[type="checkbox"]').checked = userProfile.whatsappOptIn;
            }
        }
    }
});

function logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('userProfile');
    window.location.href = 'login.html';
}
