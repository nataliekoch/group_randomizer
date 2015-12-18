var theta = ["Altamir", "Anthony", "Brooks", "Charlie", "Chris", "Amber", "Kenzie", "Mark", "Joe", "Scott", "Matthew", "Natalie", "Eric", "Jeremy", "Nathan", "Robby", "Zach", "Sam", "Liz", "Paul"];
console.log(theta.length);
var buttonArray = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
var randomArray = [];


$(document).ready(function() {
	appendButtons();

	$(".numButton").on('click', function(){
		$(".numButton").removeClass("active");
		$(this).toggleClass("active");
	});

	$("#refreshdiv").on('click', '.refresh', appendGroup);
});


function appendButtons() {
	var $el = $('#buttoncontainer');

	for(var i = 0; i < buttonArray.length; i++){
		$el.append("<button class='numButton' data-button-num='" + buttonArray[i] + "'>" + buttonArray[i] + "</button>");
	}

	$('#refreshdiv').append("<button class='refresh'>Refresh</button>");
}


function appendGroup() {
	randomizeArray();

	$("#group").empty();

	var activeButton = $('.active').data('button-num');

	for (var i = 1; i <= activeButton; i++){
		$('#group').append("<div class='studentgroup' data-group-num=" + i + "><h4>Group " + i + "<div class='allStudents'></div></h4></div>");
	}

	var groupCounter = 0;

	for(var j=0; j<=randomArray.length-1; j++) {
		$(".allStudents")
			.eq(groupCounter)
			.append("<p>" + randomArray[j] + "</p>").hide().fadeIn("slow");

		if(groupCounter == activeButton - 1) {
			groupCounter = 0;
		}
		else {
			groupCounter++;
		}
	}
}

function randomizeArray() {
	var holderTheta = theta.slice(0);
	var placeHolder = [];
	randomArray = [];

	while(holderTheta.length != 0){
		var ranNum = randomNumber(0, (holderTheta.length - 1));
		placeHolder = holderTheta.splice(ranNum, 1)[0];
		randomArray.push(placeHolder);
	}
}
	
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

// 	// For loop that cycles through theta array and pushes/appends
// 	// student names into the group divs.


	// Reference the currently active button.								Yes!
	// Create a number of divs equal to the current button number.			Yes!
	// Inside each div, place a Group # heading at the top, and 			Yes!
	// Append (theta.length / group-num) of students, plus a remainder.		
	//   ex.) button 7:   20/7 = 






