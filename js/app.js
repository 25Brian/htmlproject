'use strict';
var img = new Image();
img.src = 'https://cdn4.iconfinder.com/data/icons/expressive-emoticons/64/disturbed_annoyed_feeling_annoyed_unpleasant_emoji_expression_face_emoticon_upset_boredom_no_not_flat-512.pngg';

console.log('java is connected.');


let userName = prompt('What is your name?');

console.log(userName);

let shoe = prompt('Do you like shoes? press 1 for yes and 3 for no');

console.log('the shoe is', typeof shoe);

let shoeNumber = parseInt(shoe);

console.log('did it turn into a number?', shoeNumber);

let message;

if(shoe ==1){
    message = 'Good! Your in the right place!';
} else if (shoe ==3){
    message = 'Who doesnt like shoes???';
} else {
    message = ' can you count? ';
}
 
document.write('Hey ' + userName + ' ! ' + message);