document.addEventListener('DOMContentLoaded', (event) => {
    const individualWorkCheckbox = document.getElementById('individualWork');
    const groupProjectCheckbox = document.getElementById('groupProject');
    const passionateProjectCheckbox = document.getElementById('passionateProject');
    const resetButton = document.getElementById('resetButton');

    individualWorkCheckbox.addEventListener('change', updateDisplay);
    groupProjectCheckbox.addEventListener('change', updateDisplay);
    passionateProjectCheckbox.addEventListener('change', updateDisplay);

    resetButton.addEventListener('click', resetDisplay);

    updateDisplay(); // Initial call to display all elements
});

function updateDisplay() {
    const individualWorkCheckbox = document.getElementById('individualWork');
    const groupProjectCheckbox = document.getElementById('groupProject');
    const passionateProjectCheckbox = document.getElementById('passionateProject');

    const iwChecked = individualWorkCheckbox.checked;
    const grChecked = groupProjectCheckbox.checked;
    const ppChecked = passionateProjectCheckbox.checked;

    const iwElement = document.getElementById('iw');
    const grElement = document.getElementById('gr');
    const ppElement = document.getElementById('pp');

    if (!iwChecked && !grChecked && !ppChecked) {
        // If no checkboxes are checked, display all elements
        iwElement.style.display = '';
        grElement.style.display = '';
        ppElement.style.display = '';
    } else {
        // Toggle display based on checkboxes
        iwElement.style.display = iwChecked ? '' : 'none';
        grElement.style.display = grChecked ? '' : 'none';
        ppElement.style.display = ppChecked ? '' : 'none';
    }
}

function resetDisplay() {
    const individualWorkCheckbox = document.getElementById('individualWork');
    const groupProjectCheckbox = document.getElementById('groupProject');
    const passionateProjectCheckbox = document.getElementById('passionateProject');

    // Uncheck all checkboxes
    individualWorkCheckbox.checked = false;
    groupProjectCheckbox.checked = false;
    passionateProjectCheckbox.checked = false;

    // Show all content
    const iwElement = document.getElementById('iw');
    const grElement = document.getElementById('gr');
    const ppElement = document.getElementById('pp');

    iwElement.style.display = '';
    grElement.style.display = '';
    ppElement.style.display = '';
}
