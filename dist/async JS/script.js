/*// Async JS 
console.log('Start');

setTimeout(() => {
    console.log('Asynchronous');
}, 2000);

console.log('End');

// Callback Function
function sayHello(name, sayBye) {
    console.log('Hey ' + name);
    sayBye(); // here callback is called
}

sayHello('Ali', () => {
    console.log('Welcome to JavaScript');
});


//  Simulates an asynchronous user authentication and profile fetching workflow
//  using JavaScript callbacks.
 
function authenticateUser(username, callback) {
    console.log(`Authenticating user: ${username}...`);

    setTimeout(() => {
        console.log('Authentication successful!');
        const userSession = { userId: 101, username: username, role: 'Admin' };
        callback(userSession);
    }, 2000);
}

function fetchUserProfile(session) {
    console.log(`Fetching dashboard data for ${session.username}...`);

    setTimeout(() => {
        console.log(`Profile loaded! Welcome back, ${session.username} (${session.role}).`);
    }, 1000);
}

// Start the async workflow
authenticateUser('ali_dev', fetchUserProfile);

// Creating a New Promise
const orderProduct = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve('Your request Accepted');
    } else {
        reject('Your request is Rejected');
    }
});

console.log(orderProduct);

// Asynchronous JavaScript Practice
// Task 1:
function downloadFile(fileName, callback) {
    console.log("Downloading Start...");
    
    setTimeout(() => {
        console.log('File Downloaded: ' + fileName);
        callback('Now File is Opening...');
    }, 3000);
}

downloadFile("notes.pdf", (message) => {
    console.log(message);
});
*/

// Task 2:
async function getJoke() {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any?safe-mode');
        const data = await response.json();
        // console.log(data);
        console.log('Question: ' + data.setup);
        console.log('Punchline: ' + data.delivery);

    } catch (error) {
        console.log('internet or server issue')
    }
}
getJoke();


//Random User Profile Generator
const API_URL = "https://fakestoreapi.noksha.dev/api/users";

const usersContainer = document.querySelector("#usersContainer");
const totalUsers = document.querySelector("#totalUsers");
const loading = document.querySelector("#loading");
const error = document.querySelector("#error");


async function getUsers() {

    try {

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const result = await response.json();

        const users = result.data;
        console.log(users)
        totalUsers.textContent = result.totalUsers;

        usersContainer.innerHTML = users.map(user => {

            const initials = user.name
                .split(" ")
                .map(word => word[0])
                .slice(0, 2)
                .join("")
                .toUpperCase();

            return `
                <div class="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition duration-300 p-6">

                    <!-- User Header -->
                    <div class="flex items-center gap-4 mb-5">

                        <div class="w-14 h-14 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-lg shrink-0">
                            ${initials}
                        </div>

                        <div class="min-w-0">
                            <h2 class="text-lg font-semibold text-slate-800 truncate">
                                ${user.name}
                            </h2>

                            <p class="text-sm text-indigo-500">
                                @${user.username}
                            </p>
                        </div>

                    </div>

                    <!-- Email -->
                    <div class="mb-4">
                        <p class="text-xs uppercase tracking-wide text-slate-400 mb-1">
                            Email
                        </p>

                        <p class="text-sm text-slate-600 break-all">
                            ${user.email}
                        </p>
                    </div>

                    <!-- Address -->
                    <div class="mb-4">
                        <p class="text-xs uppercase tracking-wide text-slate-400 mb-1">
                            Address
                        </p>

                        <p class="text-sm text-slate-600">
                            ${user.address.street}, ${user.address.city}
                        </p>

                        <p class="text-xs text-slate-400 mt-1">
                            ZIP: ${user.address.zipcode}
                        </p>
                    </div>

                    <!-- Company -->
                    <div class="bg-slate-50 rounded-lg p-3">
                        <p class="text-xs uppercase tracking-wide text-slate-400 mb-1">
                            Company
                        </p>

                        <p class="text-sm font-medium text-slate-700">
                            ${user.company.name}
                        </p>
                    </div>

                    <!-- Footer -->
                    <div class="flex justify-between items-center mt-5 pt-4 border-t border-slate-100">

                        <span class="text-xs text-slate-400">
                            User ID: ${user._id}
                        </span>

                        <span class="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                            Active
                        </span>

                    </div>

                </div>
            `;

        }).join("");

    } catch (err) {

        console.error(err);

        error.classList.remove("hidden");

    } finally {

        loading.classList.add("hidden");

    }

}

getUsers();