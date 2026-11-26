const totalCount = document.querySelector("#galleryTotalCount");
const loading = document.querySelector("#galleryLoadingState");
const error = document.querySelector("#galleryErrorMessage");
const container = document.querySelector("#galleryCardsContainer");

async function getPhotos() {
  try {
    // Fetch API
    const response = await fetch("https://fakestoreapi.noksha.dev/api/photos");
    if (!response.ok) {
      throw new Error("Failed to fetch photos");
    }

    // Convert response into JSON
    const result = await response.json();
    // console.log(result);

    // Get photos array
    const photos = result.data;

    // Display total photos
    totalCount.textContent = photos.length;

    // Create gallery cards dynamically
    container.innerHTML = photos.map(photo => {
      return `
                <div class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300">
                    <!-- Image -->
                    <div class="h-64 overflow-hidden">
                        <img
                            src="${photo.url}"
                            alt="${photo.title}"
                            class="w-full h-full object-cover hover:scale-105 transition duration-300"
                        >
                    </div>
                    <!-- Title -->
                    <div class="p-4">
                        <h2 class="text-sm font-semibold text-slate-700">
                            ${photo.title}
                        </h2>
                    </div>
                </div>
            `;
    }).join("");

  }
  catch (err) {
    console.error("Error:", err);
    error.classList.remove("hidden");
  }
  finally {
    loading.classList.add("hidden");
  }
}
// Calling function
getPhotos();

//Wheather API
// const apiKey = 'f7aae13356d0bbc4f37c449517d4957b';
// const city = 'Islamabad';
const city = 'Rawalpindi';

// https://, &appid=${apiKey}, aur &units=metric shamil kar diya gaya hai
const url = 'http://api.weatherapi.com/v1/current.json?key=da574a1c83ae4211b58100527262611&q=Rawalpindi&aqi=yes';

async function getInfo() {
  try {
    console.log('Getting Weather Details...');

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Problem in fetching. Status: ${response.status}`);
    }

    const data = await response.json();

    console.log(data);

  } catch (error) {
    console.log('Facing some issues:', error.message);
  }
}

getInfo();
