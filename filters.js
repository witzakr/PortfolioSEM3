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