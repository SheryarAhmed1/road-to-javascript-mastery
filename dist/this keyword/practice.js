let form = document.querySelector('form');
let username = document.querySelector('#name');
let role = document.querySelector('#role');
let bio = document.querySelector('#bio');
let photo = document.querySelector('#photo');

let userManager = {
    users: [],

    init: function () {
        form.addEventListener('submit', this.submitForm.bind(this));
    },

    submitForm: function (e) {
        e.preventDefault();
        this.addUser();
    },

    addUser: function () {
        this.users.push({
            id: Date.now(),
            username: username.value,
            role: role.value,
            bio: bio.value,
            photo: photo.value
        });

        form.reset();
        this.renderUi();
    },

    renderUi: function () {
        document.querySelector(".users").innerHTML = "";

        this.users.forEach(function (user) {
            const card = document.createElement("div");

            card.className =
                "bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col items-center border border-blue-100 hover:scale-105 transition";

            // Image
            const img = document.createElement("img");
            img.className =
                "w-28 h-28 rounded-full object-cover mb-5 border-4 border-blue-200 shadow";

            img.src = user.photo;
            img.alt = "User Photo";
            card.appendChild(img);

            // Name
            const name = document.createElement("h2");
            name.className = "text-2xl font-bold mb-1 text-blue-700";
            name.textContent = user.username;
            card.appendChild(name);

            // Role
            const role = document.createElement("p");
            role.className = "text-purple-500 mb-2 font-medium";
            role.textContent = user.role;
            card.appendChild(role);

            // Description
            const desc = document.createElement("p");
            desc.className = "text-gray-700 text-center";
            desc.textContent = user.bio;
            card.appendChild(desc);

            // Delete Button
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";

            deleteBtn.className =
                "bg-red-500 text-white px-4 py-2 rounded-lg mt-5 hover:bg-red-600 transition shadow";

            // Delete Specific User
            deleteBtn.addEventListener("click", () => {
                this.users = this.users.filter(function (u) {
                    return u.id !== user.id;
                });

                this.renderUi();
            });

            card.appendChild(deleteBtn);

            // Append Card
            document.querySelector(".users").appendChild(card);

        }.bind(this));
    },

    removeUi: null,
};

userManager.init();