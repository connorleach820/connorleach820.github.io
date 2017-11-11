$(document).ready(function() {

	var config = {
    apiKey: "AIzaSyDdlekbalTMqUjOG4CZ2oGQqi9Z1_4iZtU",
    authDomain: "train-hw-f436d.firebaseapp.com",
    databaseURL: "https://train-hw-f436d.firebaseio.com",
    projectId: "train-hw-f436d",
    storageBucket: "train-hw-f436d.appspot.com",
    messagingSenderId: "419213879878"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

  $("#add-train").on("click", function() {

  	var trainName = $("#trainNameInput").val().trim();
  	var destination = $("#destinationInput").val().trim();
  	var trainTime = $("#trainTimeInput").val().trim();
  	var frequency = $("#frequencyInput").val().trim();

  		database.ref().push({
  			trainName: trainName,
        	destination: destination,
        	trainTime: trainTime,
        	frequency: frequency,
        	timeAdded: firebase.database.ServerValue.TIMESTAMP
  		});

  		$("input").val("");
  	return false;

  });

  database.ref().on("child_added", function(childSnapshot) {

  	trainName = childSnapshot.val().trainName;
  	destination = childSnapshot.val().destination;
  	trainTime = childSnapshot.val().trainTime;
  	frequency = childSnapshot.val().frequency;

  	var frequency = parseInt(frequency);
  	var currentTime = moment();
  	var dConverted = moment(childSnapshot.val().time, "HH:mm").subtract(1, "years");
  	var newTrainTime = moment(dConverted).format("HH:mm");

  	var tConverted = moment(newtrainTime, "HH:mm").subtract(1, "years");
  	var tDifference = moment().diff(moment(tConverted), "minutes");

  	var tRemainder  = tDifference % frequency;
  	var minutesAway = frequency - tRemainder;
  	var nextTrain = moment().add(minutesAway, "minutes");

  $("#trainTbl").append(
		"<tr><td id='trainNameDisplay'>" + childSnapshot.val().trainName +
		"</td><td id='destinationDisplay'>" + childSnapshot.val().destination +
		"</td><td id='frequencyDisplay'>" + childSnapshot.val().frequency +
		"</td><td id='nextDisplay'>" + moment(nextTrain).format("HH:mm") +
		"</td><td id='awayDisplay'>" + minutessAway  + " minutes until arrival" + "</td></tr>");
  },

  function(errorObject){
    console.log("Read failed: " + errorObject.code)

    });


    database.ref().orderByChild("timeAdded").limitToLast(1).on("child_added", function(snapshot) {
     $("#trainNameDisplay").html(snapshot.val().Trainname);
     $("#destinationDisplay").html(snapshot.val().destination);
     $("#TraintimeDisplay").html(snapshot.val().Traintime);
     $("#frequencyDisplay").html(snapshot.val().frequency);
 });

});