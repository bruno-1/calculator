let display = "";
const OPERATORS = ["*", "/", "+", "-"];

function operate(operator, n1, n2) {
  if (operator === "*") return n1 * n2;
  if (operator === "/") return n1 / n2;
  if (operator === "+") return n1 + n2;
  if (operator === "-") return n1 - n2;
}

const btns = document.getElementsByTagName("button");
for (let btn of btns) {
  btn.addEventListener("click", (e) => {
    if (
      OPERATORS.includes(btn.textContent) &&
      (
        (!display) ||
        OPERATORS.includes(display.charAt(display.length -1)) ||
        OPERATORS.some(el => display.includes(el)))
    ) {
      return;
    }

    if (btn.textContent !== "=") {
      display += btn.textContent;
      if (btn.textContent === "CE") display = "";
    } else {
      let operator = "+";
      let n1 = 0;
      let n2 = 0;
      for (let operatorItem of OPERATORS) {
        if (display.indexOf(operatorItem) !== -1) {
          operator = display.charAt(display.indexOf(operatorItem));
          n1 = Number(display.substring(0, display.indexOf(operatorItem)));
          n2 = Number(display.substring(display.indexOf(operatorItem)+1));
          break;
        }
      }
      display = String(operate(operator, n1, n2));
    }
    document.getElementById("display").textContent = display;
  });
}