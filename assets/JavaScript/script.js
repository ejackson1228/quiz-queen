var initiateQuiz = function(){
    createQuestion1();


}

var createQuestion1 = function() {
    // elements for timer
    var headerForTimer = document.createElement("header");
    document.getElementById("#body");
    body.appendChild(headerForTimer);
    var timerEl = document.createElement("p");
    timerEl.id = "insertTimer";
    timerEl.className = "timeQuiz";
    headerForTimer.appendChild(timerEl);
    // removing elements of starting page
    document.querySelector("#firstpage");
    firstpage.remove();
    //elements for question 1
    var page2 = document.createElement("div");
    page2.id = "page2"
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
    
    var innerList2Div3 = document.createElement("div");
    innerList2Div3.className = "correct";
    q1AnswerList.appendChild(innerList2Div3);
    innerList2Div3.appendChild(q1a3);
    
    var innerList2Div4 = document.createElement("div");
    innerList2Div4.className = "incorrect";
    q1AnswerList.appendChild(innerList2Div4);
    innerList2Div4.appendChild(q1a4);
    
    // loop through all possible incorrect buttons to return alert that it's wrong and subtract time 
var incorrectAnswers = document.getElementsByClassName("incorrect"); 
for (var i=0; i < incorrectAnswers.length; i++) {
    incorrectAnswers[i].addEventListener("click", function() {
        incorrectAlert();
        timeLeft = timeLeft - 10;
    })
};
// loop through all possible correct answers to return alert if it's right
var correctAnswers = document.getElementsByClassName("correct"); 
for (var i=0; i < correctAnswers.length; i++) {
    correctAnswers[i].addEventListener("click", function() {
        correctAlert();
        createQuestion2();
    })
};
}

var createQuestion2 = function () {
    // removing elements from question 1
    document.getElementById("#page2");
    page2.remove();
    //creating elements for question 2
    var page3 = document.createElement("div");
    page3.id = "page3"
    document.querySelector("#pagecontainer");
    pagecontainer.appendChild(page3);
    
    var question2 = document.createElement("h2");
    question2.className = "questions"
    question2.innerHTML = "<h2 class='questions'>What does CSS stand for?</h2>";
    page3.appendChild(question2)
    
    var q2AnswerList = document.createElement("ul");
    q2AnswerList.className = "answerslist";
    page3.appendChild(q2AnswerList);
    
    var q2a1 = document.createElement("li");
    q2a1.className = "answers"
    q2a1.id = "incorrect1";
    q2a1.innerHTML = "<button class='answersbutton'>Capture Santa's Sleigh</button>";
    
    var q2a2 = document.createElement("li");
    q2a2.className= "answers"
    q2a2.id = "incorrect2";
    q2a2.innerHTML  = "<button class='answersbutton'>Clear Selected Styles</button>";
    
    var q2a3 = document.createElement("li");
    q2a3.className = "answers";
    q2a3.id = "incorrect3";
    q2a3.innerHTML = "<button class='answersbutton'>Cascading Styling Selector</button>";
    
    var q2a4 = document.createElement("li");
    q2a4.className = "answers";
    q2a4.id = "correct";
    q2a4.innerHTML = "<button class='answersbutton'>Cascading StyleSheet</button>";
    
    var innerList2Div1 = document.createElement("div");
    innerList2Div1.className = "incorrect";
    q2AnswerList.appendChild(innerList2Div1);
    innerList2Div1.appendChild(q2a1);
    
    var innerList2Div2 = document.createElement("div");
    innerList2Div2.className = "incorrect";
    q2AnswerList.appendChild(innerList2Div2);
    innerList2Div2.appendChild(q2a2);
    
    var innerList2Div3 = document.createElement("div");
    innerList2Div3.className = "incorrect";
    q2AnswerList.appendChild(innerList2Div3);
    innerList2Div3.appendChild(q2a3);
    
    var innerList2Div4 = document.createElement("div");
    innerList2Div4.className = "correct";
    q2AnswerList.appendChild(innerList2Div4);
    innerList2Div4.appendChild(q2a4);

    // loop through all possible incorrect buttons to return alert that it's wrong and subtract time 
    var incorrectAnswers = document.getElementsByClassName("incorrect"); 
    for (var i=0; i < incorrectAnswers.length; i++) {
        incorrectAnswers[i].addEventListener("click", function() {
            incorrectAlert();
            timeLeft = timeLeft - 10;
        })
    };
// loop through all possible correct answers to return alert if it's right
    var correctAnswers = document.getElementsByClassName("correct"); 
    for (var i=0; i < correctAnswers.length; i++) {
        correctAnswers[i].addEventListener("click", function() {
            correctAlert();
            createQuestion3();
        })
    };
}

var createQuestion3 = function() {
    // remove elements from question 2
    document.getElementById("#page3");
    page3.remove();
    // generate HTML for page 4
    var page4 = document.createElement("div");
    page4.id = "page4";
    document.querySelector("#pagecontainer");
    pagecontainer.appendChild(page4);
    
    var question3 = document.createElement("h2");
    question3.className = "questions";
    question3.innerHTML = "<h2 class='questions'>What is the correct syntax for referring to an external script called 'xxx.js'?</h2>";
    page4.appendChild(question3);
    
    var q3AnswerList = document.createElement("ul");
    q3AnswerList.className = "answerslist";
    page4.appendChild(q3AnswerList);
    
    var q3a1 = document.createElement("li");
    q3a1.className = "answers";
    q3a1.id = "incorrect1";
    q3a1.innerHTML = "<button class='answersbutton'>script href='xxx.js'</button>";
    
    var q3a2 = document.createElement("li");
    q3a2.className= "answers";
    q3a2.id = "correct";
    q3a2.innerHTML  = "<button class='answersbutton'>script src='xxx.js'</button>";
    
    var q3a3 = document.createElement("li");
    q3a3.className = "answers";
    q3a3.id = "incorrect2";
    q3a3.innerHTML = "<button class='answersbutton'>script name='xxx.js'</button>";
    
    var q3a4 = document.createElement("li");
    q3a4.className = "answers";
    q3a4.id = "incorrect3";
    q3a4.innerHTML = "<button class='answersbutton'>script alt='xxx.js'</button>";
    
    var innerList3Div1 = document.createElement("div");
    innerList3Div1.className = "incorrect";
    q3AnswerList.appendChild(innerList3Div1);
    innerList3Div1.appendChild(q3a1);
    
    var innerList3Div2 = document.createElement("div");
    innerList3Div2.className = "correct";
    q3AnswerList.appendChild(innerList3Div2);
    innerList3Div2.appendChild(q3a2);
    
    var innerList3Div3 = document.createElement("div");
    innerList3Div3.className = "incorrect";
    q3AnswerList.appendChild(innerList3Div3);
    innerList3Div3.appendChild(q3a3);
    
    var innerList3Div4 = document.createElement("div");
    innerList3Div4.className = "incorrect";
    q3AnswerList.appendChild(innerList3Div4);
    innerList3Div4.appendChild(q3a4);


    // loop through all possible incorrect buttons to return alert that it's wrong and subtract time 
    var incorrectAnswers = document.getElementsByClassName("incorrect"); 
        for (var i=0; i < incorrectAnswers.length; i++) {
            incorrectAnswers[i].addEventListener("click", function() {
                incorrectAlert();
                timeLeft = timeLeft - 10;
            })
        };
    // loop through all possible correct answers to return alert if it's right
    var correctAnswers = document.getElementsByClassName("correct"); 
        for (var i=0; i < correctAnswers.length; i++) {
            correctAnswers[i].addEventListener("click", function() {
                correctAlert();
                // createQuestion4();
            })
        };
}

var createQuestion4 = function() {
    
}
    
var incorrectAlert = function() {
    window.alert("Incorrect! Try again!")
};

 var correctAlert = function() {
    window.alert("Correct! On to the next question.")
};

// timer set at 2 minutes with wrong answer subtracting time
var timeLeft = 120;
var quizTimer = setInterval(function(){
    if(timeLeft <= 0){ //if time left = 0, alert the user and go back to starting page
        clearInterval(quizTimer);
        window.alert("Time's up!");
        window.location.reload();
    } else { // if time > 0, display time left
        document.getElementById("insertTimer").innerHTML = timeLeft + " seconds left";
    }
    document.getElementById("insertTimer").value = 120 - timeLeft;
    timeLeft -= 1;
}, 1000);


// starting page button to initiate quiz
startbutton.addEventListener("click", initiateQuiz); 
