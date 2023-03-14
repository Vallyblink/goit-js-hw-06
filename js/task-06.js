const input = document.querySelector("#validation-input")
const inputValid = input.dataset.length;

input.addEventListener("blur", () => {
    const inputValue = input.value

    if(inputValue.length>=inputValid ){
     input.classList.remove("invalid");
     input.classList.add("valid");
    }

    else{
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
  });
