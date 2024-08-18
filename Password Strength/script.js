var pass = document.getElementById("password");
var msg = document.getElementById("message");
var strength = document.getElementById("strength");

pass.addEventListener("input", () => {
    if (pass.value.length == 0) {
        msg.style.display = "none";
    }
    else{
        msg.style.display = "block";
    }

    if (pass.value.length < 8) {
        strength.style.fontSize = "20px";
        strength.style.width = "0px";
        strength.style.color = "red";
        strength.innerHTML = "Weak";
    }

    if (pass.value.length >= 8 && pass.value.length < 16) {
        strength.style.fontSize = "20px";
        strength.style.width = "100px";
        strength.style.color = "orange";
        strength.innerHTML = "Medium";
    }

    if (pass.value.length >= 16) {  
        strength.style.fontSize = "20px";
        strength.style.width = "200px";
        strength.style.color = "green";
        strength.innerHTML = "Strong";
    }
});
    