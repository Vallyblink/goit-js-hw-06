const inputRefs ={
    form:document.querySelector('.login-form')
    
}

const form = document.querySelector('.login-form')
console.log(form)

form.addEventListener('submit', onFormSubmit)
function onFormSubmit(event){
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    console.log(`Email: ${email}\nPassword: ${password}`)
  
}
