//A1
function validateForm() {
    let formItems = document.forms["myform"]["fName"].value;
    if (formItems == "") {
        alert("NO NAME GIVEN PLEASE FILL THE FORM ")
        return false
    }
}

//A2
let numInput = document.getElementById("numy")
let result = document.getElementById("result")

function submit() {
    if (!numInput.checkValidity()) {
        result.innerHTML = numInput.validationMessage
    }
    if (numInput > 300) {
        result.innerHTML = numInput.validationMessage
    }
    if (numInput < 100) {
        result.innerHTML = numInput.validateMessage
    }
}