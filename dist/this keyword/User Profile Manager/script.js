// User Form
const form = document.querySelector('#userForm');
const userName = document.querySelector('#userName');
const userCity = document.querySelector('#userCity');
const userProfession = document.querySelector('#userProfession');
const submitBtn = document.querySelector('#submitBtn');
const userEmail = document.querySelector('#userEmail');
const userProfilePic = document.querySelector('#userProfilePic');
const userBanner = document.querySelector('#userBanner');

// Cards Container
const cardsContainer = document.querySelector('#cardsContainer');

let users = JSON.parse(localStorage.getItem('users')) || [];

function saveToLocalStorage() {
    localStorage.setItem('users', JSON.stringify(users));
}

function renderCards() {
    cardsContainer.innerHTML = '';

    users.forEach((user, index) => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-3xl shadow-md overflow-hidden w-full max-w-xs border border-gray-200 p-3';

        // Banner
        const bannerWrapper = document.createElement('div');
        bannerWrapper.className = 'relative h-28 w-full rounded-2xl overflow-hidden bg-linear-to-r from-blue-300 via-blue-400 to-sky-300';

        const bannerImg = document.createElement('img');
        bannerImg.alt = 'Banner';
        bannerImg.className = 'w-full h-full object-cover';

        if (user.banner) {
            bannerImg.src = user.banner;
        } else {
            bannerImg.classList.add('hidden');
        }
        bannerWrapper.appendChild(bannerImg);

        // Profile Picture / Avatar
        const avatarSection = document.createElement('div');
        avatarSection.className = 'relative flex justify-center -mt-12 mb-3';

        const avatarCircle = document.createElement('div');
        avatarCircle.className = 'h-24 w-24 rounded-full border-4 border-white shadow-md overflow-hidden bg-blue-600 flex items-center justify-center';

        const profileImg = document.createElement('img');
        profileImg.alt = 'Profile';
        profileImg.className = 'w-full h-full object-cover';

        const avatarFallback = document.createElement('span');
        avatarFallback.className = 'text-white text-3xl font-bold uppercase';
        avatarFallback.textContent = user.name.charAt(0) || '?';

        if (user.profilePic) {
            profileImg.src = user.profilePic;
            avatarFallback.classList.add('hidden');
        } else {
            profileImg.classList.add('hidden');
        }

        avatarCircle.append(profileImg, avatarFallback);
        avatarSection.appendChild(avatarCircle);

        // User Info
        const infoSection = document.createElement('div');
        infoSection.className = 'text-center px-3';

        const nameEl = document.createElement('h3');
        nameEl.className = 'text-xl font-bold text-gray-900';
        nameEl.textContent = user.name;

        const professionEl = document.createElement('p');
        professionEl.className = 'text-sm text-gray-500 mt-0.5';
        professionEl.textContent = user.profession;

        const emailEl = document.createElement('p');
        emailEl.className = 'text-xs font-semibold text-gray-700 mt-2';
        emailEl.textContent = user.email;

        const badgesRow = document.createElement('div');
        badgesRow.className = 'flex items-center justify-center gap-2 mt-4';

        const cityBadge = document.createElement('span');
        cityBadge.className = 'bg-gray-100 text-gray-700 text-xs font-semibold px-3.5 py-1.5 rounded-full';
        cityBadge.textContent = user.city;

        badgesRow.append(cityBadge);
        infoSection.append(nameEl, professionEl, emailEl, badgesRow);

        // Edit & Delete Buttons
        const actionsRow = document.createElement('div');
        actionsRow.className = 'mt-5 pt-3 border-t border-gray-100 flex justify-between gap-2 px-1';

        const editBtn = document.createElement('button');
        editBtn.type = 'button';
        editBtn.className = 'flex-1 bg-blue-500 py-1.5 hover:bg-blue-600 text-white text-sm font-semibold rounded-xl cursor-pointer transition duration-200';
        editBtn.textContent = 'Edit';

        const deleteBtn = document.createElement('button');
        deleteBtn.type = 'button';
        deleteBtn.className = 'flex-1 bg-red-500 py-1.5 hover:bg-red-600 text-white text-sm font-semibold rounded-xl cursor-pointer transition duration-200';
        deleteBtn.textContent = 'Delete';

        deleteBtn.addEventListener('click', () => {
            users.splice(index, 1);
            saveToLocalStorage();
            renderCards();
        });

        editBtn.addEventListener('click', () => {
            userName.value = user.name;
            userEmail.value = user.email;
            userCity.value = user.city;
            userProfession.value = user.profession;
            userProfilePic.value = user.profilePic;
            userBanner.value = user.banner;

            users.splice(index, 1);
            saveToLocalStorage();
            renderCards();
            form.scrollIntoView({ behavior: 'smooth' });
        });

        actionsRow.append(editBtn, deleteBtn);
        card.append(bannerWrapper, avatarSection, infoSection, actionsRow);
        cardsContainer.appendChild(card);
    });
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const user = {
        name: userName.value.trim(),
        email: userEmail.value.trim(),
        city: userCity.value.trim(),
        profession: userProfession.value.trim(),
        profilePic: userProfilePic.value.trim(),
        banner: userBanner.value.trim(),
    };

    users.push(user);
    saveToLocalStorage();
    renderCards();
    form.reset();
});

renderCards();