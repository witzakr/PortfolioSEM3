document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".mainpage");
    const scrollButtons = document.querySelectorAll(".scroll-button");

    scrollButtons.forEach((button, index) => {
        const nextSection = sections[index + 1]; // Next section to scroll to

        button.addEventListener("click", function () {
            nextSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Show/hide button based on scroll position
    window.addEventListener("scroll", function () {
        scrollButtons.forEach((button, index) => {
            const section = sections[index];
            const nextSection = sections[index + 1];

            if (isInView(section)) {
                button.classList.remove("show");
            } else if (isInView(nextSection)) {
                button.classList.add("show");
            }
        });
    });

    function isInView(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }
});
