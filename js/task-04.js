let counterValue = 0;

const valueChange = document.querySelector('#value');
const buttonMinus = document.querySelector('[data-action = "decrement"]');
const buttonPlus = document.querySelector('[data-action = "increment"]');


const onButtonMinus = (el) => {
    counterValue -= 1;
    valueChange.textContent = counterValue;
    console.log('clickWorkDown')
}
buttonMinus.addEventListener("click", onButtonMinus)

const onButtonPlus = (el) => {
    counterValue += 1;
    valueChange.textContent = counterValue;
    console.log('clickWorkUp')
}
buttonPlus.addEventListener("click", onButtonPlus )