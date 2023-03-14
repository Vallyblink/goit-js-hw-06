const sizeControl= document.querySelector('#font-size-control');
const textChange = document.querySelector('#text');

sizeControl.addEventListener('click', ()=>{
    const fontSize = sizeControl.value;
   textChange.style.fontSize = `${fontSize}px`
   
})