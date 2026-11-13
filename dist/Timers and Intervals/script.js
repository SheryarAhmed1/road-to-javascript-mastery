let text = document.querySelector('#text');
let progress = document.querySelector('#progress');
let percentage = document.querySelector('#percentage');
let btn = document.querySelector('button');

let seconds = 5;
let count = 0;

function transferData() {

    let downloder = setInterval(function () {
        if (count <= 99) {
            count++;
            progress.style.width = `${count}%`;
            percentage.textContent = `${count}%`;
        } else {
            clearInterval(downloder);
            text.textContent = 'Downloaded';
        }
    }, (seconds * 1000) / 100);
}
btn.addEventListener('click', transferData);