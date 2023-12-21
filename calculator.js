function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}

function getNumbersAndOperation() {
  let num1, num2, operation;

  while (true) {
    num1 = parseFloat(prompt('Enter first number:'));

    if (!isNaN(num1)) {
      break;
    } else {
      alert("Please enter a valid number.");
    }
  }

  while (true) {
    num2 = parseFloat(prompt('Enter second number:'));

    if (!isNaN(num2)) {
      break;
    } else {
      alert("Please enter a valid number.");
    }
  }

  while (true) {
    operation = prompt('Choose an operation (+, -, *, /):');

    if (['+', '-', '*', '/'].includes(operation)) {
      break;
    } else {
      alert("Please enter a valid operation.");
    }
  }

  return { num1, num2, operation };
}

window.onload = function() {
  while (true) {
    const { num1, num2, operation } = getNumbersAndOperation();

    let result;
    switch (operation) {
      case '+':
        result = add(num1, num2);
        break;
      case '-':
        result = subtract(num1, num2);
        break;
      case '*':
        result = multiply(num1, num2);
        break;
      case '/':
        result = divide(num1, num2);
        break;
    }

    alert(`Result: ${result}`);

    let continueCalculation = prompt("Do you want to perform another calculation? (yes/no)").toLowerCase();
    if (continueCalculation !== 'yes') {
      break;
    }
  }
}
