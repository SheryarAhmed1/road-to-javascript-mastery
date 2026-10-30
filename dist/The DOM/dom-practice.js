//Task 1 : Select the heading of a page by ID and change its text to "Welcome to Sheryians!"
let heading = document.querySelector('#heading');
heading.innerText = 'Welcome to Sheryians!';

//Task2 : Select <li> element and print their text using a loop

let list = document.querySelectorAll('li');

for (i = 0; i < list.length; i++) {
    console.log(list[i].textContent)
}

// list.forEach(val => {
//     console.log(val.textContent);
// });

//Task3: // Select a paragraph and replace its content with:
{/* <b>Updated</b> by JavaScript */ }

let para = document.querySelector('p');
para.innerHTML = ' <b>Updated</b> by JavaScript';


//Task4 : How to do get the src of and image using Javascript?
let img = document.querySelector('img');

//Two methods are following
console.log(img.src);//method 1
// console.log(img.getAttribute('src')); //method 2 attribute selector

//Task5 : What does setAttribute() do?
//it changes attribute values

img.setAttribute('src', 'https://images.unsplash.com/photo-1789758385844-89a1e3d42aec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDE%3D');

//Tssk6 : Select a link and update its href to this point to https://sheryians.com
let a = document.querySelector('a')
a.href = 'https://sheryians.com'
// a.setAttribute('href' , 'https://sheryians.com');


//Task7 : Add a title attribute to a div dynamically
let div = document.querySelector('div');
div.title = 'Paragraph';

//Task8 : Remove disabled attribute from a button
const btn = document.querySelector('button');
btn.removeAttribute('disabled');

//Task9: Create a new list item <li> New Task </li> and add it to the end of a <ul>
let li = document.createElement('li');
li.innerText = 'New Task';

document.querySelector('ul').appendChild(li);

//Task10: Select the first item in a list and delete it from the DOM
let ul = document.querySelector('ul');
let first = document.querySelector('li')
ul.removeChild(first);

//Task11: How do you change the background color of an element?

ul.classList.add('bg-red-500', 'p-5', 'rounded-lg', 'text-white' );

//Task12: Add a highlight class to every even item in a list
let even = document.querySelectorAll('ul li:nth-child(2n)');
even.forEach(add => add.classList.add('text-black'))