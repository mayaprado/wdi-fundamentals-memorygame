var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: href="images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: href="images/queen-of-diamonds.png",
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: href="images/king-of-diamonds.png",
},
{
	rank: "king",
	suit: "hearts",
	cardImage: href="images/king-of-hearts.png",
}
]
var cardsInPlay = [];
var flipCard = function(cardId) {
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
};
var checkForMatch = function() {
	if(cardsInPlay.length === 2) {
	if(cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again");
	};
	};
};
flipCard(0);
flipCard(2);
checkForMatch();
