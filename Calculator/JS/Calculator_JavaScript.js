//calculator.js

//Creates an object to keep track of values
const Calculator = {
    displayValue: '0', // Current input value
    firstOperand: null, // First operand for the operation
    waitingForSecondOperand: false, // Flag to indicate if waiting for second operand
    operator: null, // Current operator
};

//This modifies values each time a button is clicked
function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = Calculator;
    //Checks if the Wait_Second_Operand variable is true an sets the displayValue to the digit clicked
    if (wait_Second_Operand === true) {
        Calculator.displayValue = digit;
        Calculator.waitingForSecondOperand = false;
    } else {
        //This overwrites the Display_Value if the current Display_Value is 0. Otherwise, it concatenates the digit to the Display_Value
        Calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
}

//This section handles decimal points
function Input_Decimal(dot) {
    if (Calculator.waitingForSecondOperand === 'true') return;
    if (!Calculator.displayValue.includes(dot)) {
        //If the Display_Value does not include a decimal point, it concatenates the dot to the Display_Value
        Calculator.displayValue += dot;
    }    
}

//This section handles operators
function handleOperator(nextOperator) {
    const { First_Operand, Display_Value, operator } = Calculator;
    const Value_of_Input = parseFloat(Display_Value);

    //Checks if an operator already exists and if the second operand is being waited for
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = next_Operator;
        return;
    }

    //If no first operand exists, it sets the first operand to the input value
    if (firstOperand === null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {
        const Value_Now = First_Operand || 0;
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        result = Number(result).toFixed(9); //Fixes the result to 9 decimal places
        result = (result * 1).toString(); //Converts the result to a string
        Calculator.Display_Value = result;
        Calculator.First_Operand = result; //Updates the first operand with the result
    }
    Calculactor.Wait_Second_Operand = true; 
    Calculator.operator = Next_Operator;
}

//Handles the actual calculations
const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand,
};

//Resets the calculator when the AC button is clicked
function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

//This funciton updates the display with the current value
function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.displayValue;
}

Update_Display();
//This function monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')) return; // Ensures only button clicks are processed

    if (target.classList.contains('operator')) {
        handleOperator(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }

    inputDigit(target.value);
    Update_Display();
});

