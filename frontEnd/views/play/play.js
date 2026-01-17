// DOMS ELEMENTS  ---------------------------------------------------------
const dom_quiz = document.querySelector("#quiz");
const dom_question = document.querySelector("#question");
const dom_choiceA = document.querySelector("#A");
const dom_choiceB = document.querySelector("#B");
const dom_choiceC = document.querySelector("#C");
const dom_choiceD = document.querySelector("#D");
const dom_score = document.querySelector("#scoreContainer");
const dom_start = document.querySelector("#start");
const dom_progressBarFill = document.querySelector("#footer");
const newQuestionForm = document.getElementById("inputTitle");
const dom_answerA = document.getElementById("inputA");
const dom_answerB = document.getElementById("inputB");
const dom_answerC = document.getElementById("inputC");
const dom_answerD = document.getElementById("inputD");
dom_start.addEventListener("click", onStart);

// DATA  ---------------------------------------------------------
let questions = [
  {
    title: "What does HTML stand for?",
    choiceA: "Hi Thierry More Laught",
    choiceB: "How To move Left",
    choiceC: "Ho Theary Missed the Laundry !",
    choiceD: "Hypertext Markup Language",
    correct: "D",
  },  
  {
    title: "What does CSS stand for?",
    choiceA: "Cisco and Super Start",
    choiceB: "Ci So Sa",
    choiceC: "Cascading Style Sheets ",
    choiceD: "I don't know !",
    correct: "C",
  },
  {
    title: "What does JS stand for?",
    choiceA: "Junior stars",
    choiceB: "Justing Star",
    choiceC: "Javascript",
    choiceD: "RonanScript",
    correct: "C",
  },
];
let runningQuestionIndex = 0;
let score = 0;

// FUNCTIONS ---------------------------------------------------------


function newQuestion( ) {
   questions.push( {
    title: newQuestionForm.value,
    choiceA: dom_answerA.value,
    choiceB: dom_answerB.value,
    choiceC: dom_answerC.value,
    choiceD: dom_answerD.value,
    correct: dom_correctAnswer.value.toUpperCase(),
  });
}
console.log(questions);
// Hide a given element
function hide(element) {
  // TODO
  element.style.display = "none";
}

function show(element) {
  // TODO
  element.style.display = "block";
 
}

function onStart() {
  // Render the current question
  // Display the quiz view,
 hide(dom_start);
 show(dom_quiz);
 show(dom_progressBarFill);
 renderQuestion();
  

}
  
function renderQuestion() {
  // Render the current question on the quiz view
  dom_question.textContent = questions[runningQuestionIndex].title;
  dom_choiceA.textContent = questions[runningQuestionIndex].choiceA;
  dom_choiceB.textContent = questions[runningQuestionIndex].choiceB;
  dom_choiceC.textContent = questions[runningQuestionIndex].choiceC;
  dom_choiceD.textContent = questions[runningQuestionIndex].choiceD;
  
}


function onPlayerSubmit(answer) {
  // Update the score, display the next question or the score view
  if (answer === questions[runningQuestionIndex].correct) {
    score++;
  }

  // Move to next question index
  runningQuestionIndex++;
  document.getElementById('progress-bar-fill').style.width = ((runningQuestionIndex) / questions.length * 100) + '%';

  // If there are still questions, render the next one
  if (runningQuestionIndex < questions.length) {
    renderQuestion();
  } else {
    // No more questions: hide quiz and show score view
    hide(dom_progressBarFill);
    hide(dom_quiz);
    show(dom_score);
    renderScore();
  }
}

function renderScore() {
  // Show the final score
  const sPercent = Math.round((score / questions.length) * 100) ;
  let emoji = "";
  if(sPercent <= 20) {
    emoji = "☹️";
  }else if(sPercent <= 40) {
    emoji = "🙁";
  } else if(sPercent <= 60) {
    emoji = "😐";
  } else  if( sPercent <= 80) {
    emoji = "🙂";
  } else {
    emoji = "😊";
  }
  

  dom_score.innerHTML = `<h1>Your Score: ${sPercent} %${emoji} </h1>`;
}



// FUNCTIONS ---------------------------------------------------------
show(dom_start);
hide(dom_quiz);
hide(dom_score);
