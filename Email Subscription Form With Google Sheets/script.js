const scriptURL = "https://script.google.com/macros/s/AKfycbyNhHyo39cvwlJKVie7CbBC5Z7i8ghNxitmCTws99TbTSFWl-QIExPvnicVmi-e8Ie32w/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
        msg.innerHTML = "Message sent successfully!";
        setTimeout(() => {
            msg.innerHTML = "";
        }, 5000);
        form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
