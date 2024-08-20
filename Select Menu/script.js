var selectField = document.getElementById("selectField");
var selectText = document.getElementById("selectText");
var options =document.getElementsByClassName("options");
var list = document.getElementById("list");
var arrowIcon = document.getElementById("arrowIcon")

selectField.onclick = function(){
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
}

for(option of options){
    option.onclick =function(){
        selectText.innerHTML = this.textContent;
        // Using this inside the event handler: Inside the function, this refers to the element that triggered the event. In this case, it refers to the specific option that was clicked.
        list.classList.toggle("hide");
        arrowIcon.classList.toggle("rotate");
    }
}
