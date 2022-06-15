'use strict';
console.log('java is connected.');


let userName = prompt('What is your name?');

console.log(userName);

let time = prompt('What time is it?');

console.log('the time is', typeof time);

let timeNumber = parseInt(time);

console.log('did it turn into a number?', timeNumber);

alert('You entered the time ', + timeNumber);

let message;

if(time <= 11){
    message = 'good morning';
} else if (time <18){
    message = 'good afternoon';
} else if (time <24){
    message = 'go to bed';
} else {
    message = 'ha ha ha';
}

console.log('our return message', message);

document.write('Hello ' + userName + ' ! ' + ' The time is ' +  timeNumber + message);