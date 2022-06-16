'use strict';

console.log('function demo is connected')

userName();

function userName(){
    let userName = prompt('what is your name?');
    console.log ('username', userName);
}

let shoe = prompt('Do you like shoes? press 1 for yes and 3 for no');

console.log('the shoe is', typeof shoe);

let shoeNumber = parseInt(shoe);

console.log('did it turn into a number?', shoeNumber);

let message;

if(shoe ===1){
    message = 'Good! Your in the right place!';
} else if (shoe ===3){
    message = 'Who doesnt like shoes???';
} else {
    message = ' can you count? ';
}
 
document.write('Hey ' + userName + ' ! ' + message);
