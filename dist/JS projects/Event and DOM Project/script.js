const form = document.querySelector('form')
const inputs = document.querySelectorAll('input');

form.addEventListener('submit', function (push) {
    push.preventDefault();

    const main = document.createElement('div')
    // main.className = 'border border-gray-700 p-5 w-100 m-auto mt-10 rounded-lg';
    main.className = 'flex flex-col items-center bg-white border border-slate-100 p-8 w-80 sm:w-96 m-auto mt-12 rounded-2xl shadow-xl shadow-slate-200/80 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1';

    const profile = document.createElement('div');
    // profile.className = 'w-28 h-28 overflow-hidden rounded-full text-center';
    profile.className = 'w-28 h-28 overflow-hidden rounded-full shadow-md mb-5';

    const img = document.createElement('img');

    img.className = 'w-full h-full object-cover';
    img.setAttribute('src', inputs[0].value)

    const h3 = document.createElement('h3');
    h3.textContent = inputs[1].value;
    h3.className = 'text-xl font-bold text-slate-800 tracking-tight mb-1';

    const h5 = document.createElement('h5');
    h5.textContent = inputs[2].value;
    h5.className = 'text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-4 bg-indigo-50/60 px-3 py-1 rounded-full';

    const p = document.createElement('p');
    p.textContent = inputs[3].value;
    p.className = 'text-sm text-slate-500 text-center leading-relaxed font-normal max-w-[240px]';

    profile.appendChild(img);

    main.appendChild(profile);
    main.appendChild(h3);
    main.appendChild(h5);
    main.appendChild(p);

    document.body.appendChild(main)

    inputs.forEach(function (check) {
        if (check.type !== 'submit') {
            check.value = ''
        }
    });
});
