document.getElementById('weekSelect').addEventListener('change', function() {
    var selectedOption = this.value;
    var allWeeks = document.querySelectorAll('.weeks li');
    allWeeks.forEach(function(week) {
        week.classList.add('hidden');
    });
    document.querySelectorAll('.' + selectedOption).forEach(function(week) {
        week.classList.remove('hidden');
    });
});

