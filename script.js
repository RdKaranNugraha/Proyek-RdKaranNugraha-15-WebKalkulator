let prevNumber = ""
let kalkulasiOperator = ""
let currentNumber = "0"

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    }else {
        currentNumber += number
    }
}

const layarkalkulator = document.querySelector('.layar-kalkulator')
const updateScreen = (number) => {
    layarkalkulator.value = number
}

const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const operators = document.querySelectorAll(".operator")
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    if (kalkulasiOperator === '') {
        prevNumber = currentNumber
    }
    kalkulasiOperator = operator
    currentNumber = '0'
}

const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click', () => {
    kalkulasi ()
    updateScreen(currentNumber)
})

const kalkulasi = () => {
    let result = ''
    switch(kalkulasiOperator) {
        case "+":
            result = parseInt(prevNumber) + parseFloat(currentNumber)
            break
        case"-":
            result = parseInt(prevNumber) - parseFloat (currentNumber)
            break
        case "*":
            result = parseInt(prevNumber) * parseFloat(currentNumber)
            break
        case"/":
            result = parseInt(prevNumber) / parseFloat (currentNumber)
            break
        default:
            return
    }
    currentNumber = result
    kalkulasiOperator = ''
}

const clearAll = () => {
    prevNumber =''
    kalkulasiOperator =''
    currentNumber = '0'
}

const clearBtn = document.querySelector('.hapus')
clearBtn.addEventListener('click', () =>{
    clearAll()
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if (currentNumber.includes('.')){
        return
    }
    currentNumber += dot
}

const decimal = document.querySelector('.decimal')
decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputPresentase = (presentase) => {
    if(currentNumber.includes('%')){
        return
    }
    currentNumber = currentNumber/100
}

const presentase = document.querySelector('.presentase')
presentase.addEventListener('click', (event)=> {
    inputPresentase(event.target.value)
    updateScreen(currentNumber)
})