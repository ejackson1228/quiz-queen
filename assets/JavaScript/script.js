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
    q1a1.innerHTML = "<button class='answersbutton'>HyperText Marketing Language</button>";
    
    var q1a2 = document.createElement("li");
    q1a2.className= "answers"
    q1a2.id = "incorrect2";
    q1a2.innerHTML  = "<button class='answersbutton'>HyperTrophy Muscular Liability</button>";
    
    var q1a3 = document.createElement("li");
    q1a3.className = "answers";
    q1a3.id = "correct";
    q1a3.innerHTML = "<button class='answersbutton'>HyperText Markup Language</button>";
    
    var q1a4 = document.createElement("li");
    q1a4.className = "answers";
    q1a4.id = "incorrect3";
    q1a4.innerHTML = "<button class='answersbutton'>HollowText Markdown Legend</button>";
    
    var innerList1Div1 = document.createElement("div");
    innerList1Div1.className = "incorrect";
    q1AnswerList.appendChild(innerList1Div1);
    innerList1Div1.appendChild(q1a1);
    
    var innerList1Div2 = document.createElement("div");
    innerList1Div2.className = "incorrect";
    q1AnswerList.appendChild(innerList1Div2);
    innerList1Div2.appendChild(q1a2);
    
    var innerList1Div3 = document.createElement("div");
    innerList1Div3.className = "correct";
    q1AnswerList.appendChild(innerList1Div3);
    innerList1Div3.appendChild(q1a3);
    
    var innerList1Div4 = document.createElement("div");
    innerList1Div4.className = "incorrect";
    q1AnswerList.appendChild(innerList1Div4);
    innerList1Div4.appendChild(q1a4);
    
    

    
}
// loop through all possible incorrect buttons to return alert that it's wrong
var incorrectAnswers = document.getElementsByClassName("incorrect");
for (var i=0; i <incorrectAnswers.length; i++) {
    incorrectAnswers[i].addEventListener("click", incorrectAlert);
}
// loop through all possible correct answers to return alert if it's right
var correctAnswers = document.getElementsByClassName("correct");
for (var i=0; i < correctAnswers.length; i++) {
    correctAnswers[i].addEventListener("click", correctAlert);
}


    
    
var incorrectAlert = function() {
    window.alert("Incorrect! Try again!")
};

 var correctAlert = function() {
    window.alert("Correct! On to the next question.")
};

startbutton.addEventListener("click", initiateQuiz);
