document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('#profile-image');
    let hoverTimeout;

    images.forEach(image => {
        image.addEventListener('click', function() {
            showPopup(image.src);
        });
    });

    function showPopup(src) {
        // Create the popup overlay
        const popupOverlay = document.createElement('div');
        popupOverlay.style.position = 'fixed';
        popupOverlay.style.top = '0';
        popupOverlay.style.left = '0';
        popupOverlay.style.width = '100%';
        popupOverlay.style.height = '100%';
        popupOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        popupOverlay.style.display = 'flex';
        popupOverlay.style.justifyContent = 'center';
        popupOverlay.style.alignItems = 'center';
        popupOverlay.style.zIndex = '1000';

        // Create the full-size image
        const fullImage = document.createElement('img');
        fullImage.src = src;  // Assuming the full image URL is the same
        fullImage.style.maxWidth = '90%';
        fullImage.style.maxHeight = '90%';
        fullImage.style.boxShadow = '0 0 10px white';

        // Append the full-size image to the overlay
        popupOverlay.appendChild(fullImage);

        // Create close button
        const closeButton = document.createElement('span');
        closeButton.innerHTML = 'X';
        closeButton.classList.add('popup-close-button'); // Changed the class name to popup-close-button
        popupOverlay.appendChild(closeButton);

        // Add event listener to close the popup when the overlay is clicked
        popupOverlay.addEventListener('click', function(event) {
            if (event.target === popupOverlay || event.target === closeButton) {
                document.body.removeChild(popupOverlay);
            }
        });

        // Append the overlay to the body
        document.body.appendChild(popupOverlay);
    }
});
