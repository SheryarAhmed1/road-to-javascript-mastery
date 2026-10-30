//What is DOM 
// The Document Object Model (DOM) is a programming interface created by the browser that represents an HTML webpage as a logical, tree-like structure of objects.


// let heading = document.querySelector("heading");

//Attribute Manipulation
let img = document.querySelector('img');

//setAttribute()
img.setAttribute('src', 'https://images.unsplash.com/photo-1499678329028-101435549a4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D');

//.Dot Notation Method
// img.src = 'https://images.unsplash.com/photo-1499678329028-101435549a4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'


//getAttribute()
console.log(img.getAttribute('src'));

//removeAttribute()
img.removeAttribute('alt');

///Dynamic DOM Manipulation
/*
1: createElement()
2: append/appendChild(); //add element in the end
3: removeChild();
4: prepend()//add element in start 
*/

//1:  createElement()
let h2 = document.createElement('h2');
h2.innerText = 'dynamic DOM manipulation';
h2.classList.add('text-center', 'text-red-500', 'font-bold', 'uppercase', 'text-xl');
h2.classList.toggle('text-xl')//
h2.classList.remove('text-red-500')

document.querySelector('body').prepend(h2)// method 1
// document.body.append(h2)//  method 2
