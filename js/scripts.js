let currentInput = '0',
    inputs = [],
    output = document.getElementById("output"),
    buttonClear = document.getElementById("clear").addEventListener("click", clearAllValues), 
    button0 = document.getElementById("0").addEventListener("click", addZero),
    button1 = document.getElementById("1").addEventListener("click", addOne),
    button2 = document.getElementById("2").addEventListener("click", addTwo), 
    button3 = document.getElementById("3").addEventListener("click", addThree), 
    button4 = document.getElementById("4").addEventListener("click", addFour), 
    button5 = document.getElementById("5").addEventListener("click", addFive), 
    button6 = document.getElementById("6").addEventListener("click", addSix), 
    button7 = document.getElementById("7").addEventListener("click", addSeven), 
    button8 = document.getElementById("8").addEventListener("click", addEight), 
    button9 = document.getElementById("9").addEventListener("click", addNine), 
    buttonPlus = document.getElementById("+").addEventListener("click", addPlus), 
    buttonMinus = document.getElementById("-").addEventListener("click", addMinus), 
    buttonMultiply = document.getElementById("*").addEventListener("click", addMultiply), 
    buttonDivide = document.getElementById("/").addEventListener("click", addDivision), 
    buttonDot = document.getElementById(".").addEventListener("click", addDot);
    buttonResult = document.getElementById("=").addEventListener("click", calculate);

function addHTMLToOutput(input) {
    output.innerHTML = input;
}

function isFirstInput() {
    if (currentInput == '0' || (currentInput.length == 1 && !Number.isInteger(parseInt(currentInput)))) {
        return true;
    }
    return false;
}

function clearAllValues() {
    inputs = [];
    operations = [];
    currentInput = '0';
    output.innerHTML = "0";
    return;
}

function addZero() {
    if (isFirstInput()) {
        currentInput = '0';
    } else {
        currentInput += '0';
    }
    addHTMLToOutput(currentInput);
}

function addOne() {
    if (isFirstInput()) {
        currentInput = '1';
    } else {
        currentInput += '1';
    }
    addHTMLToOutput(currentInput);
}

function addTwo() {
    if (isFirstInput()) {
        currentInput = '2';
    } else {
        currentInput += '2';
    }
    addHTMLToOutput(currentInput);
}

function addThree() {
    if (isFirstInput()) {
        currentInput = '3';
    } else {
        currentInput += '3';
    }
    addHTMLToOutput(currentInput);
}

function addFour() {
    if (isFirstInput()) {
        currentInput = '4';
    } else {
        currentInput += '4';
    }
    addHTMLToOutput(currentInput);
}

function addFive() {
    if (isFirstInput()) {
        currentInput = '5';
    } else {
        currentInput += '5';
    }
    addHTMLToOutput(currentInput);
}

function addSix() {
    if (isFirstInput()) {
        currentInput = '6';
    } else {
        currentInput += '6';
    }
    addHTMLToOutput(currentInput);
}

function addSeven() {
    if (isFirstInput()) {
        currentInput = '7';
    } else {
        currentInput += '7';
    }
    addHTMLToOutput(currentInput);
}

function addEight() {
    if (isFirstInput()) {
        currentInput = '8';
    } else {
        currentInput += '8';
    }
    addHTMLToOutput(currentInput);
}

function addNine() {
    if (isFirstInput()) {
        currentInput = '9';
    } else {
        currentInput += '9';
    }
    addHTMLToOutput(currentInput);
}


function addPlus() {
    inputs.push(currentInput);
    inputs.push('+');
    currentInput = '+';
    addHTMLToOutput(currentInput);
}

function addMinus() {
    if (currentInput == '0' ) {
        currentInput = '-' + currentInput;
    }
    else {
        inputs.push(currentInput);
        inputs.push('-');
        currentInput = '-';
    }
    addHTMLToOutput(currentInput);

}

function addMultiply() {
    inputs.push(currentInput);
    inputs.push('*');
    currentInput = '*';
    addHTMLToOutput(currentInput);
}

function addDivision() {
    inputs.push(currentInput);
    inputs.push('/');
    currentInput = '/';
    addHTMLToOutput(currentInput);
}

function addDot() {
    currentInput += '.';
    addHTMLToOutput(currentInput);
}

function calculate() {
    let a = '';
    for (let i = 0; i < inputs.length; i++) {
        a += inputs[i];
        if (i == inputs.length - 1) {
            a += currentInput;
        }
    }
    a = eval(a);
    currentInput = a.toString();
    inputs = [];
    addHTMLToOutput(a);
}

function addTextToOutput(a) {
    output = output.innerHTML + a.value;
}
