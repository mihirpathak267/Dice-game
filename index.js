// Set names for player 1 and 2
var name1 = prompt("Player1, Enter your name: ");
document.querySelector(".p1").innerHTML = name1;
var name2 = prompt("Player2, Enter your name: ");
document.querySelector(".p2").innerHTML = name2;

// Create two random numbers to select dice image
var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;
document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");

// Compare random numbers to select the winner
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = name1+" Wins!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = name2+" Wins!";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
  
