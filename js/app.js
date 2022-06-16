'use strict';

console.log('function demo is connected');


let userInputName;
let message;

function userName(){
  userInputName = prompt('What is your name?');
  return userInputName;
}
userName();





function userShoeResponse(){
  let shoeSelectionNum =  parseInt(prompt('Do you like shoes? press 1 for yes and 3 for no'));

  console.log(typeof shoeSelectionNum);



  if(shoeSelectionNum === 1){
    message = 'Good! Your in the right place!';
  } else if (shoeSelectionNum === 3){
    message = 'Who doesnt like shoes???';
  } else {
    message = ' can you count? ';
  }

}

userShoeResponse();


document.write('Hey ' + userInputName + ' ! ' + message);