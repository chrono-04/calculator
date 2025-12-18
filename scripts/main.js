const buttons = document.querySelector(".buttons-container");
const userInput = document.querySelector(".user-input");

let num1 = 0,
  num2 = 0,
  operator;

function convertOperatorSymbol(op) {
  const operatorMap = {
    "+": "+",
    "-": "-",
    "×": "*",
    "÷": "/",
  };
  return operatorMap[op] || op;
}

function convertInput(input) {
  let operatorIndex = -1;

  for (let i = 0; i < input.length; i++) {
    if (["+", "-", "×", "÷"].includes(input[i])) {
      operator = input[i];
      operatorIndex = i;
      break;
    }
  }

  // split by operator position
  num1 = Number(input.slice(0, operatorIndex));
  num2 = Number(input.slice(operatorIndex + 1));

  // convert symbols
  if (operator === "×") operator = "*";
  if (operator === "÷") operator = "/";
}

function calculate(firstNum, secondNum, op) {
  let total;
  switch (op) {
    case "+":
      total = firstNum + secondNum;
      console.log(total);
      userInput.value = "";
      userInput.value = total;
      break;
    case "-":
      total = firstNum - secondNum;
      console.log(total);
      userInput.value = "";
      userInput.value = total;
      break;
    case "*":
      total = firstNum * secondNum;
      console.log(total);
      userInput.value = "";
      userInput.value = total;
      break;
    case "/":
      total = firstNum / secondNum;
      console.log(total);
      userInput.value = "";
      userInput.value = total;
      break;
  }
}

buttons.addEventListener("click", (event) => {
  let target = event.target;

  switch (target.id) {
    case "clear-btn":
      userInput.value = "";
      console.log("Pressed clear button");
      break;
    case "divide-btn":
      userInput.value += "÷";
      console.log("Pressed divide button");
      break;
    case "multiply":
      userInput.value += "×";
      console.log("Pressed multiply button");
      break;
    case "subtract":
      userInput.value += "-";
      console.log("Pressed subtract button");
      break;
    case "add":
      userInput.value += "+";
      console.log("Pressed add button");
      break;
    case "equals":
      console.log("Pressed equal button");
      console.log(`num1: ${num1} operator: ${operator} num2: ${num2}`);
      convertInput(userInput.value);
      calculate(num1, num2, operator);
      break;
    case "seven":
      userInput.value += 7;
      console.log(7);
      break;
    case "eight":
      userInput.value += 8;
      console.log(8);
      break;
    case "nine":
      userInput.value += 9;
      console.log(9);
      break;
    case "four":
      userInput.value += 4;
      console.log(4);
      break;
    case "five":
      userInput.value += 5;
      console.log(5);
      break;
    case "six":
      userInput.value += 6;
      console.log(6);
      break;
    case "one":
      userInput.value += 1;
      console.log(1);
      break;
    case "two":
      userInput.value += 2;
      console.log(2);
      break;
    case "three":
      userInput.value += 3;
      console.log(3);
      break;
    case "zero":
      userInput.value += 0;
      console.log(0);
      break;
  }
});
