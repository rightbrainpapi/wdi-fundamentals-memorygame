console.log("Up and running!");

//  Unit 1 - said to delete in following unit so i commentted them out
// var cardOne = "queen"
// var cardTwo = "king"
// var cardThree = "queen"
// var cardFour = "king"

// console.log("User flipped " + cardOne)
// console.log("User flipped " + cardFour)

// end of Unit 1

// Unit 2  

// var cards = ["queen", "queen", "king", "king"]
// var cardsInPlay = [];

// var cardOne = cards[0]
// cardsInPlay.push(cardOne)


// console.log("User flipped " + cardOne)


// var cardTwo = cards[2]
// cardsInPlay.push(cardTwo)

// console.log("User flipped " + cardTwo)


// if (cardsInPlay.length === 2){
// 	if (cardsInPlay[0] === cardsInPlay[1]){
// 		alert("You found a match!");
// 	}
// 		else {
// 		alert("Sorry, try again.")
// 		}
// }

 // end of Unit 2

// Unit 3.1

// var cards = ["queen", "queen", "king", "king"]
// var cardsInPlay = [];

// var flipCard = function (cardId){
// 	// var cardOne = cards[0]
// 	// cardsInPlay.push(cardOne)
// 	// console.log("User flipped " + cardOne)


// 	// var cardTwo = cards[2]
// 	// cardsInPlay.push(cardTwo)
// 	// console.log("User flipped " + cardTwo)

// 	console.log("User flipped " + cards[cardId])

// 	if (cardsInPlay.length === 2){
// 		if (cardsInPlay[0] === cardsInPlay[1]){
// 		alert("You found a match!");
// 		}
// 			else {
// 			alert("Sorry, try again.")
// 			}
// 	}
	
// }

// flipCard(0)


// end of Unit 3.1


// Unit 3.2

// var cards = ["queen", "queen", "king", "king"]
// var cardsInPlay = [];

// var checkForMatch = function (){
// 	if (cardsInPlay[0] === cardsInPlay[1]) {
// 	alert("You found a match!");
// 	} else {
// 	alert("Sorry, try again.");
// 	}
// }

// var flipCard = function (cardId){

// 	console.log("User flipped " + cards[cardId])
// 	cardsInPlay.push(cards[cardId])

// 	if (cardsInPlay.length === 2){
// 		checkForMatch()
// 	}
	

// }

// flipCard(0)
// flipCard(2)

// End of 3.2

var cards = [

{
	rank: "queen",
	suit: "hearts",
	cardId: "images/queen-of-hearts.png"

},

{
	rank: "queen",
	suit: "diamonds",
	cardId: "images/queen-of-diamonds.png"

},

{
	rank: "king",
	suit: "hearts",	
	cardId: "images/king-of-hearts.png"

},

{
	rank: "king",	
	suit: "diamonds",		
	cardId: "images/king-of-diamonds.png"

}


];

var cardsInPlay = [];

var checkForMatch = function (){
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
	} else {
	alert("Sorry, try again.");
	}
}

var flipCard = function (cardId){

	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);

	console.log(cards[cardId].cardId)
	console.log(cards[cardId].suit)

	if (cardsInPlay.length === 2){
		checkForMatch()
	}
	

}

flipCard(0)
flipCard(2)

	
	// console.log(cards[cardId].cardImage)
	// console.log(cards[cardId].suit)






