let p1 = document.getElementById('p1');
let displayResult = document.getElementById('result');
let operator = '';
let result = '';
window.addEventListener("keydown", btn);

const display = (a) => {
    p1.innerHTML += a;
}

function operators(a) {
    p1.innerHTML += ' ' + a + ' ';
    operator = a;
}

function calculate() {
    let noSpace = p1.innerHTML.trim(); 
    let operands = noSpace.split(' ' + operator + ' ');
    
    
    let x = Number(operands[0]);
    let y = Number(operands[1]);
    
   
    switch (operator) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '÷':
            result = x / y;
            break;
        case '%':
            result = x % y;
            break;
        case '^2':
            result = Math.pow(x, 2);
            break;
        case '^3':
            result = Math.pow(x, 3);
            break;
        default:
            result = 'Invalid operator';
            break;
    }
    
    displayResult.innerHTML = result; 
    // p1.innerHTML = '';
}

function btn(event){
    switch(event.key){
        case '1':
            p1.innerHTML += "1"
            break;
        case '2':
            p1.innerHTML += "2"
            break;
        case '3':
            p1.innerHTML += "3"
            break;
        case '4':
            p1.innerHTML += "4"
            break;
        case '5':
            p1.innerHTML += "5"
            break;
        case '6':
            p1.innerHTML += "6"
            break;
        case '7':
            p1.innerHTML += "7"
            break;
        case '8':
            p1.innerHTML += "8"
            break;
        case '9':
            p1.innerHTML += "9"
            break;
        case '0':
            p1.innerHTML += "0"
            break;
        case 'Enter':
            calculate(); 
            break;
        
    }
}