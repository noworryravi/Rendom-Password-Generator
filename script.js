let passwordBox = document.getElementById("Password");
let length = 8;
let copyBtn = document.getElementById("copy-btn");

let UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijmnopqrstuvwxyzkl";
let number = "1234567890";
let symbol = "!@#$%&*";

let allChars = UpperCase + lowerCase + number + symbol;

function generatePassword(){
    let password = "";
    password += UpperCase[Math.floor(Math.random() * UpperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;


}

function copyToClipboard() {
    passwordBox.select();
    document.execCommand("copy");
  
    passwordBox.blur();
    copyBtn.style.display = "none";
    setTimeout(() => {
        copyBtn.style.display = "block";
        
    }, 2000);
  }

  