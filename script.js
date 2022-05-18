var timer=60;
var quizEl = document.getElementById("timer");
var startButton = document.getElementById("start-btn");
var viewHighScores = document.getElementById("highscores");
var restartButton = document.getElementById("restart-btn");
var clearScoreButton = document.getElementById("clear-btn");
var gameOverButton = document.getElementById("gameOverBtns");
// var nextButton= document.getElementById("next-btn");
var checkAnswer = document.getElementById("check-answer");
var playerScore = document.getElementById("your-score");
var answerButton =document.getElementById("answer-buttons");
var startContainer =document.getElementById("start-container");
var viewHighScores = document.getElementById("high-scores");
// var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var questionEl = document.getElementById("question");
var questionContainer = document.getElementById("question-container");

// quiz questions
var myQuestions = [
	{
		question: "What is 10/2?",
		answers: [
			 '3',
			 '5',
			 '115'
        ],
		correctAnswer: '5'
    },
	{
		question: "What is 30/3?",
		answers: [
			'3',
			 '5',
			 '10'
        ],
		correctAnswer: '10'
	}
];

    function showQuestions(){
        var currentQuestion = myQuestions[0]
        questionEl.innerText = myQuestions[0].question
        answerButton.innerHTML = ""
        currentQuestion.answers.forEach(answer => {
var button = document.createElement("button")
button.classList.add("btn")
button.textContent = answer
answerButton.appendChild (button);
         })

        
        // we'll need a place to store the output and the answer choices
        // var output = [];
        // var answers;
    
        // // for each question...
        // for(var i=0; i<questions.length; i++){
            
        //     // first reset the list of answers
        //     answers = [];
    
        //     // for each available answer to this question...
        //     for(letter in questions[i].answers){
    
        //         // ...add an html radio button
        //         answers.push(
        //             '<label>'
        //                 + '<input type="radio" name="question'+i+'" value="'+letter+'">'
        //                 + letter + ': '
        //                 + questions[i].answers[letter]
        //             + '</label>'
        //         );
        //     }
    
        //     // add this question and its answers to the output
        //     output.push(
        //         '<div class="question">' + questions[i].question + '</div>'
        //         + '<div class="answers">' + answers.join('') + '</div>'
        //     );
        // }
    
        // // finally combine our output list into one string of html and put it on the page
        // quizContainer.innerHTML = output.join('');
    }

function showResults(questions, quizContainer, resultsContainer){
    
	
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){
    
            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }
    
        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    function myTimer() {
    document.getElementById("timer").innerHTML = timer--
    if (i < 10) {i = "0" + i}
    return i;
    };
    

// show the questions
const startChallenge = function() {
    showQuestions()
    setInterval(myTimer, 1000);
    questionContainer.classList.remove("hide");
}

// when user clicks submit, show results
submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
}
startButton.onclick = startChallenge