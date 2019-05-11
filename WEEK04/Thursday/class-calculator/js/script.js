"use strict";

const input = document.getElementById('input'), // input/output button
    number = document.querySelectorAll('.numbers div'), // number buttons
    operator = document.querySelectorAll('.operators div'), // operator buttons
    result = document.getElementById('result'), // equal button
    clear = document.getElementById('clear'); // clear button
    
let resultDisplayed = false; // flag to keep an eye on what output is displayed

input.setAttribute('placeholder-shown', 0);

// adding click handlers to number buttons
console.log(number)
number.forEach(innerDiv => {
    innerDiv.setAttribute('onclick', 'getNumber(' + innerDiv.textContent + ')');
});

function getNumber(num) {
    input.value = '';
    // var input_var = input;
    switch(num){
        case 1:
            input.value += '1';
            break;
        case 2:
            input.value += '2';
            break;
        case 3:
            input.value += '3';
            break;
        case 4:
            input.value += '4';
            break;
        case 5:
            input.value += '5';
            break;
        case 6:
            input.value += '6';
            break;
        case 7:
            input.value += '7';
            break;
        case 8:
            input.value += '8';
            break;
        case 9:
            input.value += '9';
            break;
        case 0:
            input.value += '0';
            break;
        case '.':
            input.value += '.' ;
            console.log('you clicked:' + input.value);
            break;            
    }        
    console.log('you clicked:' + input.value);

}
// adding click handlers to the operation buttons

operator.forEach(innerDiv => {
    if(innerDiv.textContent === '+' ) {
        console.log('you clicked:' + operator.value);
        innerDiv.setAttribute('onclick', 'getOperand(+)')
    }
    else if(innerDiv.textContent === '-') {
        console.log('you clicked:' + operator.value);
        innerDiv.setAttribute('onclick', 'getOperand(-)')
    }
    else if(innerDiv.textContent === '×') {
        console.log('you clicked:' + operator.value);
        innerDiv.setAttribute('onclick', 'getOperand(*)')
    }
    else if(innerDiv.textContent === '÷') {
        console.log('you clicked:' + operator.value);
        innerDiv.setAttribute('onclick', 'getOperand(/)')
    }
});
        

function getOperand(operation) {
    switch(operation){
        case '+':
            console.log(operation.valueOf());
            break;
        case '-':
            console.log(typeof(operation.value));
            break;
        case '*':
            console.log(operation.value);
            break;
        case '/':
            console.log(operation.value);
            break;
        default:
            break;
    }
};
// on click of 'equal' button

console.log('you clicked:' + result.textContent);


// clearing the input on press of clear
clear.setAttribute('onclick', 'clearScreen()');

function clearScreen() {
    console.log('you clicked:' + clear.textContent);
    input.value = '';
    result.value = '';
}