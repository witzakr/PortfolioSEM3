document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.checkbox[type="checkbox"]');
    const sectors = document.querySelectorAll('.sector');

    // Load the checkbox states from localStorage
    function loadCheckboxStates() {
        checkboxes.forEach(checkbox => {
            const state = localStorage.getItem(checkbox.id);
            checkbox.checked = state === 'true';
        });
    }

    // Save the checkbox states to localStorage
    function saveCheckboxStates() {
        checkboxes.forEach(checkbox => {
            localStorage.setItem(checkbox.id, checkbox.checked);
        });
    }

    function filterWorks() {
        saveCheckboxStates(); // Save state on each filter change

        const checkedBoxes = Array.from(checkboxes).filter(checkbox => checkbox.checked);

        if (checkedBoxes.length === 0) {
            // If no checkboxes are checked, show all sectors and all works within them
            sectors.forEach(sector => {
                sector.style.display = 'block';
                sector.querySelectorAll('.work').forEach(work => work.style.display = 'flex');
            });
            return;
        }

        const mainFilters = ['individualWork', 'groupProject', 'passionateProject'];
        const subFilters = ['LO1', 'LO2', 'LO3', 'LO4'];

        const checkedMainFilters = checkedBoxes.filter(checkbox => mainFilters.includes(checkbox.value));
        const checkedSubFilters = checkedBoxes.filter(checkbox => subFilters.includes(checkbox.value));

        // Hide all sectors first
        sectors.forEach(sector => sector.style.display = 'none');

        // Determine which sectors to show based on main filters
        const sectorsToShow = new Set();
        if (checkedMainFilters.length > 0) {
            checkedMainFilters.forEach(checkbox => {
                if (checkbox.value === 'individualWork') {
                    sectorsToShow.add('iw');
                } else if (checkbox.value === 'groupProject') {
                    sectorsToShow.add('gp');
                } else if (checkbox.value === 'passionateProject') {
                    sectorsToShow.add('pp');
                }
            });
        } else if (checkedSubFilters.length > 0) {
            // If only sub-filters are checked, show all sectors initially
            sectors.forEach(sector => sector.style.display = 'block');
        }

        // Display sectors and works based on filters
        sectorsToShow.forEach(sectorId => {
            const sectorElement = document.getElementById(sectorId);
            sectorElement.style.display = 'block';
        });

        sectors.forEach(sectorElement => {
            // Hide all works initially
            sectorElement.querySelectorAll('.work').forEach(work => work.style.display = 'none');

            // Function to check if a work matches all checked subfilters
            function matchesAllFilters(work) {
                return checkedSubFilters.every(filter => {
                    return work.classList.contains(filter.value);
                });
            }

            // Show works that match the additional filters
            if (checkedSubFilters.length > 0) {
                sectorElement.querySelectorAll('.work').forEach(work => {
                    if (matchesAllFilters(work)) {
                        work.style.display = 'flex';
                    }
                });
            }

            // If no sub-filters are checked, show all works within the sector
            if (checkedSubFilters.length === 0) {
                sectorElement.querySelectorAll('.work').forEach(work => work.style.display = 'flex');
            }
        });

        // Special case: If only sub-filters are checked, show matching works across all sectors
        if (checkedMainFilters.length === 0 && checkedSubFilters.length > 0) {
            sectors.forEach(sectorElement => {
                sectorElement.querySelectorAll('.work').forEach(work => {
                    if (matchesAllFilters(work)) {
                        work.style.display = 'flex';
                    }
                });
            });
        }
    }

    function resetDisplay() {
        // Reset all checkboxes
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });

        // Clear localStorage
        localStorage.clear();

        // Show all works
        sectors.forEach(sector => {
            sector.style.display = 'block';
            sector.querySelectorAll('.work').forEach(work => work.style.display = 'flex');
        });
    }

    // Event listeners
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterWorks);
    });

    const resetButton = document.getElementById('resetButton');
    resetButton.addEventListener('click', resetDisplay);

    // Initial load
    loadCheckboxStates();
    filterWorks();
});
