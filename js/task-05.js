const inputData = document.querySelector('#name-input')
const inputResult = document.querySelector('#name-output')

const gotResult = (event) =>{
    if (inputData.value === "") return inputResult.textContent = "Anonymous";
    inputResult.textContent = event.currentTarget.value;
    
}

inputData.addEventListener('input', gotResult)