// define the correct answers
const correctAnswers = ['b', 'a', 'a', 'c', 'a'];

// get the form element
const quizForm = document.getElementById('quiz-form');

// add an event listener to the form submit button
quizForm.addEventListener('submit', (event) => {
  // prevent the default form submission behavior
  event.preventDefault();

  // get the user's answers
  const userAnswers = [
    quizForm.q1.value,
    quizForm.q2.value,
    quizForm.q3.value,
    quizForm.q4.value,
    quizForm.q5.value
];
// calculate the score
let score = 0;
for (let i = 0; i < userAnswers.length; i++) {
if (userAnswers[i] === correctAnswers[i]) {
score++;
}
}
// display the score to the user
const resultDiv = document.getElementById(`result`);
resultDiv.innerHTML =` You scored ${score} out of ${correctAnswers.length}!`;});	