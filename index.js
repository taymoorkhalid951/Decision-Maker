var rand1 = Math.floor(Math.random() * 6) + 1;

var diceimg = "dice" + rand1 + ".png";

var randimgsrc = "images/" + diceimg;

var x = document.querySelectorAll("img")[0];

x.setAttribute("src",randimgsrc);


var rand2 = Math.floor(Math.random() * 6) + 1;

var diceimg2 = "dice" + rand2 + ".png";

var randimgsrc2 = "images/" + diceimg2;

var y = document.querySelectorAll("img")[1];

y.setAttribute("src",randimgsrc2);


if (rand1>rand2){
    document.querySelector("h2").innerHTML = "Player 1 wins";
}else if (rand1<rand2){
    document.querySelector("h2").innerHTML = "Player 2 wins";
}else{
    document.querySelector("h2").innerHTML = "Draw!";
}