document.addEventListener('DOMContentLoaded', () => {
    const farmLocationInput = document.querySelector('input[placeholder="Farm Location"]');
    const addressInput = document.querySelector('input[placeholder="Address"]');
    const cityInput = document.querySelector('input[placeholder="City"]');
    const stateInput = document.querySelector('input[placeholder="State"]');
    const zipCodeInput = document.querySelector('input[placeholder="Zip Code"]');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            // Using a free reverse geocoding API to get address details
            fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`)
                .then(response => response.json())
                .then(data => {
                    if (farmLocationInput) {
                        farmLocationInput.value = data.display_name;
                    }
                    if (addressInput) {
                        addressInput.value = `${data.address.road || ''}, ${data.address.suburb || ''}`;
                    }
                    if (cityInput) {
                        cityInput.value = data.address.city || data.address.town || data.address.village || '';
                    }
                    if (stateInput) {
                        stateInput.value = data.address.state || '';
                    }
                    if (zipCodeInput) {
                        zipCodeInput.value = data.address.postcode || '';
                    }
                })
                .catch(error => {
                    console.error('Error fetching address:', error);
                });
        });
    }
});
