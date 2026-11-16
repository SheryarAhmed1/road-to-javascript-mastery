const countDisplay = document.getElementById("countDisplay");
const plusBtn = document.getElementById("plusBtn");
const resetBtn = document.getElementById("resetBtn");

let savedCount = localStorage.getItem("myCount");
let count = Number(savedCount) || 0;

countDisplay.textContent = count;

plusBtn.addEventListener("click", function () {
    count = count + 1;
    countDisplay.textContent = count;
    localStorage.setItem("myCount", count);
});

resetBtn.addEventListener("click", function () {
    count = 0;
    countDisplay.textContent = count;
    localStorage.removeItem("myCount");
});