const display = document.getElementById("display");/*
const btn1 = document.getElementById("1");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");
const btn4 = document.getElementById("4");
const btn5 = document.getElementById("5");
const btn6 = document.getElementById("6");
const btn7 = document.getElementById("7");
const btn8 = document.getElementById("8");
const btn9 = document.getElementById("9");
const btn0 = document.getElementById("0");*/
const dot = document.getElementById(".");
const clear = document.getElementById("clear");
const equal = document.getElementById("equal");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const backspace = document.getElementById("backspace");
const sign = document.getElementById("sign");
const operations = ["+", "-", "÷", "X"];

const checkNull = () => {
    if(display.textContent == 0 || display.textContent == null || display.textContent == ""){
    display.textContent = 0;
}}

let newDisplay = display.textContent;

function useNums(num){
    if(newDisplay == "0"){
        newDisplay = null;
        display.textContent = "";
        newDisplay += num;
        display.textContent = num;
    }
    else{
        display.textContent += num;
        newDisplay = Number(display.textContent);
    }
}
/*
btn1.addEventListener("click", function(){
    useNums(1);
});

btn2.addEventListener("click", function(){
    useNums(2);
})

btn3.addEventListener("click", function(){
    useNums(3);
})

btn4.addEventListener("click", function(){
    useNums(4);
})

btn5.addEventListener("click", function(){
    useNums(5);
})

btn6.addEventListener("click", function(){
    useNums(6);
})

btn7.addEventListener("click", function(){
    useNums(7);
})

btn8.addEventListener("click", function(){
    useNums(8);
})

btn9.addEventListener("click", function(){
    useNums(9);
})

btn0.addEventListener("click", function(){
    useNums(0);
})
*/
dot.addEventListener("click", function(){
    if(operations.includes(display.textContent.at(-1))){
        display.textContent += "0.";
    }
    else{
        display.textContent += ".";
        newDisplay += "."
    }
})

function checkOperation(operation){
    if(operations.includes(display.textContent.at(-1))){
        display.textContent = display.textContent.slice(0, -1) + operation;
    }
    else{
        display.textContent += operation
    }
}

sign.addEventListener("click", () => {
    if(display.textContent.at(0) == "-"){
        display.textContent = display.textContent.replace(display.textContent.at(0), "");
    }
    else{
        display.textContent = display.textContent.padStart(display.textContent.length + 1, "-");
    }
})

backspace.addEventListener("click", () => {
    if(display.textContent.length > 1){
        display.textContent = display.textContent.slice(0, -1)
    }
    else{
        display.textContent = display.textContent.slice(0, -1)
        display.textContent = "0";
        newDisplay = 0;
    }
})

add.addEventListener("click", function(){
    checkOperation("+")
});

subtract.addEventListener("click", function(){
    checkOperation("-")
});

multiply.addEventListener("click", function(){
    checkOperation("X")
});

divide.addEventListener("click", function(){
    checkOperation("÷") 
});

const isLongValue = total => {
    total = eval(display.textContent);
    if(total.toString().includes(".")){
        let valueString = total.toString().split(".");
        let decimalCount = valueString[1].length;
        if(decimalCount > 5){
            newDisplay = eval(display.textContent).toFixed(5);
            display.textContent = newDisplay;
        }
        else{
            newDisplay = eval(display.textContent);  
            display.textContent = newDisplay;
        }
    }
    else{
        newDisplay = eval(display.textContent);  
        display.textContent = newDisplay;
    }
}
equal.addEventListener("click", function(){
    if(operations.includes(display.textContent.at(-1))){
        display.textContent = display.textContent.slice(0, -1);
        display.textContent = display.textContent.replace("X", "*")
        display.textContent = display.textContent.replace("÷", "/")
        isLongValue(newDisplay);
    }
    else{
        display.textContent = display.textContent.replace("X", "*")
        display.textContent = display.textContent.replace("÷", "/")
        isLongValue(newDisplay);
    }
})

clear.addEventListener("click", function(){
    newDisplay = 0;
    display.textContent = "";
    checkNull();
})