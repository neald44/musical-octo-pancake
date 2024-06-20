const visitorRunsBtn = document.getElementById('visitorRunsBtn');
const homeRunsBtn = document.getElementById('homeRunsBtn');
const visitorScore = document.getElementById('visitorScore');
const homeScore = document.getElementById('homeScore');

var visitorRunsScored = 0;
var homeRunsScored = 0;

visitorRuns.addEventListener('click', () => {
    VisitorRunsScored++;
    visitorScore.innerText = visitorRunsScored;
});

homeRuns.addEventListener('click', () => {
    homeRunsScored++;
    homeScore.innerText = homeRunsScored;
});