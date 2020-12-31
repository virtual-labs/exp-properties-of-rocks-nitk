
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: "The branch of study on rocks is called as",
      answers: {
        a: "Rockology",
        b: "Petrology",
        c: "Retrology",
        d: "None of the above"
      },
      correctAnswer: "b"
    },
    {
      question: "Mineral is composed of multiple rocks. (Say True or False)",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "Amygdaloidal texture consist",
      answers: {
        a: "Pores or vesicles due to release of gaseous substances",
        b: "Amorphous and breaks with concentric curves",
        c: "Fossil remains buried, cemented together",
        d: "None of the above"
      },
      correctAnswer: "a"
    },
    {
      question: "Interlocking of shapeless grains or crystalline minerals represents",
      answers: {
        a: "Schistose",
        b: "Massive",
        c: "Granulose",
        d: "Equigranular"
      },
      correctAnswer: "c"
    },
    {
      question: "Rock which consists alternate bands of light coloured and dark coloured mineral is",
      answers: {
        a: "Gneiss",
        b: "Laterite",
        c: "Gabbro",
        d: "Limestone"
      },
      correctAnswer: "a"
    }
  ];



// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
