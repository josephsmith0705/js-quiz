let currentQuestion = 0;
let score = 0;
const questions = ['What colour is the sky','How many minutes are there in an hour','Who invented gravity',
	'What language is this written in','What colour are trees'];
const answers = ['Blue','Red','Green','Yellow','15','30','45','60','Isaac Newton','Albert Einstein','Brahmagupta-II','None',
	'HTML','CSS','JavaScript','All','Blue','Red','Green','Yellow']
const correctAnswers = ['Blue','60','None','All','Green'];
const question = document.getElementById('question');
const questionFeedback = document.getElementById('questionFeedback');
const title = document.getElementById('title');
const nextButton = document.getElementById('nextButton');
const answerButtons = document.querySelectorAll('.answer-button');

function checkAnswer(answer) {
	if (correctAnswers[currentQuestion] === answers[answer+(4*currentQuestion)]){
		score++;
		questionFeedback.textContent = 'Correct! Your current score is ' + score + '.';
	} else {
		questionFeedback.textContent = 'Incorrect - The correct answer is ' + correctAnswers[currentQuestion];
	}
	nextButton.style.display = "block";
	hideButtons();
}

function next() {
	currentQuestion++;
	if (currentQuestion+1 > questions.length){
		showResults();
	} else {
		updatePage();
	}
}

function updatePage() {
	question.textContent = 'Question ' + (currentQuestion+1) + ': ' + questions[currentQuestion] + '?';
	title.textContent = 'Question ' + (currentQuestion+1);
	nextButton.style.display = 'none';
	questionFeedback.textContent = '';
	propagateButtons();
	showButtons();
}

function propagateButtons() {
	for (i=0; i<answerButtons.length; i++){
		answerButtons[i].textContent = answers[i+(4*currentQuestion)];
	}
}

function showResults() {
	questionFeedback.textContent = 'You gave ' + score + ' correct answers, and ' + (questions.length - score) + ' incorrect answers';
	question.textContent = 'Results:';
	title.textContent = 'Results';
	nextButton.style.display = 'none';
	const startTime = date.getTime();
}

function hideButtons() {
	for (i=0; i<answerButtons.length; i++){
		answerButtons[i].style.visibility = 'hidden';
	}
}

function showButtons() {
	for (i=0; i<answerButtons.length; i++){
		answerButtons[i].style.visibility = 'visible';
	}
}

updatePage();