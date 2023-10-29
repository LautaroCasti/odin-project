const displayOutput = document.querySelector(".output");
const equal = document.querySelector(".equal");
const numbers = document.querySelectorAll(".numbers");
const operands = document.querySelectorAll(".operands");
const clear = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const dot = document.querySelector(".dot");

dot.addEventListener("click", () => {
  const output = displayOutput.textContent;
  if (output === "" || includesDot(output)) {
    return;
  }
  displayOutput.textContent += dot.textContent;
})

function includesDot(operation) {
  const parts = operation.split(" ");
  if (parts.length === 0) {
    return true;
  } else if (parts.length === 1) {
    if (operation.includes(".")) {
      return true;
    }
  } else if (parts.length === 2) {
    return true;
  } else if (parts.length === 3) {
    if (parts[2].includes(".")) {
      return true
    }
  }
  return false;
}

clear.addEventListener("click", () => {
  displayOutput.textContent = "";
});

deleteBtn.addEventListener("click", () => {
  const operationString = displayOutput.textContent;
  displayOutput.textContent = operationString.slice(0, operationString.length - 1);
});

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    const num = Number(number.textContent);
    displayOutput.textContent += num;
  })
});

equal.addEventListener("click", () => {
  const operation = displayOutput.textContent;
  const result = passResult(operation);
  displayOutput.textContent = result;
});

operands.forEach((operand) => {
  operand.addEventListener("click", () => {
    const output = displayOutput.textContent;
    if (output.includes("+") || output.includes("-") || output.includes("*") || output.includes("/")) {
      let tempResult = passResult(output);
      displayOutput.textContent = tempResult;
    }
    displayOutput.textContent += ` ${operand.textContent} `;
  })
})

function operate(a, b, operator) {
  let result;
  let num1 = Number(a);
  let num2 = Number(b);
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  }
  return result;
}

function passResult(operation) {
  const operands = operation.split(" ");
  const firstNumber = operands[0];
  const secondNumber = operands[2];
  const operator = operands[1];
  if (operator === "/" && secondNumber === "0") {
    return "ERROR";
  }
  return operate(firstNumber, secondNumber, operator);
}
