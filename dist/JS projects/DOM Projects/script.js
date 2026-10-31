const section = document.createElement('div');
const h2 = document.createElement('h2');
const p = document.createElement('p');
const img = document.createElement('img');

img.setAttribute('src', 'https://images.pexels.com/photos/30976004/pexels-photo-30976004.jpeg');

img.classList.add('h-32', 'rounded-full');
h2.classList.add('text-center', 'font-bold', 'text-xl');
p.classList.add('text-center');
h2.innerText = 'Ali';
p.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nostrum harum eos tenetur illum? Tempora.';
section.classList.add('bg-zinc-800', 'p-4',
    'rounded-xl', 'text-white', 'h-98');

section.prepend(img);
section.appendChild(h2);
section.appendChild(p);

document.querySelector('#profile-container').append(section);