// 8. Guess number game – use while to ask until correct
let secretNum = 8;

let userInput = Number(prompt('Guess Number'));

while (userInput !==secretNum) {
    userInput = Number(prompt('Guess Number'));
    alert('Congratulation You Guess correct Number');
}