const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const allMonths = [
    "Jan", "Feb", "March", "April", "May", "June", 
    "July", "Aug", "Sept", "Oct", "Nov", "Dec"
];

date.innerHTML = today.getDate();
day.innerHTML = weekDays[ today.getDay()];
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();