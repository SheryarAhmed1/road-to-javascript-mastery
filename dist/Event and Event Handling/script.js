//click event //
let h1 = document.querySelector('h1');
function click() {
    if (h1.innerText === 'Javascript') {
        h1.innerText = 'JS stands for';
        // h1.classList.toggle('bg-red-400')
    } else {
        h1.innerText = 'Javascript'
    }
};
h1.addEventListener('click', click); //calling the click function
// h1.removeEventListener('click', click); //removeing click event  

//input event//
const input = document.querySelector('input');
const getData = document.querySelector('#getData');
input.classList.add('bg-amber-200', 'w-64', 'p-2', 'text-center', 'm-2')
let span = document.createElement('span');
span.innerText = '...';
getData.appendChild(span);

function run(show) {
    if (show.data !== null) {
        console.log(show.data);
    }
    span.innerText = show.target.value;

    if (show.target.value.length > 5) {
        input.classList.add('bg-red-600')
        input.classList.remove('bg-amber-200')
    } else {
        input.classList.add('bg-amber-200')
        input.classList.remove('bg-red-600')
    }
}
input.addEventListener('input', run);


//change event //
const select = document.querySelector('select');
const h2 = document.querySelector('h2');
h2.classList.add('capitalize');

function show(device) {
    console.log(device.target.value);
    h2.innerText = `${device.target.value} laptop selected`;
}
select.addEventListener('change', show);

//keyup event //
const scrn = document.querySelector('#scrn');
const h3 = document.querySelector('h3');

window.addEventListener('keyup', function (display) {
    // console.log(display.key)
    if (display.key === ' ') {
        h3.innerText = 'spc'
    }
    else {
        h3.innerText = display.key;
    }
});

//getting input file from user using js//
const getinp = document.querySelector('#getinp');
const btn = document.querySelector('#btn');
const alert = document.querySelector('#alert');

btn.addEventListener('click', function () {
    getinp.click();
});

getinp.addEventListener('change', function (detail) {
    const data = detail.target.files[0];
    const isImage= data.type.startsWith('image/') && data.size;
    if(!data) return;

    if(isImage){
        btn.innerText = data.name;
        alert.innerText = 'Valid image';
        alert.classList.add('text-green-500')
    }else{
        btn.innerText = 'Choose onother file'
        alert.innerText = 'Invalid file type';
        alert.classList.remove('text-green-500')  
        alert.classList.add('text-red-500')  
    }
});
