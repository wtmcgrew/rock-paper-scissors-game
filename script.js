// The querySelector() method returns the first element within the document that will match the specified selector
const playerText = document.querySelector("#player-text");
const computerText = document.querySelector("#computer-text");
const resultText = document.querySelector("#result-text");

// The querySelectorAll() method returns all matches (not only the first)
const buttons = document.querySelectorAll(".choice-btn");

let player; // To display the player's choice
let computer; // To display the computer's random choice
let result; // To display who won

// Function logic for computer to pick between 3 choices (Rock, Paper, Scissors)
function computerTurn() {
	let randomNumber = Math.floor(Math.random() * 3) + 1;

	// The switch statement is used to select which block of code to use (case)	
	switch(randomNumber) {
	case 1:
		computer = "ROCK";
		break;
	case 2:
		computer = "PAPER";
		break;
	case 3:
		computer = "SCISSORS";
		break;
	} 	
}

// Function logic to figure out who wins
function whoWon() {
	if(player === computer) {
		return "Draw!";
	}
	else if(computer === "ROCK") {
		return (player === "PAPER") ? "You Win!" : "You Lose!";
	}
	else if(computer === "PAPER") {
		return (player === "SCISSORS") ? "You Win!" : "You Lose!";
	}
	else if(computer === "SCISSORS") {
		return (player === "ROCK") ? "You Win!" : "You Lose!";
	}
}

/* 
Using forEach() method to iterate over all buttons
addEventListener will cause the conditions in the curly braces when a button is clicked:
	Displays text inside button that is pressed
	Runs the computer's turn using the switch statements to choose at random
	Displays the choices of each player
	Displays the winner
*/
buttons.forEach(button => button.addEventListener("click", () => {
	player = button.textContent;
	computerTurn();
	playerText.textContent = `Player: ${player}`;
	computerText.textContent = `Computer: ${computer}`;
	resultText.textContent = whoWon();
}))