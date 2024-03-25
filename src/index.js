import './style.scss';

let scoreButton = document.querySelectorAll('.survey__score');
let submitButton = document.querySelector('.survey__submit');
let survey = document.querySelector('.survey');
let surveyResult = document.querySelector('.survey-result');
const surveyResultVaue = document.querySelector('.survey-result__value');
let activeButton = null;

// Functions

function toggleClassList(button) {
	if (activeButton) {
		activeButton.classList.remove('survey__score--active');
	}
	button.classList.toggle('survey__score--active');
	activeButton = button;
}

function storeScore() {
	let score = activeButton.dataset.score;
	return score;
}

//Event Listeners

scoreButton.forEach((button) => {
	button.addEventListener('click', () => {
		toggleClassList(button);
		storeScore();
	});
});

submitButton.addEventListener('click', () => {
	if (activeButton) {
		survey.style.display = 'none';
		surveyResult.style.display = 'flex';
		surveyResultVaue.textContent = `You selected ${storeScore()} out of 5`;
	}
});
