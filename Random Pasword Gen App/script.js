const passWordBox = document.getElementById("Pasword");
const btn = document.querySelector("button");
const length = 7;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#$%&*_";

const allChars = upperCase + lowerCase + numbers + symbols;

function createPasword() {
    let password = "";
    password += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
    password += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    password += symbols.charAt(Math.floor(Math.random() * symbols.length));

    while(password.length < length) {
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
    passWordBox.value = password;
}

function copyPasword() {
    passWordBox.select();
    document.execCommand("copy");
    alert("Copied: " + passWordBox.value);
}