let currentQuestion = 0;
let score = 0;
const questions = ['What colour is the sky','What colour is grass'];
const answers = ['Blue','Green'];
const question = document.getElementById('question');
const questionFeedback = document.getElementById('questionFeedback');
const title = document.getElementById('title');
const nextButton = document.getElementById('nextButton');
const QButtons = document.getElementsByClassName('questions');

function checkAnswer(answer) {
	if (answers[currentQuestion] === answer){
		score++;
		questionFeedback.textContent = 'Correct! Your current score is ' + score + '.';
	} else {
		questionFeedback.textContent = 'Incorrect - The correct answer is ' + answers[currentQuestion];
	}
	nextButton.style.display = "block";
	disableQButtons();
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
	//enableQButtons();
}

function showResults() {
	questionFeedback.textContent = 'Your total score is ' + score;
	question.textContent = 'Results:';
	title.textContent = 'Results';
	nextButton.style.display = 'none';
	QButtons.getElementsByTagName("button").disabled = true;
}

/*function disableQButtons() {
	var i;
	for (i = 0; i < QButtons.length; i++) {
		document.getElementById('answer' + i).disabled = true;
	}
}

function enableQButtons() {
	var i;
	for (i = 0; i < QButtons.length; i++) {
		if QButtons[i].tagName = 'button'{
			QButtons[i].disabled = false;

		}
	}
}*/

updatePage();
