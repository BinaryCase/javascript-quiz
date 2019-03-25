document.getElementById('button').addEventListener('click',function(){
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var answer = 0;

	if (question1 == "providence"){
		answer++;
	}
	if (question2 == 'Hartford'){
		answer++;
	}
	if (question3 == 'Albany'){
		answer++;
	}


	
	var result;

	if (answer == 3){
		result = 0;
	}
	else if (answer == 2){
		result = 1;
	}
	else if  (answer == 1){
		result = 1;
	}
	else  {
		result = 2;
	}

	var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
	var remarks = ["Great job!", "That's just okay", "You really need to do better"];

	// display result container
	document.getElementById('after_submit').style.visibility = 'visible';
	// display remarks
	document.getElementById("message").innerHTML = remarks[result];
	// total right answers
	document.getElementById("number_correct").innerHTML = "You got " + answer + " correct.";

	// picture to show success or failure 
	document.getElementById("picture").setAttribute('src', pictures[result]);

});
