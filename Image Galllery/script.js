let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollbehavior = "auto";
});

nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollbehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});
backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollbehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});