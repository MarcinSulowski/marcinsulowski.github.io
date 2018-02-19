'use strict';

var buttonsArr = document.getElementsByTagName('input');
for (var i = 0; i < buttonsArr.length; i++) {
    buttonsArr[i].addEventListener('click', calculate);
}

var display = document.getElementById('display');

function calculate() {
    var displayValue = display.value;
    var buttonValue = this.value;

    if (buttonValue == 'Del') {
        display.value = '';
    } else if (buttonValue == '=') {
        var equation = displayValue;
        equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
        display.value = eval(equation);
    } else {
        display.value += buttonValue;
    }
}

window.addEventListener('keydown', pressKey);

function pressKey(e) {
    var displayValue = display.value;
    if (e.keyCode == '8' || e.keyCode == '27') {
        display.value = '';
    } else if (e.shiftKey && e.keyCode == '187') {
        display.value += '+';
    } else if (e.shiftKey && e.keyCode == '56'){
        display.value += '*';
    } else if (e.keyCode == '187' || e.keyCode == '13') {
        var equation = displayValue;
        equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
        display.value = eval(equation);
    } else if (e.keyCode in keyCodes == false) {
        display.value = display.value; 
    } else {
        display.value += keyCodes[e.keyCode];
    }
}

var keyCodes = {
    16: "",
    48: "0",
    49: "1",
    50: "2",
    51: "3",
    52: "4",
    53: "5",
    54: "6",
    55: "7",
    56: "8",
    57: "9",
    96: "0",
    97: "1",
    98: "2",
    99: "3",
    100: "4",
    101: "5",
    102: "6",
    103: "7",
    104: "8",
    105: "9",
    106: "*",
    107: "+",
    109: "-",
    110: ".",
    111: "/",
    187: "=",
    189: "-",
    190: ".",
    191: "/",
}