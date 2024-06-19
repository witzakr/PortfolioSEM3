document.addEventListener('DOMContentLoaded', function() {
    // Function to toggle popup visibility with animation
    function togglePopup(popupElement) {
        if (popupElement.style.display !== 'block') {
            popupElement.style.opacity = '0';
            popupElement.style.display = 'block';
            setTimeout(function() {
                popupElement.style.opacity = '1';
            }, 50); // Adjust delay as needed for transition start
        } else {
            popupElement.style.opacity = '0';
            setTimeout(function() {
                popupElement.style.display = 'none';
            }, 300); // Adjust duration to match CSS transition duration
        }
    }

    // Popup 1
    var popup = document.getElementById('popup');
    var link = document.getElementById('description-link');
    var closeButton = popup.querySelector('.close-button');

    link.addEventListener('click', function(event) {
        event.preventDefault();
        togglePopup(popup);
    });

    closeButton.addEventListener('click', function() {
        togglePopup(popup);
    });

    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            togglePopup(popup);
        }
    });

    // Popup 2
    var popup2 = document.getElementById('popup2');
    var link2 = document.getElementById('description-link2');
    var closeButton2 = popup2.querySelector('.close-button');

    link2.addEventListener('click', function(event) {
        event.preventDefault();
        togglePopup(popup2);
    });

    closeButton2.addEventListener('click', function() {
        togglePopup(popup2);
    });

    window.addEventListener('click', function(event) {
        if (event.target === popup2) {
            togglePopup(popup2);
        }
    });

    // Popup 3
    var popup3 = document.getElementById('popup3');
    var link3 = document.getElementById('description-link3');
    var closeButton3 = popup3.querySelector('.close-button');

    link3.addEventListener('click', function(event) {
        event.preventDefault();
        togglePopup(popup3);
    });

    closeButton3.addEventListener('click', function() {
        togglePopup(popup3);
    });

    window.addEventListener('click', function(event) {
        if (event.target === popup3) {
            togglePopup(popup3);
        }
    });
});
