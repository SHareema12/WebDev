var colors = generateRandomColors(6);
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var squares = document.querySelectorAll(".square");
pickedColor = pickColor();
var messageDisplay = document.querySelector("#message");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

var easyMode = false; 

easyBtn.addEventListener("click", function(){
	easyMode = true;
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	colors = generateRandomColors(3); 
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++){
		if (colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}

});

hardBtn.addEventListener("click", function(){
	easyMode = false;
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	colors = generateRandomColors(6); 
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
	}
});


resetButton.addEventListener("click", function(){
	if (resetButton.textContent === "Play Again?"){
		resetButton.textContent = "New Colors";
		h1.style.backgroundColor = "#BA84DB";
	}
	//generate all new colors 
	if (easyMode){
		colors = generateRandomColors(3);
	}
	else{
		colors = generateRandomColors(6);
	}
	//pick new random color 
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i< squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}

	messageDisplay.textContent  = "";

});

for (var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var squareColor = this.style.backgroundColor; 
		//compare color to pickedColor 
		if (squareColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(squareColor); 
			h1.style.backgroundColor = pickedColor;
			resetButton.textContent = "Play Again?";
		}
		else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});

}

var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;

function changeColors(color){
	//loop thru all squares
	for (var i =0; i < squares.length;i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);

	return colors[random];
}

function generateRandomColors(num){
	//make an array 
	var arr = [];
	//add num random colors to array
	for(var i = 0; i< num; i++){
		//get random color and push into array
		arr.push(randomColor());
	}
	//return array
	return arr;
}

function randomColor(){
	//pick a red from 0 to 255
	var red = Math.floor(Math.random() * 256);
	//pick a green from 0 to 255
	var green = Math.floor(Math.random() * 256);
	//pick a blue from 0 to 255
	var blue = Math.floor(Math.random() * 256); 

	var randomColor = "rgb(" + red + ", " + green + ", " + blue + ")"; 

	return randomColor;


}