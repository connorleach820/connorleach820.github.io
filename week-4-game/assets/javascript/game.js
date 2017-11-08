$(document).ready(function() {

	var userTotal = 0;
	var wins = 0;
	var losses = 0;

	$("#win").text(wins);
	$("#loss").text(losses);

	var Random = Math.floor(Math.random()*101)+19;

	$(".value").text(Random);

	var random1 = Math.floor(Math.random()*11)+1;
	var random2 = Math.floor(Math.random()*11)+1;
	var random3 = Math.floor(Math.random()*11)+1;
	var random4 = Math.floor(Math.random()*11)+1;



	function reset() {
		Random = Math.floor(Math.random()*101)+19;
		$(".value").text(Random);
		random1 = Math.floor(Math.random()*11)+1;
		random2 = Math.floor(Math.random()*11)+1;
		random3 = Math.floor(Math.random()*11)+1;
		random4 = Math.floor(Math.random()*11)+1;
		userTotal = 0;
		$("#userScore").text(userTotal);
	}	

	function win() {
		alert("You won!! Let's Play again!");
		wins++;
		$("#win").text(wins);
		reset();
	}

	function lose() {
		alert("Sorry, you lost! Try again.");
		losses++;
		$("#loss").text(losses);
		reset();
	}

	$("#red").on("click", function(){
		userTotal = userTotal + random1;
		console.log("New userTotal= " + userTotal);
		$("#userScore").text(userTotal);
		if (userTotal == Random){
			win();
		}
		else if (userTotal > Random) {
			lose();
		}
	})

	$("#green").on("click", function(){
		userTotal = userTotal + random2;
		console.log("New userTotal= " + userTotal);
		$("#userScore").text(userTotal);
		if (userTotal == Random){
			win();
		}
		else if (userTotal > Random) {
			lose();
		}
	})

	$("#yellow").on("click", function(){
		userTotal = userTotal + random3;
		console.log("New userTotal= " + userTotal);
		$("#userScore").text(userTotal);
		if (userTotal == Random){
			win();
		}
		else if (userTotal > Random) {
			lose();
		}
	})

	$("#blue").on("click", function(){
		userTotal = userTotal + random4;
		console.log("New userTotal= " + userTotal);
		$("#userScore").text(userTotal);
		if (userTotal == Random){
			win();
		}
		else if (userTotal > Random) {
			lose();
		}

		$("#userScore").html(userTotal);
	});

});
//Can't seem to figure out why "Your Total Score Is:" is not showing on screen.  I did get it to add in the console.