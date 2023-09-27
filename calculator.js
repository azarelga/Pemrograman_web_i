// Fungsi untuk menghitung hasil perhitungan
function calculate(operator) {
  let firstNumber = parseFloat(document.getElementById("firstNumber").value);
  let secondNumber = parseFloat(document.getElementById("secondNumber").value);
  let result = document.getElementById("result");

  if(isNaN(firstNumber)) {
    firstNumber = 0;
  }
  if(isNaN(secondNumber)) {
    secondNumber = 0;
  }

  let calc = 0;

  if (operator == "+") {
    calc = firstNumber + secondNumber;
  } else if (operator == "-") {
    calc = firstNumber - secondNumber;
  } else if (operator == "*") {
    calc = firstNumber * secondNumber;
  } else if (operator == "/") {
    if (secondNumber == 0) {
      calc = "ERROR Division by zero";
    } else {
      calc = firstNumber / secondNumber;
    }
  }

  console.log(firstNumber);
  console.log(secondNumber);

  result.innerHTML = calc;
}

//event listener
document.getElementById("add").addEventListener("click", function () {
  calculate("+");
});

document.getElementById("subtract").addEventListener("click", function () {
  calculate("-");
});

document.getElementById("multiply").addEventListener("click", function () {
  calculate("*");
});

document.getElementById("divide").addEventListener("click", function () {
  calculate("/");
});
