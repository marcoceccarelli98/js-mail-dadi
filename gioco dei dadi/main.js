'use strict'

// GIOCO DEI DADI (DICE GAME):

//-initialize a random variable with a number from 1 to 6 // userRoll
const userRoll = Math.floor(Math.random() * 6) + 1;
console.log('Il tuo numero: ' + userRoll);

//-initialize a random variable with a number from 1 to 6 // cpuRoll
const cpuRoll = Math.floor(Math.random() * 6) + 1;
console.log('Il numero del computer: ' + cpuRoll);

if (userRoll > cpuRoll) { //-if userRoll is higher than cpuRoll
    //-print "You Win!"
    console.log('You Win!');
} else if (userRoll < cpuRoll) { //-else if cpuRoll is higher than userRoll
    //-print "You Lose!"
    console.log('You Lose!');
} else { //-else
    //-print "Draw!"
    console.log('Draw!');
}