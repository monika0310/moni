function getOperation() {
    let operation = prompt("Enter the symbol: ");
    return operation;
  }
  // comment added
  function getNumbers() {
    let num1 = parseFloat(prompt("Enter first number:"));
    let num2 = parseFloat(prompt("Enter second number:"));
    return { num1, num2 };
  }
  
  function calculate(operation, num1, num2) {
    switch (operation) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        
        if (num2 === 0) {
          return "Cannot divide by zero";
        }
        return num1 / num2;
      default:
        return "Invalid operation";
    }
  }
  function runCalculator() {
    let operation = getOperation();
    let { num1, num2 } = getNumbers();
    let result = calculate(operation, num1, num2);
    alert(`Result: ${result}`);
  }
  
  runCalculator();