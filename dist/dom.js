const heading = document.getElementById('mainHeading');
const button = document.getElementById('btn');

button.addEventListener('click', () => {
    heading.innerText = 'DOM Manipulation is working';
    heading.style.color = 'green';
});

//mini to-do app
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
    const li = document.createElement('li');//create new html tag
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const span = document.createElement('span')
    span.innerText = taskInput.value;

    li.appendChild(checkbox);
    li.appendChild(span);

    taskList.appendChild(li);//add into parent
    // li.innerText = taskInput.value;
    taskInput.value = '';

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            span.classList.add('line-through');
        } else {
            span.classList.remove('line-through');
        }
    });


    //create delete button
    const button = document.createElement('button');
    button.innerText = 'Delete';
    button.className = 'bg-red-500 text-white font-bold px-2 py-1 rounded-xl ml-16';
    // taskList.appendChild(button);
    li.appendChild(button);
    button.addEventListener('click', () => {
        li.remove();
    });
});

// for enter key
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const li = document.createElement('li');
        li.innerText = taskInput.value;
        taskList.appendChild(li);
        taskInput.value = '';

        //create delete button
        const button = document.createElement('button');
        button.innerText = 'Delete';
        button.className = 'bg-red-500 text-white font-bold px-2 py-1 rounded-xl ml-16';
        // taskList.appendChild(button);
        li.appendChild(button);

        button.addEventListener('click', () => {

            li.remove();
        });
    }
});
