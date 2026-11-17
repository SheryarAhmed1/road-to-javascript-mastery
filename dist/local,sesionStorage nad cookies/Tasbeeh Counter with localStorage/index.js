let countDisplay = document.getElementById("countDisplay");
let plusBtn = document.getElementById("plusBtn");
let resetBtn = document.getElementById("resetBtn");
let img = document.querySelector('img')

let savedCount = localStorage.getItem("myCount");
let count = Number(savedCount) || 0;

countDisplay.textContent = count;
plusBtn.addEventListener("click", function () {
    let local = document.querySelector('#local');
    count = count + 1;
    countDisplay.textContent = count;
    localStorage.setItem("myCount", count);
    console.log(count);
});

let resetText = document.getElementById("resetText");

resetBtn.addEventListener("click", function () {
    img.style.transition = "transform 0.7s ease-in-out";
    img.style.transform = "translateX(-48px)";

    setTimeout(function () {
        resetText.style.transition = "opacity 0.8s ease";
        resetText.style.opacity = "0";
    }, 200);

    count = 0;
    countDisplay.textContent = count;
    localStorage.removeItem("myCount");

    setTimeout(function () {
        img.style.transform = "translateX(0px)";
        resetText.style.opacity = "1";
    }, 1200);

});
