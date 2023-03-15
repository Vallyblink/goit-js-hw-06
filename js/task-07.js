const sizeControl= document.querySelector('#font-size-control');
const textChange = document.querySelector('#text');

sizeControl.addEventListener('input', ()=>{
    const fontSize = sizeControl.value;
   textChange.style.fontSize = `${fontSize}px`
   
})