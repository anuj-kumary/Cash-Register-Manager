const billAmount = document.querySelector("#bill-amount");
const cashPaid = document.querySelector("#cash-paid");
const checkBtn = document.querySelector("#check-btn");
const nextBtn = document.querySelector("#next");
const hide = document.querySelector("#hide");
const errorMessage = document.querySelector("#error-msg");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNote = ["2000", "500", "100", "20", "10", "5", "1"];

function errorMsg(msg) {
    errorMessage.innerText = msg;
}

nextBtn.addEventListener("click", () => {

    if (Number(billAmount.value > 0)) {
        errorMessage.style.display = "none";
        hide.style.display = "block";
        nextBtn.style.display ="none";

    } else {
        errorMsg("Please enter valid number");
    }
});

checkBtn.addEventListener("click", () => {
    errorMessage.style.display = "none";
    clearNoOfNotes();
    if (billAmount.value > 0) {
        if (cashPaid.value > billAmount.value) {
            let amountToReturned = Number(cashPaid.value - billAmount.value);
            console.log(amountToReturned);
            calculateNote(amountToReturned)
        }
        else {
            errorMessage.style.display = "block";
            errorMsg("Cash is less than bill, please enter right amount");
        }
    } else {
        errorMsg("Please enter valid number");
    }
});

function clearNoOfNotes(){
    for(noOfNoteReturned of noOfNotes){
        noOfNoteReturned.innerText = "";
    }
}

function calculateNote(amountToReturned){
    for (let index = 0; index < availableNote.length; index++) {
        let noOfNoteReturned = Math.trunc(amountToReturned / availableNote[index]);
        amountToReturned %= availableNote[index];
        noOfNotes[index].innerText = noOfNoteReturned;
    }
}