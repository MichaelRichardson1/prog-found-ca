/* Programming Foundations - Course Assignment - Level 1 */

// question 1

foodType = "Meat";

// question 2

var person = {

    name: "Michael",
    age: 31

};

// question 3

var outOfStock = true;

    if (outOfStock === true) {
        console.log("Out of stock");

    }

    else {
        console.log("In stock"); 

}

// question 4

var numbers = [1,2,3,4,5];

for (var i = 0; i < numbers.length; i++) {

    console.log(numbers[i]);

}

// question 5

for (var i = 15; i <= 25; i++) {

    console.log(i);

}

// question 6

for (var i = 15; i <=25; i++) {

    if (i === 20) {
        console.log(i); 
    }

}

// question 7

var characters = [

    { name: "Danny",
      team: 2,
      essential: false
    },

    { name: "Boyle",
      team: 3,
      essential: true
    }

];

for (var i = 0; i < characters.length; i++) {

    console.log(characters[i].team);
    console.log(characters[i].essential);

}

// question 8

function whatIDontLike(colour) {

    var colourChoice = "I don't like " + colour;
    console.log(colourChoice); 

}

whatIDontLike("purple");

// question 9

function subtraction (firstNumber,secondNumber) {

    var subTotal = secondNumber - firstNumber;
    console.log(subTotal);

}

subtraction(7,3);

// question 10

var players = []

function addPlayer (playerName) {

    players.push(playerName);

}

addPlayer("Rowan");

