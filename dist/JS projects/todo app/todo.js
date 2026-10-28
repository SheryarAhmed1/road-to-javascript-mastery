/*
const mainHeading = document.getElementById('mainHeading');
const btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
    mainHeading.innerText = 'Hello Developer';
    mainHeading.style.color = 'green'
} ) 
*/

const inputField = document.getElementById('inputField');
const addItem = document.getElementById('addItem');
const itemsList = document.getElementById('itemsList');

addItem.addEventListener('click', () => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const span = document.createElement('span');

    span.innerText = inputField.value;
    li.appendChild(checkbox);
    li.appendChild(span);
    
    itemsList.appendChild(li);
    // li.innerText = inputField.value;
    inputField.value = '';
    //checkbox change event
    checkbox.addEventListener('change', () =>{
        if (checkbox.checked){
            span.classList.add ('line-through');
        }else{
            span.classList.remove ('line-through');

        }
    });
    //create delete button
    const button = document.createElement('button');
    li.appendChild(button);
    button.innerText = 'Delete';

    button.className = 'bg-red-500 text-sm ml-10 px-2  text-white rounded-lg ';
    button.addEventListener('click', () => {
        li.remove();
    });


});
//enter key function

inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const li = document.createElement('li');
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        
        const span = document.createElement('span');
        span.innerText = inputField.value;
        
        li.appendChild(checkbox);
        li.appendChild(span);
        
        itemsList.appendChild(li);
        inputField.value = '';
        
        // Delete button
        const button = document.createElement('button');
        button.innerText = 'Delete';
        button.className = 'bg-red-500 text-sm ml-10 px-2 text-white rounded-lg';
        li.appendChild(button);
        
        button.addEventListener('click', () => {
            li.remove();
        });
        
        // Checkbox line-through event
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                span.classList.add('line-through mr-3');
            } else {
                span.classList.remove('line-through');
            }
        });
    }
});