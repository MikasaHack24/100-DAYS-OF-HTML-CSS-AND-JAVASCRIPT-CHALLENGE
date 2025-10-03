let questions = [
    {question: "1.  What is 2 + 2?",
     option: ["5", "7", "4"],
     answer: "4"

    },

    {
        question: "2.  what is 5 + 5?",
        option: ["10", "15", "20"],
        answer: "10"
    },

    {
        question: "3.  what is 15 + 4?",
        option: ["10", "22", "19"],
        answer: "19"
    },

    {
        question: "4.  what is 12 + 5?",
        option: ["17", "19", "25"],
        answer: "17"
    },

    {
        question: "5.  what is 32 + 15?",
        option: ["50", "47", "67"],
        answer: "47"
    }
];

let questionNo = 0;
let chosenAnswers = [];



function showQuestion(){
    let quiz = questions[questionNo];
    document.getElementById("question").innerHTML = quiz.question;
    document.getElementById("options").innerHTML = `<input type="radio" name="answer" value="${quiz.option[0]}"> ${quiz.option[0]}<br>
                                                    <input type="radio" name="answer" value="${quiz.option[1]}"> ${quiz.option[1]}<br>
                                                    <input type="radio" name="answer" value"="${quiz.option[2]}"> ${quiz.option[2]}<br>`
};

showQuestion();

document.getElementById("next").onclick = function(){
    
    if(questionNo<questions.length - 1){
        questionNo++;
        showQuestion();
        document.getElementById("display").innerHTML = ""
    }

    else{
        document.getElementById("display").innerHTML = "Quiz finished"
    }
}

document.getElementById("back").onclick = function(){
  
    if (questionNo > 0){
          questionNo--;
        showQuestion();
        document.getElementById("display").innerHTML = ""
    }

    else{
        document.getElementById("display").innerHTML = "You are at the first question";
    }


}

document.getElementById("submit").onclick = function(){
   
    let selected = document.querySelector('input[name="answer:"]:checked');
    if(selected){
        chosenAnswers[questionNo] = selected.value;
    }

    else{
        finishQuiz();
    }

}

function finishQuiz() {
    let score = 0;
    let review = "";

    for (let i = 0; i < questions.length; i++) {
        if (chosenAnswers[i] === questions[i].answer) {
            score++;
        } else {
            review += `<p>❌ Q: ${questions[i].question} <br> Correct Answer: ${questions[i].answer}</p>`;
        }
    }

    document.getElementById("display").innerHTML = 
        `✅ You scored ${score} out of ${questions.length} <br><br> ${review}`;
}