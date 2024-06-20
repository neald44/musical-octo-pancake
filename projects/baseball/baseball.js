const visitorRunsBtn = document.getElementById('visitorRunsBtn');
const homeRunsBtn = document.getElementById('homeRunsBtn');
const visitorScore = document.getElementById('visitorScore');
const homeScore = document.getElementById('homeScore');

let visitorRunsScored = 0;
let homeRunsScored = 0;

visitorRunsBtn.addEventListener('click', () => {
    visitorRunsScored++;
    visitorScore.innerText = visitorRunsScored;
});

homeRunsBtn.addEventListener('click', () => {
    homeRunsScored++;
    homeScore.innerText = homeRunsScored;
    console.log(homeRunsScored);
});