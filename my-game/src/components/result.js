// I M P O R T
import React, {useEffect, useState} from 'react';



//player1 wins

if(input1 === "scissors" && input2 === "paper"){
    return `scissors cuts paper!
    ${player1} wins!`
};
if(input1 === "paper" && input2 === "stone"){
    return `paper covers stone!
    ${player1} wins!`
};
if(input1 === "stone" && input2 === "lizard"){
    return `stone crushes lizard!
    ${player1} wins!`
};
if(input1 === "lizard" && input2 === "spock"){
    return `lizard poisons spock!
    ${player1} wins!`
};
if(input1 === "spock" && input2 === "scissors"){
    return `spock smashes scissors!
    ${player1} wins!`
};
if(input1 === "scissors" && input2 === "lizard"){
    return `scissors decapitates lizard!
    ${player1} wins!`
};
if(input1 === "lizard" && input2 === "paper"){
    return `lizard eats paper!
    ${player1} wins!`
};
if(input1 === "paper" && input2 === "spock"){
    return `paper disproves spock!
    ${player1} wins!`
};
if(input1 === "spock" && input2 === "stone"){
    return `spock vaporizes stone!
    ${player1} wins!`
};
if(input1 === "stone" && input2 === "scissors"){
    return `stone crushes scissors!
    ${player1} wins!`
};



// player2 wins

if(input2 === "scissors" && input1 === "paper"){
    return `scissors cuts paper!
    ${player2} wins!`
};
if(input2 === "paper" && input1 === "stone"){
    return `paper covers stone!
    ${player2} wins!`
};
if(input2 === "stone" && input1 === "lizard"){
    return `stone crushes lizard!
    ${player2} wins!`
};
if(input2 === "lizard" && input1 === "spock"){
    return `lizard poisons spock!
    ${player2} wins!`
};
if(input2 === "spock" && input1 === "scissors"){
    return `spock smashes scissors!
    ${player2} wins!`
};
if(input2 === "scissors" && input1 === "lizard"){
    return `scissors decapitates lizard!
    ${player2} wins!`
};
if(input2 === "lizard" && input1 === "paper"){
    return `lizard eats paper!
    ${player2} wins!`
};
if(input2 === "paper" && input1 === "spock"){
    return `paper disproves spock!
    ${player2} wins!`
};
if(input2 === "spock" && input1 === "stone"){
    return `spock vaporizes stone!
    ${player2} wins!`
};
if(input2 === "stone" && input1 === "scissors"){
    return `stone crushes scissors!
    ${player2} wins!`
};



// draw

if(input1 === "scissors" && input2 === "scissors"){
    return `It's a draw!`
};
if(input1 === "paper" && input2 === "paper"){
    return `It's a draw!`
};
if(input1 === "stone" && input2 === "stone"){
    return `It's a draw!`
};
if(input1 === "lizard" && input2 === "lizard"){
    return `It's a draw!`
};
if(input1 === "spock" && input2 === "spock"){
    return `It's a draw!`
};
