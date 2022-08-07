var initiateQuiz = function(){
    createQuestion1();


}

var createQuestion1 = function() {
    document.querySelector("#firstpage");
    firstpage.remove();
    var page2 = document.createElement("div");
    document.querySelector("#pagecontainer");
    pagecontainer.appendChild(page2);
    var question1 = document.createElement("h2");
    question1.className = "questions"
    question1.innerHTML = "<h2 class='questions'>What does HTML stand for?</h2>";
    page2.appendChild(question1)
    var q1AnswerList = document.createElement("ul");
    q1AnswerList.className = "answerslist";
    page2.appendChild(q1AnswerList);
    var q1a1 = document.createElement("li");
    q1a1.className = "answers"
    q1a1.id = "incorrect1";
    q1a1.innerHTML = "<button class='answersbutton' id='incorrect'>HyperText Marketing Language</button>";
    q1AnswerList.appendChild(q1a1);
    var q1a2 = document.createElement("li");
    q1a2.className= "answers"
    q1a2.id = "incorrect2";
    q1a2.innerHTML  = "<button class='answersbutton' id='incorrect'>HyperTrophy Muscular Liability</button>";
    q1AnswerList.appendChild(q1a2);
    var q1a3 = document.createElement("li");
    q1a3.className = "answers";
    q1a3.id = "correct";
    q1a3.innerHTML = "<button class='answersbutton' id='correct'>HyperText Markup Language</button>";
    q1AnswerList.appendChild(q1a3);
    var q1a4 = document.createElement("li");
    q1a4.className = "answers";
    q1a4.id = "incorrect3";
    q1a4.innerHTML = "<button class='answersbutton' id='incorrect'>HollowText Markdown Legend</button>";
    q1AnswerList.appendChild(q1a4);
    
    
    

    
}

var incorrectAnswers = document.querySelectorAll("incorrect1", "incorrect2", "incorrect3");
incorrectAnswers.addEventListener("click", incorrectAlert);

document.getElementById('correct').addEventListener("click", correctAlert);
    
    
var incorrectAlert = function() {
    window.alert("Incorrect! Try again!")
};

 var correctAlert = function() {
    window.alert("Correct! On to the next question.")
};

startbutton.addEventListener("click", initiateQuiz);
