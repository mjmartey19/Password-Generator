const rangeInput = document.querySelector('#range');
rangeValue = document.querySelector('.range-box span'),
passwordInput = document.querySelector('#password'),
submitBtn = document.querySelector('#submit'),
copyIcon = document.querySelector('.fa-copy'),
// console.log(copyIcon);

rangeInput.addEventListener('input', () => {
    rangeValue.innerHTML = rangeInput.value;
})

submitBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    generatePassword();
    copyIcon.classList.replace("fa-clipboard", "fa-copy")
});


function generatePassword(){
let characters = "ABCDEFGHIJKLMNOPQRSTUVWXWZabcedfghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}[]<>~";
charLength = characters.length;
let newPassword = "";
    for(i = 0; i < rangeInput.value; i++){
        newPassword += characters[Math.floor(Math.random()*charLength)];
    }
  passwordInput.value = newPassword
    console.log(newPassword);
}

copyIcon.addEventListener("click", ()=>{
    navigator.clipboard.writeText(passwordInput.value);
    copyIcon.classList.replace("fa-copy", "fa-clipboard");
    copyIcon.title = "Copied to clipboard";
})