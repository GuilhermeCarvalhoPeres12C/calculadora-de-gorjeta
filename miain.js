let bill = 0
let tipPercentage = 0
let numberOfPeople = 0

let BillInput = document.querySelector("#bill")
billInput.addEventListener("input", reciveBillValue)

let numberOfPeopleInuput = documenr.querSelector("#people")
NumberOfPeopleInput.addEventListener("input",receiveNumberOfPeople )

function reciveBillValue() {
    bill = billInput.valueAsNumber
}

calculate{

}

function receiveNumberOfPeople(){
    numberOfPeople = numberOfPeopleInput.valueAsNumber

    calculate()
}

function calculate(){
    if(bill !== 0 && tipPercentage !==0 && numberOfPeople !==0){
        console.log("é possível calcular")
    }
    else{
        console.log("Ainda não dá!, preencha tudo.  ")
    }

}
