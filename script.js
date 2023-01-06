//create questions
var quizQuestions = [
{
    title: "Arrays in JavaScript can be used to store ____.",
    answers: ["numbers and stings", "other arrays", "booleans", "all of the above"],
    correctAnswer: 3
},

{
    title: "Commonly used datatypes do not include:",
    answers: ["strings", "booleans", "alerts","numbers"],
    correctAnswer: 1
},

{
    title: "The condition in an if/else statement is enclosed in _____.",
    answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correctAnswer: 2
},

{
    title: "String values must be enclosed in ____ when being assigned to variables.",
    answers: ["commas", "curly brackets", "quotes", "parentheses"],
    correctAnswer: 3
},

{
    title: "A very useful tool for  used during development and debugging for printing content to the debugger is:",
    answers: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    correctAnswer: 3
}
];



//create quiz container variables and put in function
function showQuestions() {
    var titleDiv = document.getElementById('title');
        titleDiv.textContent = quizQuestions.title;

var choices = document.querySelectorAll(".choices")

choices.forEach(function(element, index) {
    element.textContent = quizQuestions.choices[index]
;})



}

showQuestions(quizQuestions)
































// //create start-button button variable
var startButton = document.getElementById('start-button');
startButton.addEventListener("click", function(){
    console.log("click");
});





// //generate questions
// generateQuiz(quizQuestions, quizContainer, resultsContainer, startButton);

// function generateQuiz (questions, quizContainer, resultsContainer, startButton){

//     function showQuestions(questions, quizContainer) {

//         var output = [];
//         var answers;

//         for( var i=0; i<questions.length; i++) {

//             answers = []; //to reset list of answers

//             for(number in questions[i].answers){
//                 answers.push(
//                     "<label>"
//                     + "<input type="radio" name="question" + i +"value="+number>"
//                     + number + ":"
//                     + questions[i].answer[number]
//                     +"</label> "
//                 );
//             }
//         }

//     output.push(
//         "<div class="question">" + questions[i].questions + "</div>"
//         +"div class="answers">" + answers.join("") + "</div>"
//     );

// } 

//     quizContainer.innerHTML = output.join("");
// }

// showQuestions(questions, quizContainer);


// function showResults(questions, quizContainer, resultsContainer) {
   
//     //variable for gathering answers from quiz
//     var answerContainers = quizContainer.querySelectorAll(".answers");

//     //establish record of answers
//     var userAnswer = "";
//     var numCorrect = 0;

//     // loop for the questons
// 	for(var i=0; i<questions.length; i++){

// 		// retrieve the chosen answer
// 		userAnswer = (answerContainers[i].querySelector("input[name=question"+i+']:checked')||{}).value; //OR operator used to tell system to create empty object to avoid error when no answer selected
		
// 		// correct? if/else
// 		if(userAnswer===questions[i].correctAnswer){
	
// 			numCorrect++; //increases the number of correct answers being tracked
			
// 			// style the answer light purp
// 			answerContainers[i].style.color = 'lightpurple';
// 		}
// 		// if answer is wrong or blank
// 		else{
// 			// color the answers red
// 			answerContainers[i].style.color = 'red';
// 		}
// 	}

// 	// show number of correct answers out of total
// 	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
// }

// showQuestions(questions, quizContainer)

// //show results once start-buttonted
// startButton.on("click", function() {
//     showResults(questions, quizQuestions, resultsContainer);
// })
