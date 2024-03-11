document.getElementById('weekSelect').addEventListener('change', function() {
    var selectedOption = this.value;
    var allWeeks = document.querySelectorAll('.weeks li');
    allWeeks.forEach(function(week) {
        week.classList.add('hidden');
    });
    document.querySelectorAll('.' + selectedOption).forEach(function(week) {
        week.classList.remove('hidden');
    });
    
    var weekText = "";
    if (selectedOption === "week1to5") {
        weekText = "Week<span class='red-text'> 1-5</span>";
    } else if (selectedOption === "week6to10") {
        weekText = "Week<span class='red-text'> 6-10</span>";
    } else if (selectedOption === "week11to15") {
        weekText = "Week<span class='red-text'> 11-15</span>";
    } else if (selectedOption === "week16to18") {
        weekText = "Week<span class='red-text'> 16-18</span>";
    }
    document.querySelector('.mainpage h2').innerHTML = weekText;
});