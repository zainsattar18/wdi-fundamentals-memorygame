let cards = ["queen", "queen", "king", "king"];

let cardsInPlay = [];

let cardOne = cards[1];

cardsInPlay.push("cardOne");

console.log("User flipped Queen");

let cardTwo = cards[3];

cardsInPlay.push("cardTwo");

console.log("User flipped King");

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again");
	}
}