const inputData = document.querySelector('#name-input')
const inputResult = document.querySelector('#name-output')

const gotResult = (element) =>{
    if (inputData.value === "") return inputResult.textContent = "Anonymous";
    inputResult.textContent = element.currentTarget.value;
    
}

inputData.addEventListener('input', gotResult)