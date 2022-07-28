    //  global variables
var startbtn = document.querySelector("#start-btn");
var restartbtn = document.querySelector("#restart-btn");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var btn4 = document.querySelector("#btn4");
var answerText = document.querySelector(".answer");
var question = document.querySelector("#question");
var timerElement = document.querySelector("#timer");
var timerCount;
var timer;

var score = 0;
    //  hide sections
document.getElementById("hide-quiz").style.display = "none";
document.getElementById("restart-btn").style.display = "none";
document.getElementById("highscore-board").style.display = "none";

function mainMenu(){
    document.getElementById("hide-quiz").style.display = "none";
    document.getElementById("restart-btn").style.display = "none";
    document.getElementById("highscore-board").style.display = "none";
    document.getElementById("intro").style.display = "flex";
}

answerText.style.display = "none";

startbtn.addEventListener("click", startPressed);

function startPressed(){
    document.getElementById("hide-quiz").style.display = "flex";
    document.getElementById("intro").style.display = "none";
    timerCount = 100;
    startTimer();
    questionSet1();
}

function startTimer(){
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount < 0){ 
            clearInterval(timer);
            displayScore();
        }
    }, 1000);
}

    //  true answer

function setTrue(){
    answerText.style.display = "block";
    answerText.textContent = "True";
    answerText.style.color = "#259942";
}

    // false answers

function setFalse1() {
    answerText.style.display = "block";
    answerText.textContent = "False";
    answerText.style.color = "#eb4034";
    timerCount = timerCount - 10;
    questionSet2();
}

function correctSet1(){
    setTrue();
    score++;
    console.log(score);
    questionSet2();
}

function questionSet1() {
    question.textContent = "Which data type is NOT used in javascript?";
    btn1.textContent = "Boolean";
    btn2.textContent = "Number";
    btn3.textContent = "Float";
    btn4.textContent = "String";

    btn3.addEventListener("click", correctSet1);    //  3 true

    btn1.addEventListener("click", setFalse1);  //  1 false

    btn2.addEventListener("click", setFalse1);  // 2 false

    btn4.addEventListener("click", setFalse1);  //  4 false
}

function setFalse2() {
    answerText.style.display = "block";
    answerText.textContent = "False";
    answerText.style.color = "#eb4034";
    timerCount = timerCount - 10;
    questionSet3();
}

function correctSet2(){
    setTrue();
    score++;
    console.log(score);
    questionSet3();
}

function questionSet2() {
    question.textContent = "Arrays can be used to store which of the following?";
    btn1.textContent = "Boolean values";
    btn2.textContent = "Numbers";
    btn3.textContent = "Strings";
    btn4.textContent = "All of the above";
    //  remove event listener to prevent listener conflict 
    btn3.removeEventListener("click", correctSet1);  // 3 true
    
    btn1.removeEventListener("click", setFalse1);    // 1 false
    btn2.removeEventListener("click", setFalse1);    // 2 false
    btn4.removeEventListener("click", setFalse1);    // 4 false
    

    btn4.addEventListener("click", correctSet2);    //  4   true

    btn1.addEventListener("click", setFalse2);  //  1   false

    btn2.addEventListener("click", setFalse2);  //  2   false

    btn3.addEventListener("click", setFalse2);  //  3   false
}

function setFalse3() {
    answerText.style.display = "block";
    answerText.textContent = "False";
    answerText.style.color = "#eb4034";
    timerCount = timerCount - 10;
    questionSet4();
}

function correctSet3(){
    setTrue();
    score++;
    console.log(score);
    questionSet4();
}

function questionSet3() {
    question.textContent = "An object literal is defined with ___?";
    btn1.textContent = "Parenthesis";
    btn2.textContent = "Curly brackets";
    btn3.textContent = "Question marks";
    btn4.textContent = "None of the above";

    btn4.removeEventListener("click", correctSet2); // 4 true
    btn1.removeEventListener("click", setFalse2); // 1 false
    btn2.removeEventListener("click", setFalse2); // 2 false  
    btn3.removeEventListener("click", setFalse2); // 3 false

    btn2.addEventListener("click", correctSet3);    //  2   true

    btn1.addEventListener("click", setFalse3);  //  1   false

    btn3.addEventListener("click", setFalse3);  //  3   false

    btn4.addEventListener("click", setFalse3);  //  4   false
}

function setFalse4() {
    answerText.style.display = "block";
    answerText.textContent = "False";
    answerText.style.color = "#eb4034";
    timerCount = timerCount - 10;
    questionSet5();
}

function correctSet4(){
    setTrue();
    score++;
    console.log(score);
    questionSet5();
}

function questionSet4() {
    question.textContent = "Strings must be enclosed with ___ when being assigned to variables?";
    btn1.textContent = "Exclamation marks";
    btn2.textContent = "Speech marks";
    btn3.textContent = "Brackets";
    btn4.textContent = "Commas";

    btn2.removeEventListener("click", correctSet3); // 2 true
    btn1.removeEventListener("click", setFalse3); // 1 false
    btn3.removeEventListener("click", setFalse3); // 3 false   
    btn4.removeEventListener("click", setFalse3); // 4 false

    btn2.addEventListener("click", correctSet4);    //  2   true

    btn1.addEventListener("click", setFalse4);  //  1   false

    btn3.addEventListener("click", setFalse4);  //  3   false

    btn4.addEventListener("click", setFalse4);  //  4   false
}

function setFalse5() {
    answerText.style.display = "block";
    answerText.textContent = "False";
    answerText.style.color = "#eb4034";
    timerCount = timerCount - 10;
    displayScore();
}

function correctSet5(){
    setTrue();
    score++;
    console.log(score);
    displayScore();
}

function questionSet5(){
    question.textContent = "Which debugging tool is most commonly used in web development?";
    btn1.textContent = "Command line";
    btn2.textContent = "Gitlab IDE";
    btn3.textContent = "Mozilla extensions";
    btn4.textContent = "Chrome dev tools";
    localStorage.setItem("test","testaaa");
    btn2.removeEventListener("click", correctSet4); // 2 true

    btn1.removeEventListener("click", setFalse4); // 1 false
    btn3.removeEventListener("click", setFalse4); // 3 false    
    btn4.removeEventListener("click", setFalse4); // 4 false

    btn4.addEventListener("click", correctSet5);    //  4   true

    btn1.addEventListener("click", setFalse5);  //  1   false

    btn2.addEventListener("click", setFalse5);  //  2   false

    btn3.addEventListener("click", setFalse5);  //  3   false
}
    //  linked to onclick submit button
function getUsername(){
    var username = document.querySelector("#Uname").value;
    console.log(username);
    console.log(score);
    console.log(timerCount);
    var userInfo = {
        userNameObject : username,
        scoreObject : score,
        timerCountObject : timerCount
    };
    
    localStorage.setItem('userInfo', JSON.stringify(userInfo));

    console.log(userInfo);

    console.log(localStorage.getItem("userInfo"))
}

function displayScore(){
    document.getElementById("hide-quiz").style.display = "none";
    document.getElementById("restart-btn").style.display = "none";
    document.getElementById("highscore-board").style.display = "flex";
    document.getElementById("intro").style.display = "none";
}