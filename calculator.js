const result = document.getElementById("result")

//clear the calculator display
function clearScreen(){
    result.value = "";
}

//appends the clicked button value to the display
function setScreenValue(value){
    result.value += value;
}

//calculate
function calculateResult(){
    let expression = result.value.trim();
    if (expression === ""){
        result.value = "Enter an expression";
        return
    }
    try{
        result.value = eval(expression)
    }
    catch(err){
        result.value = "invalid expression";
    }
}