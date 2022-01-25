
var ageGroup;

function ageSelected(age) {
	
	if (age == '6-9') {
	
		document.getElementById("difficulty").innerHTML = "You have selected: <b>Ages 6-9</b>"
		
		
		document.getElementById("firstAudio").setAttribute("src","audio/begin.m4a");
		document.getElementById("audioContainerOne").load();
		
		document.getElementById("secondAudio").setAttribute("src","audio/dinner.m4a");
		document.getElementById("audioContainerTwo").load();
		
		document.getElementById("thirdAudio").setAttribute("src","audio/relationship.m4a");
		document.getElementById("audioContainerThree").load();
		
		document.getElementById("fourthAudio").setAttribute("src","audio/friday.m4a");
		document.getElementById("audioContainerFour").load();
		
		document.getElementById("fifthAudio").setAttribute("src","audio/dog.m4a");
		document.getElementById("audioContainerFive").load();
		
		ageGroup = "6-9";
	}
	else if (age == '10-13') {
	
		document.getElementById("difficulty").innerHTML = "You have selected: <b>Ages 10-13</b>"
		
		
		document.getElementById("firstAudio").setAttribute("src","audio/politics.m4a");
		document.getElementById("audioContainerOne").load();
		
		document.getElementById("secondAudio").setAttribute("src","audio/funny.m4a");
		document.getElementById("audioContainerTwo").load();
		
		document.getElementById("thirdAudio").setAttribute("src","audio/building.m4a");
		document.getElementById("audioContainerThree").load();
		
		document.getElementById("fourthAudio").setAttribute("src","audio/recycle.m4a");
		document.getElementById("audioContainerFour").load();
		
		document.getElementById("fifthAudio").setAttribute("src","audio/gameshow.m4a");
		document.getElementById("audioContainerFive").load();
		
		ageGroup = "10-13";
	}
	else if (age == '14-17') {
		
		document.getElementById("difficulty").innerHTML = "You have selected: <b>Ages 14-17</b>"
	
		document.getElementById("firstAudio").setAttribute("src","audio/elimination.m4a");
		document.getElementById("audioContainerOne").load();
		
		document.getElementById("secondAudio").setAttribute("src","audio/technique.m4a");
		document.getElementById("audioContainerTwo").load();
		
		document.getElementById("thirdAudio").setAttribute("src","audio/attack.m4a");
		document.getElementById("audioContainerThree").load();
		
		document.getElementById("fourthAudio").setAttribute("src","audio/ambiguous.m4a");
		document.getElementById("audioContainerFour").load();
		
		document.getElementById("fifthAudio").setAttribute("src","audio/camouflage.m4a");
		document.getElementById("audioContainerFive").load();
		
		ageGroup = "14-17";
	}

	localStorage.setItem("ageGroup", ageGroup);
	
	
	document.getElementById("age69").style.display = "none";
	document.getElementById("age1013").style.display = "none";
	document.getElementById("age1417").style.display = "none";
	
	document.getElementById("btnReset").style.display = "block";
}

var count = 0;

function validate(event) {

	var textBox = document.getElementsByClassName("textBox");
	
	var i = textBox.length;
	
	for (i; i > count; i--) {
		if (textBox[i-1].value == "") {
			count += 1;
		} else {
			count = 0;
		}
	}
	
	if (count != 0) {
		window.alert("Please answer all questions student");
		event.preventDefault();
	} else {
		window.alert("Are you sure you wish to end quiz?")
		return true;
	}	
}

function submitAnswers() {
	
	var answerOne = document.getElementById("firstAnswer").value;
	var answerTwo = document.getElementById("secondAnswer").value;
	var answerThree = document.getElementById("thirdAnswer").value;
	var answerFour = document.getElementById("fourthAnswer").value;
	var answerFive = document.getElementById("fifthAnswer").value;
	
	var lowAnswerOne = toLowerCase(answerOne);
	var lowAnswerTwo = toLowerCase(answerTwo);
	var lowAnswerThree = toLowerCase(answerThree);
	var lowAanswerFour = toLowerCase(answerFour);
	var lowAanswerFive = toLowerCase(answerFive);
	
	localStorage.setItem("answerOne", lowAnswerOne);
	localStorage.setItem("answerTwo", lowAnswerTwo);
	localStorage.setItem("answerThree", lowAnswerThree);
	localStorage.setItem("answerFour", lowAanswerFour);
	localStorage.setItem("answerFive", lowAanswerFive);
	
	return true;
}

function typeLetter(letter) {
	
	if (document.getElementById("second").style.display == "block") {
		document.getElementById("secondAnswer").value += letter;
	} 
	else if (document.getElementById("third").style.display == "block") {
		document.getElementById("thirdAnswer").value += letter;
	} 
	else if (document.getElementById("fourth").style.display == "block") {
		document.getElementById("fourthAnswer").value += letter;
	} 
	else if (document.getElementById("fifth").style.display == "block") {
		document.getElementById("fifthAnswer").value += letter;
	} 
	else {
		document.getElementById("firstAnswer").value += letter;
	}
}

function nextQuestionOne() {	
	document.getElementById("first").style.display = "none";
	document.getElementById("second").style.display = "block";
	document.getElementById("q2").innerHTML = "&#9899";
}

function previousQuestionOne() {
	document.getElementById("first").style.display = "block";
	document.getElementById("second").style.display = "none";
	document.getElementById("q2").innerHTML = "&#9898";
}

function nextQuestionTwo() {
	document.getElementById("second").style.display = "none";
	document.getElementById("third").style.display = "block";
	document.getElementById("q3").innerHTML = "&#9899";
}

function previousQuestionTwo() {
	document.getElementById("third").style.display = "none";
	document.getElementById("second").style.display = "block";
	document.getElementById("q3").innerHTML = "&#9898";
}

function nextQuestionThree() {
	document.getElementById("third").style.display = "none";
	document.getElementById("fourth").style.display = "block";
	document.getElementById("q4").innerHTML = "&#9899";
}

function previousQuestionThree() {
	document.getElementById("fourth").style.display = "none";
	document.getElementById("third").style.display = "block";
	document.getElementById("q4").innerHTML = "&#9898";
}

function nextQuestionFour() {
	document.getElementById("fourth").style.display = "none";
	document.getElementById("fifth").style.display = "block";
	document.getElementById("q5").innerHTML = "&#9899";
}

function previousQuestionFour() {
	document.getElementById("fifth").style.display = "none";
	document.getElementById("fourth").style.display = "block";
	document.getElementById("q5").innerHTML = "&#9898";
}


function refreshPage() {
	var confirmRefresh = confirm("Do you really want to restart the game?");
	
	if (confirmRefresh) {
		location.reload(true);
	}
}