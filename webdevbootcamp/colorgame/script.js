var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var h1 = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode");

function init() {
	setupSquares();
	setupModeButtons();
	reset();
}

init();

function setupSquares() {
	for (var i = 0; i < squares.length; i++) {

		//add click listeners to squares
		squares[i].addEventListener("click",function() {
			//grabb color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				h1.style.backgroundColor = pickedColor;
				resetButton.textContent = "Play Again"
				changeColors(clickedColor);
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function setupModeButtons() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click",function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}


// for (var i = 0; i < squares.length; i++) {
// 	// add initial colors
// 	squares[i].style.backgroundColor = colors[i];

// 	//add click listeners to squares
// 	squares[i].addEventListener("click",function() {
// 		//grabb color of clicked square
// 		var clickedColor = this.style.backgroundColor;
// 		//compare color to pickedColor
// 		if(clickedColor === pickedColor) {
// 			messageDisplay.textContent = "Correct!";
// 			h1.style.backgroundColor = pickedColor;
// 			resetButton.textContent = "Play Again"
// 			changeColors(clickedColor);
// 		} else {
// 			this.style.backgroundColor = "#232323";
// 			messageDisplay.textContent = "Try Again";
// 		}
// 	});
// }

resetButton.addEventListener("click",function() {
	reset();
});

function changeColors(color) {
	//loop through squares to change color
	for (var i = 0; colors.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to array
	for (var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset() {
	//generate colors for squares
	colors = generateRandomColors(numSquares);
	//set the squares
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	//clear messageDisplay
	messageDisplay.textContent = "";
	//pick winning color
	pickedColor = pickColor();
	//set RGB text
	colorDisplay.textContent = pickedColor;
	//set background color
	h1.style.backgroundColor = "steelBlue";
	//Set new colors button text
	resetButton.textContent = "New Colors";
}



// easyBtn.addEventListener("click",function() {
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numSquares = 3;
// 	reset();
// 	// colors = generateRandomColors(numSquares);
// 	// pickedColor = pickColor();

// 	//hide extra squares
// 	for (var i = 0; i < squares.length; i++) {
// 		if (colors[i]) {
// 			squares[i].style.backgroundColor = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// 	// colorDisplay.textContent = pickedColor;
// });

// hardBtn.addEventListener("click",function() {
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares = 6;
// 	reset();
// 	// colors = generateRandomColors(numSquares);
// 	// 	pickedColor = pickColor();

// 	//show all squares
// 	for (var i = 0; i < squares.length; i++) {
// 		if (colors[i]) {
// 			squares[i].style.backgroundColor = colors[i];
// 			squares[i].style.display = "block";
// 		}
// 	}
// 	// colorDisplay.textContent = pickedColor;
// });

	// //generate all new colors
	// colors = generateRandomColors(numSquares);
	// //pick a new random color
	// pickedColor = pickColor();
	// //change colorDisplay to match
	// colorDisplay.textContent = pickedColor;
	// //change colors of squares
	// for (var i = 0; i < squares.length; i++) {
	// 	squares[i].style.backgroundColor = colors[i];
	// }
	// //reset h1 background
	// h1.style.backgroundColor = "steelBlue";
	// messageDisplay.textContent = "";