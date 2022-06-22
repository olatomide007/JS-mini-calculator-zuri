
var num1 = window.prompt("Enter your First number");
var operator = window.prompt("Enter your Operator")
var num2 = window.prompt("Enter your Second number");

num1= parseFloat(num1);
num2= parseFloat(num2);

function operate(num1,num2){
    if (operator == "+"){
        ansadd= num1 + num2;
        alert(num1 + "+" + num2 + "=" + ansadd)
        alert("Answer is "+ ansadd)
    }
    else if (operator == "-"){
        anssub= num1 - num2;
        alert(num1 + "-" + num2 + "=" + anssub)
        alert("Answer is "+ anssub)
    }
    else if (operator == "*"){
        ansmult= num1 * num2;
        alert(num1 + "*" + num2 + "=" + ansmult)
        alert("Answer is "+ ansmult)
    }
    else if (operator == "/"){
        ansdiv= num1 / num2;
        alert(num1 + "/" + num2 + "=" + ansdiv)
        alert("Answer is "+ ansdiv)
    }
    return num1,num2;
}
operate(num1,num2)



