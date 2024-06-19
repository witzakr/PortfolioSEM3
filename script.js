// Define variables
var currentImageIndex = 0; // Index for the current image being displayed
var images = ["../images/me.jpg", "../images/mesasf.jpg", "../images/mesasf.jpg"]; // Array of image URLs

// Function to change the image based on direction
function changeImage(direction) {
    // If direction is 'next', increment the index, looping back to the beginning if necessary
    if (direction === 'next') {
        currentImageIndex = (currentImageIndex + 1) % images.length;
    } 
    // If direction is 'previous', decrement the index, looping back to the end if necessary
    else if (direction === 'previous') {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    }
    // Set the src attribute of the profile image element to the new image URL
    document.getElementById('profile-image').src = images[currentImageIndex];
}

// Initialize slide index
var slideIndex = 1;

// Call showDivs function with initial slideIndex value
showDivs(slideIndex);

// Function to increment or decrement slide index
function plusDivs(n) {
    showDivs(slideIndex += n);
}

// Function to display the current slide and hide others
function showDivs(n) {
    var i;
    // Get all elements with class name "mySlides"
    var x = document.getElementsByClassName("mySlides");
    // If n is greater than the number of slides, set slideIndex to 1
    if (n > x.length) {slideIndex = 1}
    // If n is less than 1, set slideIndex to the number of slides
    if (n < 1) {slideIndex = x.length};
    // Hide all slides
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    // Display the current slide
    x[slideIndex-1].style.display = "block";
}

document.addEventListener('DOMContentLoaded', (event) => {
    const individualWorkCheckbox = document.getElementById('individualWork');
    const groupProjectCheckbox = document.getElementById('groupProject');
    const passionateProjectCheckbox = document.getElementById('passionateProject');

    individualWorkCheckbox.addEventListener('change', () => {
        toggleDisplay(individualWorkCheckbox, ['gr', 'pp']);
    });

    groupProjectCheckbox.addEventListener('change', () => {
        toggleDisplay(groupProjectCheckbox, ['iw', 'pp']);
    });

    passionateProjectCheckbox.addEventListener('change', () => {
        toggleDisplay(passionateProjectCheckbox, ['iw', 'gr']);
    });

    function toggleDisplay(checkbox, elementIds) {
        elementIds.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.style.display = checkbox.checked ? 'none' : '';
            }
        });
    }
});

// the code is put in the assigment html files since for some reason there are linking issues 