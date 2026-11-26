// const url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=62394e5798c24135a69986649b12ca0c';
const url = 'https://newsapi.org/v2/everything?q=tesla&from=2026-10-26&sortBy=publishedAt&apiKey=62394e5798c24135a69986649b12ca0c'
const newsContainer = document.getElementById('news-container');

async function getNews() {
    try {
        // Show loading message while fetching
        newsContainer.innerHTML = '<p class="text-center col-span-full text-gray-500 text-lg">Loading latest news...</p>';

        const response = await fetch(url); // Use your working News API URL here

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data)
        // Clear loading text
        newsContainer.innerHTML = '';

        // Loop through each article and create a Tailwind styled card
        data.articles.forEach((article) => {
            const imageUrl = article.urlToImage ? article.urlToImage : 'https://placeholder.com';
            const description = article.description ? article.description : 'Click below to read the full story from the source.';
            const author = article.author ? article.author : 'Unknown Author';

            const cardHTML = `
                <article class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
                    <img src="${imageUrl}" alt="News thumbnail" class="w-full h-48 object-cover">
                    
                    <div class="p-5 flex-1 flex flex-col">
                        <span class="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
                            ${article.source.name || 'News'}
                        </span>
                        
                        <h2 class="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                            ${article.title}
                        </h2>
                        
                        <p class="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">
                            ${description}
                        </p>
                        
                        <div class="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                            <span class="truncate max-w-[150px]">By ${author}</span>
                            <a href="${article.url}" target="_blank" rel="noopener noreferrer" 
                               class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors">
                                Read More
                            </a>
                        </div>
                    </div>
                </article>
            `;

            newsContainer.innerHTML += cardHTML;
        });

    } catch (error) {
        console.error('Error fetching news:', error.message);
        newsContainer.innerHTML = `
            <div class="col-span-full text-center py-10">
                <p class="text-red-500 font-semibold text-lg">Failed to load news updates.</p>
                <p class="text-gray-500 text-sm mt-1">${error.message}</p>
            </div>
        `;
    }
}

getNews();