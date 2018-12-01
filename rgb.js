var squares = document.querySelectorAll(".square");
  //random number 0-255
var coloursArray =[];
var winningColour = Math.floor(Math.random() * 6)

for(var i =0; i<squares.length; i++){
	//add random colours to squares
	var colour = randomStringRgb()
		squares[i].style.backgroundColor = colour;
		coloursArray.push(colour);
		//Add event listeners
		squares[i].addEventListener("click", function(){
			var clickedColour = this.style.backgroundColor;
			if(clickedColour === coloursArray[winningColour]){
				changeWinner();
				document.querySelector(".guess").textContent = "Correct!"
				document.querySelector("header").style.backgroundColor = this.style.backgroundColor;
				document.querySelector("#reset").textContent = "Play again?";
		}else{
				
			this.style.backgroundColor ="#232323";
			document.querySelector(".guess").textContent = "Try Again"
		}})	
}

document.querySelector("#rgbspan").textContent = coloursArray[winningColour];


var resetButton = document.querySelector("#reset");
resetButton.addEventListener("click",function(){
	
	if(coloursArray.length === 6){
		coloursArray =[]
		winningColour = Math.floor(Math.random() * 6)
		for(var i =0; i<squares.length; i++){
		var colour = randomStringRgb()
		squares[i].style.backgroundColor = colour;
		coloursArray.push(colour);
	}
		document.querySelector(".guess").textContent = "";
		document.querySelector("#rgbspan").textContent = coloursArray[winningColour];
		document.querySelector("header").style.backgroundColor = "steelblue"
	}else{
		coloursArray =[];
		winningColour = Math.floor(Math.random() * 3)
		for(var i =0; i<3; i++){
		var colour = randomStringRgb()
		squares[i].style.backgroundColor = colour;
		coloursArray.push(colour);
	}

		document.querySelector(".guess").textContent = "";
		document.querySelector("#rgbspan").textContent = coloursArray[winningColour];
		document.querySelector("header").style.backgroundColor = "steelblue"
		easyMode();
	}

})


document.querySelector("#easy").addEventListener("click",function(){
	document.querySelector("#easy").classList.add("selected");
	document.querySelector("#hard").classList.remove("selected");
	coloursArray =[];
	winningColour = Math.floor(Math.random() * 3)
	for(var i =0; i<3; i++){
		var colour = randomStringRgb()
		squares[i].style.backgroundColor = colour;
		coloursArray.push(colour);
	}

		document.querySelector(".guess").textContent = "";
		document.querySelector("#rgbspan").textContent = coloursArray[winningColour];
		document.querySelector("header").style.backgroundColor = "steelblue"
		easyMode();

})


document.querySelector("#hard").addEventListener("click",function(){
	document.querySelector("#hard").classList.add("selected");
	document.querySelector("#easy").classList.remove("selected");
	coloursArray =[];
	winningColour = Math.floor(Math.random() * 6);
	for(var i =0; i<squares.length; i++){
		squares[i].style.display = "block";
		var colour = randomStringRgb()
		squares[i].style.backgroundColor = colour;
		coloursArray.push(colour);
	}
		document.querySelector(".guess").textContent = "";
		document.querySelector("#rgbspan").textContent = coloursArray[winningColour];
		document.querySelector("header").style.backgroundColor = "steelblue"


})




//Random rgb function
function randomStringRgb(){
	return "rgb(" + randomNumber() + ", " + randomNumber()+ ", "+ randomNumber()	 +")"
}
function randomNumber(){
	return Math.floor(Math.random()*256)
}

//Changes all squares to winner square function
function changeWinner(){
	for(var i =0; i < squares.length; i++){
		squares[i].style.backgroundColor = coloursArray[winningColour];
	}
}

function easyMode(){
	for(var i = 3; i<squares.length; i++){
		squares[i].style.display = "none";
	}
}

