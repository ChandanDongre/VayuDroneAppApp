document.addEventListener('DOMContentLoaded', () => {
    const locationInput = document.getElementById('location');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const apiKey = 'YOUR_API_KEY'; // Replace with your ipgeolocation.io API key

            fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&lat=${lat}&lon=${lon}`)
                .then(response => response.json())
                .then(data => {
                    if (locationInput) {
                        locationInput.value = `${data.city}, ${data.state_prov}, ${data.country_name}`;
                    }
                })
                .catch(error => {
                    console.error('Error fetching address:', error);
                    if (locationInput) {
                        locationInput.value = 'Location not available';
                    }
                });
        });
    } else {
        if (locationInput) {
            locationInput.value = 'Geolocation is not supported by this browser.';
        }
    }
});
