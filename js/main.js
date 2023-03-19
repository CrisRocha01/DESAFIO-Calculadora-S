const number1Input = document.querySelector("#number1")
const number2Input = document.querySelector("#number2")
const resultBox = document.querySelector("#result-box")
const btnPlus = document.querySelector("#btn-plus")
const btntimes = document.querySelector("#btn-times")
const btnclear = document.querySelector("#btn-clear")


console.log(resultBox.innerHTML)




number1Input.addEventListener("change", () => {
    if (isNumber(number1Input.value) ) {
        number1Input.classList.remove("input-error")
        
    } else {
        number1Input.classList.add("input-error")
    }
})

number2Input.addEventListener("change", () => {
    if (isNumber(number2Input.value) || number2Input.value == "") {
        number2Input.classList.remove("input-error")
        
    } else {
        number2Input.classList.add("input-error")
    }
})


btnPlus.addEventListener("click", () => {
    if (!isNumber(number1Input.value) || !isNumber(number2Input.value)){
    }else {
        resultBox.innerHTML = Number(number1Input.value) + Number(number2Input.value)
    }

})

btntimes.addEventListener("click", () => {
    if (!isNumber(number1Input.value) || !isNumber(number2Input.value)){
    }else {
        resultBox.innerHTML = Number(number1Input.value) * Number(number2Input.value)
    }
})

btnclear.addEventListener("click", () =>{
    number1Input.value = ''
    number2Input.value = ''
    resultBox.innerHTML = 0
})




function isNumber(n) { 
    return !isNaN(parseFloat(n)) && isFinite(n); 
   } 