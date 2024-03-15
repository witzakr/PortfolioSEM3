
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


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
showDivs(slideIndex += n);
}

function showDivs(n) {
var i;
var x = document.getElementsByClassName("mySlides");
if (n > x.length) {slideIndex = 1}
if (n < 1) {slideIndex = x.length} ;
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
}
x[slideIndex-1].style.display = "block";
}