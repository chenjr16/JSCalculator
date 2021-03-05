const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
let numberInput = [];
let operatorInput = [];
let result = 0;

numbers.forEach((number) => {
  number.addEventListener("click", function () {
    let num = number.innerHTML;
    let display = document.getElementById("display").innerHTML;
    if (display === "0") {
      document.getElementById("display").innerHTML = num;
    } else {
      document.getElementById("display").innerHTML = display.concat(num);
    }
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", function () {
    let operatorIcon = operator.innerHTML;
    let display = document.getElementById("display").innerHTML;
    if (operatorInput.length === 0) {
      numberInput.push(parseFloat(display));
    } else {
      let index = display.lastIndexOf(operatorInput[operatorInput.length - 1]);
      numberInput.push(parseFloat(display.slice(index + 1)));
    }
    operatorInput.push(operatorIcon);
    console.log(numberInput);
    console.log(operatorInput);
    document.getElementById("display").innerHTML = display.concat(operatorIcon);
  });
});

document.getElementById("equal").addEventListener("click", function () {
  if (operatorInput.length > 0) {
    let display = document.getElementById("display").innerHTML;
    let index = display.lastIndexOf(operatorInput[operatorInput.length - 1]);
    numberInput.push(parseFloat(display.slice(index + 1)));
  }
  console.log(numberInput);

  result = numberInput[0];

  for (let i = 0; i < operatorInput.length; i++) {
    if (operatorInput[i] === "+") {
      result += numberInput[i + 1];
    }
    if (operatorInput[i] === "-") {
      result -= numberInput[i + 1];
    }
    if (operatorInput[i] === "*") {
      result *= numberInput[i + 1];
    }
    if (operatorInput[i] === "/") {
      result /= numberInput[i + 1];
    }
  }
  document.getElementById("display").innerHTML = result;
});

document.getElementById("clear").addEventListener("click", function () {
  document.getElementById("display").innerHTML = "0";
  numberInput = [];
  operatorInput = [];
  result = 0;
});
