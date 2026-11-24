//Async JS 
console.log('Start');

setTimeout(() => {
    console.log('Aynchrounous');
}, 2000);

console.log('End');

//Callback Function
function sayHello(name, sayBaye) {
    console.log('Hey ' + name);
    sayBaye();  //here callback is callingF
}
sayHello('Ali', () => {
    console.log('Welcome to Javascript');
});

/**
 * Simulates an asynchronous user authentication and profile fetching workflow
 * using JavaScript callbacks.
 */

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
    }, 2000);
}

// Start the async workflow
authenticateUser('ali_dev', fetchUserProfile);
