let noteArea = document.querySelector('#noteArea');
let btn = document.querySelector('button');
let charCount = document.querySelector('#charCount');
let wordCount = document.querySelector('#wordCount')
let font = document.querySelector('#fontSize');
let body = document.querySelector('body');

font.addEventListener('click', function () {
    body.classList.toggle('font-bold');
})

let getNote = localStorage.getItem('savedNote');

if (getNote) {
    noteArea.value = getNote;
    charCount.textContent = 'Characters: ' + noteArea.value.length;
    let savedWords = noteArea.value.trim() === '' ? 0 : noteArea.value.trim().split(/\s+/).length;
    wordCount.textContent = 'Words: ' + savedWords;

}
noteArea.addEventListener('input', function () {
    localStorage.setItem('savedNote', noteArea.value);
    charCount.textContent = 'Characters: ' + noteArea.value.length;

    let words = noteArea.value.trim() === '' ? 0 : noteArea.value.trim().split(/\s+/).length;
    wordCount.textContent = 'Words: ' + words;
});

btn.addEventListener('click', function () {
    noteArea.value = '';
    localStorage.removeItem('savedNote');
    charCount.textContent = 'Characters: 0';
    wordCount.textContent = 'Words: 0';
});