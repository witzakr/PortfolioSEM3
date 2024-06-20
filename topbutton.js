function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide scroll-to-top button based on scroll position
window.addEventListener('scroll', function() {
    var scrollToTopButton = document.getElementById('scrollToTopButton');
    if (window.scrollY > 500) {
        scrollToTopButton.parentElement.classList.add('scroll-visible');
    } else {
        scrollToTopButton.parentElement.classList.remove('scroll-visible');
    }
});