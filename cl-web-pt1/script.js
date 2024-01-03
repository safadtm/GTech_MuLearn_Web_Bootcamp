document.getElementById("num1-el").value = 0;
    document.getElementById("num2-el").value = 0;

    function add() {
        var num1 = document.getElementById("num1-el").value;
        var num2 = document.getElementById("num2-el").value;
        var sum = parseInt(num1) + parseInt(num2);
        document.getElementById("sum-el").innerHTML = "Sum: " + sum;
    }

    function subtract() {
        var num1 = document.getElementById("num1-el").value;
        var num2 = document.getElementById("num2-el").value;
        var sum = parseInt(num1) - parseInt(num2);
        document.getElementById("sum-el").innerHTML = "Sum: " + sum;
    }

    function divide() {
        var num1 = document.getElementById("num1-el").value;
        var num2 = document.getElementById("num2-el").value;
        var sum = parseInt(num1) / parseInt(num2);
        document.getElementById("sum-el").innerHTML = "Sum: " + sum;
    }

    function multiply() {
        var num1 = document.getElementById("num1-el").value;
        var num2 = document.getElementById("num2-el").value;
        var sum = parseInt(num1) * parseInt(num2);
        document.getElementById("sum-el").innerHTML = "Sum: " + sum;
    }