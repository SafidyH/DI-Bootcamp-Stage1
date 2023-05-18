let expression = "";

function number(num) {
  expression += num;
  updateDisplay(expression);
}

function operator(op) {
  expression += op;
  updateDisplay(expression);
}

function equal() {
  try {
    const result = eval(expression);
    updateDisplay(result);
    expression = result;
  } catch (error) {
    updateDisplay("Error");
    expression = "";
  }
}

function reset() {
  expression = "";
  updateDisplay("");
}

function clear() {
  expression = expression.slice(0, -1);
  updateDisplay(expression);
}

function updateDisplay(value) {
  document.getElementById("result").value = value;
}