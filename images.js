document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('#profile-image');
    let hoverTimeout;

    images.forEach(image => {
        image.addEventListener('click', function() {
            showPopup(image.src);
        });

        image.addEventListener('mouseenter', function() {
            hoverTimeout = setTimeout(() => {
                showPopup(image.src);
            }, 1000);
        });

        image.addEventListener('mouseleave', function() {
            clearTimeout(hoverTimeout);
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

        // Append the overlay to the body
        document.body.appendChild(popupOverlay);

        // Add an event listener to close the popup when the overlay is clicked
        popupOverlay.addEventListener('click', function() {
            document.body.removeChild(popupOverlay);
        });
    }
});
