'use strict';

console.log('function demo is connected');


let userInputName;
let message;

function userName(){
  userInputName = prompt('What is your name?');
  return userInputName;
}
userName();


function displayRating(){
  let output = '';
  let rating = prompt('Scale of 1 to 5, how many stars?');
  
  for(let i = 0;  i < rating; i++){
    output += '<img class="Rroll" src="https://i.pinimg.com/originals/60/c1/4a/60c14a43fb4745795b3b358868517e79.png" />'
  
  }
  
   return document.write(output);
  }
  displayRating();


function userShoeResponse(){
  
do {
  let shoeSelectionNum =  parseInt(prompt('Do you like shoes? press 1 for yes and 3 for no'));
  //if they say 1
  
  if(shoeSelectionNum === 1){
    message = 'Good! Your in the right place!';
    break;
  }
 else if (shoeSelectionNum === 3){
  message = 'Who doesnt like shoes???';
  break;
} else {
  alert('Try again!');
}
} while(true)



}

userShoeResponse();


document.write('Hey ' + userInputName + ' ! ' + message);