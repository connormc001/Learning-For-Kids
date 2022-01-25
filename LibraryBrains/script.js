
var quizQuestions = document.getElementById("quiz-questions");
var timer = document.getElementById("timer");
var btnStart = document.getElementById("btn-start");
var timecounter = document.getElementById("timecounter");
var titleitem = document.getElementById("title-item");
var nextQuestions 
var questionanswers = document.getElementById("question-answers");
var myScore = document.getElementById("score");
var btnScore = document.getElementById("btnScore");
var currentindex = 0;
var score = 0;
var count = 75;
var alert =document.getElementById("alert");
var info = document.getElementById("info");
var allScores = [];
var storedScores = JSON.parse(localStorage.getItem("userData"));

var questions = [
    {
        title: "A four-wheeled road vehicle that is powered by an engine and is able to carry a small number of people",
        choices: ["Motorbike","Ship","Bike", "Car"],
        answer : "Car"    
    },
    {
        title: "The person in command of a ship.",
        choices: ["Captain","Sergeant","Programmer", "Taxi-Driver"],
        answer : "Captain"    
    },
    {
        title: "A machine that can be programmed to carry out sequences of arithmetic or logical operations automatically",
        choices: ["Toaster","Football","Radio", "Computer"],
        answer : "Computer"    
    },
    {
        title: "A male member of a police force.",
        choices: ["Policeman","Captain","Sailor","Sheriff"],
        answer : "Policeman"    
    },
    {
        title: "A person who writes for newspapers, magazines, or news websites or prepares news to be broadcast",
        choices: ["Journalist","Batman","Robin", "Policeman"],
        answer : "Journalist"    
    },

    {
        title: "A building for human habitation, especially one that consists of a ground floor and one or more upper storeys.",
        choices: ["House","Ship","Tower", "Car"],
        answer : "House"    
    },

    {
        title: "A device for recording visual images in the form of photographs, film, or video signals.",
        choices: ["Camera","Computer","Towel", "Car"],
        answer : "Camera"    
    },

    {
        title: "A large, long-necked ungulate mammal of arid country, with long slender legs, broad cushioned feet, and either one or two humps on the back.",
        choices: ["Dog","Cat","Camel", "Sheep"],
        answer : "Camel"    
    },
]

btnStart.addEventListener("click", starQuiz);
function starQuiz(){
    if(storedScores !==null) {
        allScores = storedScores;
    }
    info.classList.add("d-none")
    btnStart.classList.add("d-none")
    timecounter.classList.remove("d-none")
    quizQuestions.classList.remove("d-none")
    nextQuestions= questions[currentindex]
    console.log(nextQuestions.title)
    
        displayQuestion(nextQuestions)

    gametime()
}
btnScore.addEventListener("click" , function(){
    let name = document.getElementById("inputScore").value
    scorePage(name, count)
});

// Timer

function gametime(){

    var timeinterval = setInterval(function(){
        timer.innerText = count
         count--;
        }, 1000);

}

function scorePage(a, b) {

    var userData = {
        inits: a,
        userScore: b
    };
    allScores.push(userData);


    localStorage.setItem("userData", JSON.stringify(allScores));
    location.href = "score.html";
}
function displaynextQuestion(e){
    currentindex++
    if(currentindex < questions.length){
        correction(e.target.innerText == nextQuestions.answer)
        questionanswers.innerHTML=""
        if(currentindex < questions.length){    
            nextQuestions= questions[currentindex]
            displayQuestion(nextQuestions)  
        }else {
            currentindex = 0
            displayQuestion(nextQuestions)  
        }

    }else{
        console.log("endgame")
        endgame()
        

    }
    
     
}

function displayQuestion(question){
    titleitem.innerText=question.title
    question.choices.forEach(element => {
     var button =document.createElement("button")
    button.className="btn-primary btn-block text-left"
    button.innerText=element
    questionanswers.appendChild(button)
    button.addEventListener("click", displaynextQuestion)
    });
}

function correction(response){
    
    if(response){
        alert.innerText= "Correct"
        console.log("Correct")
    }else {
        alert.innerText="Incorrect"
        count = count -15
        timer.innerHTML = count
        console.log("Incorrect")

    }
    setTimeout(function(){
        alert.innerText=""
    
        }, 1000);

}
 function endgame (){
    myScore.innaText = count
    addscore.classList.remove("d-none")
    timecounter.classList.add("d-none")
    quizQuestions.classList.add("d-none")
    addscore.classList.remove("d-none")


 }