$(document).ready(function() {
		$("#start-button").click(function() {
			var number = 60;
	   		 $("#start-button").on("click", start); 
	   		 $("#finished-button").on("click", finish)  
	   		 $("#reset").on("click", restart);
		

		function start(){
	    	counter = setInterval(timer, 1000);
	    	showMe("#multi-choice");
	    	showMe("#finished-button");
		    hideMe("#start-button");
		    hideMe("#reset-button");
		    hideMe("#afterFinished");
		}

		function timer(){
	      number-- 
	      $(".timer").html("<h2>You have " + number + " seconds remaing</h2>" );
	      if (number == 0){
	        alert("Times Up!")
	        stop(); 
	      }
	    }

	    function stop(){
	    	clearInterval(counter); 
	    	$("#afterFinished").show();
	    	$("#reset-button").show();
			$("#multi-choice").hide();
			$("#finished-button").hide();
	    }

	     function finish(){
    	number = 1; 
    	clearInterval(counter); 
    	timer();
    	}

    	function restart(){
    	number = 60;
    	start();
   	    }

    });

});


function check() {

	var question1 = document.trivia.question1.value;
	var question2 = document.trivia.question2.value;
	var question3 = document.trivia.question3.value;
	var question4 = document.trivia.question4.value;
	var question5 = document.trivia.question5.value;
	var question6 = document.trivia.question6.value;
	var question7 = document.trivia.question7.value;
	var correct = 0;
	var incorrect = 0;

	if (question1 == "Pittsburgh Steelers") {
		correct++;
	}
	else if (question1 == "New England Patriots", "Dallas Cowboys", "Carolina Panthers") {
		incorrect++;
	}

	if (question2 == "Dick Whitman") {
		correct++;
	}
	else if (question2 == "Jon Hamm", "John Bacon") {
		incorrect++;
	}

	if (question3 == "33") {
		correct++;
	}
	else if (question3 == "24", "23", "99") {
		incorrect++;
	}

	if (question4 == "Aubrey Graham") {
		correct++;
	}
	else if (question4 == "Drizzy", "Jimmy Brooks") {
		incorrect++;
	}

	if (question5 == "Montreal Canadians") {
		correct++;
	}
	else if (question5 == "Pittsburgh Penguins", "Boston Bruins", "Detroit Red Wings") {
		incorrect++;
	}

	if (question6 == "50") {
		correct++;
	}
	else if (question6 == "XLI", "XLIV", "XLVIII") {
		incorrect++;
	}

	if (question7 == "Megatron Griffin") {
		correct++;
	}
	else if (question7 == "Megan Griffin", "Morgan Griffin") {
		incorrect++;
	}




	document.getElementById("afterFinished").style.visibility = "visible";
	document.getElementById("numberCorrect").innerHTML = "You got " + correct + " correct!";
}