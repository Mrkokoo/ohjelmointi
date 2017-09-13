var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1Score = 0;
var p2Score = 0;
var scoreP1 = document.querySelector("#p1Score");
var scoreP2 = document.querySelector("#p2Score");
var numInput = document.querySelector("input");
var gameOver = false;
var winningScore = 5;
var winningScoreDisplay = document.querySelector("p span");

function reset() {
	p1Score = 0;
	p2Score = 0;
	scoreP1.textContent = p1Score
	scoreP2.textContent = p2Score
	gameOver = false;
	scoreP1.classList.remove("winner");
	scoreP2.classList.remove("winner");
}

p1Button.addEventListener("click",function() {
	if(!gameOver) {
		p1Score++
		scoreP1.textContent = p1Score
		if (p1Score === winningScore) {
			gameOver = true;
			scoreP1.classList.add("winner");
			alert("Player One Wins!");
		}
	}
});

p2Button.addEventListener("click",function() {
	if(!gameOver) {
		p2Score++
		scoreP2.textContent = p2Score
		if (p2Score === winningScore) {
			gameOver = true;
			scoreP2.classList.add("winner");
			alert("Player Two Wins!");
		}
	}
});

resetButton.addEventListener("click",reset);

numInput.addEventListener("change",function() {
	winningScoreDisplay.textContent = numInput.value;
	winningScore = Number(numInput.value);
	reset();
});