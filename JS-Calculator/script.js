const buttons = document.querySelectorAll('.btn , .operators');
const inputDisplay = document.querySelector('.input-display');
const clear = document.querySelector('.clear');
const operators = ['+', '-', '*', '/'];
    
let string = '';
    
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '=') {
            calculation();
            //console.log('calculation part');
        }else if (button.textContent === 'AC') {
            cleardisplay();
            //console.log('Clear');
        } else {
            string += button.textContent;
            inputDisplay.textContent = string;
            //console.log(string);
        }

        // if (button.classList.contains('operators')) {
        //     handleOperator(button.textContent);
        // }
    });
});
    
function cleardisplay() {
    string = '';
    inputDisplay.textContent = '';
    //console.log(inputDisplay.textContent);
    //console.log(string);
}

// function handleOperator(operators) {
//     console.log('Operator clicked:', operators);
// }

function calculation() {

 let result;    
const expression = string.split(/(\+|\-|\x|\/)/);

const num1 = parseFloat(expression[0]);
const num2 = parseFloat(expression[2]);
const operator = expression[1];
    
// calculations 
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;

        case '-':
            result = num1 - num2;
            break;

        case 'x':
            result = num1 * num2;
            break;

        case '/':
            if (num2 === 0) {
                result = 'Error';
            } else {
                result = num1 / num2;
            }
            break;

        default:
            result = 'Invalid operator';
    }
    
inputDisplay.textContent = result;
string = result.toString();
}