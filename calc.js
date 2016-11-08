// The code gives the elements their name and Id
var num1Input = document.getElementById("num1Input");
var num2Input = document.getElementById("num2Input");
var display = document.getElementById("display");
var operation = document.getElementById("operation");
var CM = document.getElementById("CM");

// This code gives the function the input and value
CM.addEventListener("click", function() {
    //
    var num1 = parseInt(num1Input.value);
    var num2 = parseInt(num2Input.value);
    var operater = operation.value;

    // This shows the calculation which shows add, subtract, multiply, and divison
    if (operater === "add") {
        display.innerHTML = num1 + num2;
    }

    if (operater === "subtract") {
        display.innerHTML = num1 - num2;
    }
    
    if (operater === "multiply") {
        display.innerHTML = num1 * num2;
    }
    
    if (operater === "divide") {
        display.innerHTML = num1 / num2;
    }


})
