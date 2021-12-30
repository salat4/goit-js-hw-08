const throttle = require("lodash.throttle");

const refs = {
    form: document.querySelector('form'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
};

render();



function clickInput() {
    const forValue = {
   email : refs.input.value  ,
   textarea : refs.textarea.value ,
    }
    
    localStorage.setItem("feedback-form-state",JSON.stringify(forValue))
}
function render() { 
    const storage =  localStorage.getItem("feedback-form-state")
    const ASD = JSON.parse(storage)
    if (storage) {
        refs.input.value = ASD.email
        refs.textarea.value = ASD.textarea
    }
}
function clickButton(e) { 
    e.preventDefault();
    console.log("email:",refs.input.value);
    console.log("textarea:",refs.textarea.value);
    localStorage.removeItem("feedback-form-state");
    refs.form.reset();
    

}
    
    
    
    
refs.form.addEventListener('submit',clickButton)
 refs.form.addEventListener('input', throttle(clickInput , 2000));
//refs.message.addEventListener('click', clickInput);