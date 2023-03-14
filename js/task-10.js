function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesDiv = document.querySelector('#boxes');
const numberInput = document.querySelector("input");
const createBox = document.querySelector("[data-create]");
const destroyBox = document.querySelector("[data-destroy]");

boxesDiv.style.cssText = "display: flex; align-items: center; justify-content: center; gap: 30px;"

createBox.addEventListener("click", () => {
  onBoxCreate(numberInput.value);
})
destroyBox.addEventListener("click", onBoxDestroy)

function onBoxCreate (amount){
  const boxElements = [];
  const defoultSize = 30 ;
  for (let i = 0; i < amount; i += 1){
    const box = document.createElement("div");
    box.style.width = i*10 + defoultSize + "px";
    box.style.height = i*10 + defoultSize+ "px";
    box.style.backgroundColor = getRandomHexColor();
    
    boxElements.push(box);
  }
  boxesDiv.append(...boxElements);
}

function onBoxDestroy(){
  numberInput.value = "";
  boxesDiv.innerHTML = "";
}
