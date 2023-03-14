 
 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
  const changeButton = document.querySelector(".change-color");
  const colorNameSpan = document.querySelector(".color");

 changeButton.addEventListener('click', (() =>{
  colorNameSpan.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();}
));
