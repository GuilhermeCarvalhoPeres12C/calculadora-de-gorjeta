let bill = 0;
let tipPercentage = 0;
let numberOfPeople = 0;
let buttonSelected = null;

function receiveBillValue() {
    bill = document.querySelector("#bill").valueAsNumber || 0;
    calculate();
}

function receiveNumberOfPeopleValue() {
    numberOfPeople = document.querySelector("#people").valueAsNumber || 1; // Evita divisão por zero
    calculate();
}

function receiveTipPercentageValue(value) {
    removeButtonSelectedClass();

    let customTipInput = document.querySelector("#custom-tip");
    if (customTipInput.value !== "") {
        customTipInput.value = "";
    }

    tipPercentage = value / 100;
    buttonSelected = document.querySelector(`#button-${value}`);
    buttonSelected.classList.add("button-selected");

    calculate();
}

function receiveCustomTipPercentageValue() {
    removeButtonSelectedClass();
    buttonSelected = null;

    tipPercentage = (document.querySelector("#custom-tip").valueAsNumber || 0) / 100;
    calculate();
}

function calculate() {
    // Garantindo que os valores são numéricos e evitando NaN
    if (isNaN(bill) || isNaN(tipPercentage) || isNaN(numberOfPeople) || numberOfPeople === 0) {
        document.querySelector(".amount strong").innerText = "$0.00";
        document.querySelector(".total strong").innerText = "$0.00";
        return;
    }

    let tipAmountPerson = (bill * tipPercentage) / numberOfPeople;
    let totalPerson = (bill / numberOfPeople) + tipAmountPerson;

    document.querySelector(".amount strong").innerText = `$${tipAmountPerson.toFixed(2)}`;
    document.querySelector(".total strong").innerText = `$${totalPerson.toFixed(2)}`;
}

function reset() {
    bill = 0;
    document.querySelector("#bill").value = "";

    numberOfPeople = 1;
    document.querySelector("#people").value = "";

    tipPercentage = 0;
    removeButtonSelectedClass();
    
    let customTipInput = document.querySelector("#custom-tip");
    if (customTipInput.value !== "") {
        customTipInput.value = "";
    }

    document.querySelector(".amount strong").innerText = "$0.00";
    document.querySelector(".total strong").innerText = "$0.00";

    buttonSelected = null;
}

function removeButtonSelectedClass() {
    let buttons = document.querySelectorAll(".tip button");
    buttons.forEach((btn) => btn.classList.remove("button-selected"));
}
