const dom_editQuiz = document.getElementById("editQuiz");
const dom_playQuiz = document.getElementById("playQuiz");
const dom_questionModal = document.getElementById("questionModal");
const newQuestionForm = document.getElementById("inputTitle");
const dom_answerA = document.getElementById("inputA");
const dom_answerB = document.getElementById("inputB");
const dom_answerC = document.getElementById("inputC");
const dom_answerD = document.getElementById("inputD");
const dom_correctAnswer = document.getElementById("inputCorrect");
const dom_questionsContainer = document.getElementById("questions");
const dom_formError = document.getElementById("formError");
const dom_btnCancel = document.getElementById("btnCancel");

function hide(element) {
  if (!element) return;
  element.style.display = "none";
}

function show(element) {
  if (!element) return;
  element.style.display = "block";
}

function clearQuestionForm() {
  if (newQuestionForm) newQuestionForm.value = "";
  if (dom_answerA) dom_answerA.value = "";
  if (dom_answerB) dom_answerB.value = "";
  if (dom_answerC) dom_answerC.value = "";
  if (dom_answerD) dom_answerD.value = "";
  if (dom_correctAnswer) dom_correctAnswer.value = "A";
}

function showError(message) {
  if (!dom_formError) return;
  dom_formError.textContent = message;
  dom_formError.classList.remove("hidden");
}

function hideError() {
  if (!dom_formError) return;
  dom_formError.classList.add("hidden");
}

// Open 
function createNewQuestion() {
  hideError();
  clearQuestionForm();
  show(dom_questionModal);
}

//Create
function newQuestion() {
  const title = newQuestionForm ? newQuestionForm.value.trim() : "";
  const answerA = dom_answerA ? dom_answerA.value.trim() : "";
  const answerB = dom_answerB ? dom_answerB.value.trim() : "";
  const answerC = dom_answerC ? dom_answerC.value.trim() : "";
  const answerD = dom_answerD ? dom_answerD.value.trim() : "";

  if (!title || !answerA || !answerB || !answerC || !answerD) {
    showError("Please fill in all fields.");
    return;
  }

  hideError();

  // Create a new question
  if (dom_questionsContainer) {
    const item = document.createElement("div");
    item.className = "question-item";
    item.innerHTML = `
      <p>${title}</p>
      <div class="actions">
        <button class="edit">📝</button>
        <button class="delete">🗑️</button>
      </div>
    `;
    dom_questionsContainer.appendChild(item);
  }

  clearQuestionForm();
  hide(dom_questionModal);
}

// close 
if (dom_btnCancel) {
  dom_btnCancel.addEventListener("click", function () {
    hideError();
    clearQuestionForm();
    hide(dom_questionModal);
  });
}
