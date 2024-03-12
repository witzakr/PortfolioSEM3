
var currentImageIndex = 0;
var images = ["../images/me.jpg", "../images/mesasf.jpg", "../images/mesasf.jpg"];

function changeImage(direction) {
    if (direction === 'next') {
        currentImageIndex = (currentImageIndex + 1) % images.length;
    } else if (direction === 'previous') {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    }
    document.getElementById('profile-image').src = images[currentImageIndex];
}
