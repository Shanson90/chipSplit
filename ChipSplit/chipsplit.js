var numPlayers
var buyBacks
var chips
var colors
var buyIn
var gameType

function chipSplit(numPlayers, chips, buyBacks, buyIn) {
	//numPlayers is an integer representing the number of numPlayers
	//chips is an object of chip colors with sub-objects with color, count, and value attributes
	var totalCash = buyIn * (numPlayers + buyBacks)
	var cashPerColor = totalCash / colors
	for (var i = 1; i <= colors; i++) {
		chips["color" + i].value = cashPerColor / chips["color" + i].count 
	}

}

function chipMaker() {
	numPlayers = document.getElementById("numPlayers").value;
	buyBacks = document.getElementById("buyBacks").value;
	chips = {};
	colors = document.getElementById("colors").value;
	buyIn = document.getElementById("buyIn").value
	gameType = document.getElementById("gameType").value;
	
	if (gameType == "cash"){
		var cashGame = true;
	}else{var cashGame = false};
	
	for (var i = 1; i <= colors; i++) {
		if(i % 10 == 1){
			chips["color" + i] = {}
			chips["color" + i].color = prompt(i + "st color?");
		}
		else if(i % 10 == 2){
			chips["color" + i] = {}
			chips["color" + i].color = prompt(i + "nd color?");
		}
		else if(i % 10 == 3){
			chips["color" + i] = {}
			chips["color" + i].color = prompt(i + "rd color?");
		}
		else{
			chips["color" + i] = {}
			chips["color" + i].color = prompt(i + "th color?");
		}
		chips["color" + i].count = prompt("How many " + chips["color" + i].color + " chips do you have?");
	};
}

//Example Chips Object
// chips{
// 	color1: 
// 	{
// 		color: "white",
// 		count: 200,		//chips
// 		value: 5		//in cents
// 	}
// 	color2:
// 	{
// 		color: "red",
// 		count: 200,
// 		value: 10
// 	}
// 	color3:
// 	{
// 		color: "blue",
// 		count: 100,
// 		value: 25
// 	}
// 	color4:
// 	{
// 		color: "green",
// 		count: 100,
// 		value: 25
// 	}
// 	color5:
// 	{
// 		color: "black",
// 		count: 100,
// 		value: 25
// 	}
// }















