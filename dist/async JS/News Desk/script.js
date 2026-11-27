const apiKey = CONFIG.API_KEY;

const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
const cardContainer = document.querySelector('#card-container');
const topicHeading = document.querySelector('#topic-heading');
const resultsCount = document.querySelector('#results-count');
const categoryBtns = document.querySelectorAll('.category-btn');

// Main function with dynamic query parameter
async function fetchNews(query = 'Technology') {
    try {
        // Update heading & show loading state
        topicHeading.innerHTML = `Top Stories in <span class="text-indigo-600 capitalize">${query}</span>`;
        cardContainer.innerHTML = `
            <div class="col-span-full flex flex-col items-center justify-center py-20 text-slate-400">
                <div class="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mb-3"></div>
                <p class="text-sm font-medium">Fetching latest stories...</p>
            </div>
        `;

        // Dynamic URL (language=en ensures readable English articles)
        const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&language=en&sortBy=publishedAt&apiKey=${apiKey}`;

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Unable to process your query (Status: ${response.status})`);
        }

        const data = await response.json();
        resultsCount.textContent = `${data.articles.length} articles loaded`;

        // Handle empty search results
        if (data.articles.length === 0) {
            cardContainer.innerHTML = `
                <div class="col-span-full text-center py-16 bg-white rounded-2xl border border-slate-200">
                    <p class="text-lg font-bold text-slate-700">No articles found for "${query}"</p>
                    <p class="text-sm text-slate-500 mt-1">Try searching for another keyword.</p>
                </div>
            `;
            return;
        }

        // Build cards HTML cleanly
        let cardsHTML = '';
        data.articles.forEach(article => {
            // Skip removed articles from NewsAPI
            if (article.title === '[Removed]') return;

            // Fallbacks for missing data
            const image = article.urlToImage || 'https://unsplash.com';
            const author = article.author ? article.author.slice(0, 28) : 'Editorial Desk';
            const description = article.description || 'Click read more to explore the complete coverage of this story.';
            const sourceName = article.source?.name || 'Global News';
            const date = new Date(article.publishedAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            });

            cardsHTML += `
                <article class="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                    
                    <!-- Image with Source Badge -->
                    <div class="relative h-52 overflow-hidden bg-slate-200">
                        <img 
                            src="${image}" 
                            alt="News cover" 
                            onerror="this.src='https://unsplash.com'"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span class="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-semibold px-3 py-1 rounded-full">
                            ${sourceName}
                        </span>
                    </div>

                    <!-- Card Body -->
                    <div class="p-5 flex-1 flex flex-col">
                        <div class="flex items-center gap-2 text-xs text-slate-400 mb-2">
                            <span>${date}</span>
                            <span>•</span>
                            <span class="truncate">By ${author}</span>
                        </div>

                        <h3 class="text-base font-bold text-slate-900 leading-snug mb-2.5 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                            ${article.title}
                        </h3>

                        <p class="text-slate-600 text-sm leading-relaxed mb-5 flex-1 line-clamp-3">
                            ${description}
                        </p>

                        <!-- Footer Action -->
                        <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
                            <a href="${article.url}" target="_blank" rel="noopener noreferrer" 
                               class="w-full text-center bg-slate-900 hover:bg-indigo-600 text-white text-xs font-semibold py-2.5 px-4 rounded-xl transition-colors duration-200">
                                Read Full Story →
                            </a>
                        </div>
                    </div>
                </article>
            `;
        });

        cardContainer.innerHTML = cardsHTML;

    } catch (error) {
        console.error(error.message);
        cardContainer.innerHTML = `
            <div class="col-span-full text-center py-12 bg-red-50 rounded-2xl border border-red-200 text-red-600">
                <p class="font-bold">Something went wrong!</p>
                <p class="text-sm mt-1">${error.message}</p>
            </div>
        `;
    }
}

// 1. Handle Form Submit (Dynamic Search)
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (query) {
        fetchNews(query);
    }
});

// 2. Handle Category Pill Clicks
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Reset active button styles
        categoryBtns.forEach(b => {
            b.classList.remove('bg-indigo-600', 'text-white');
            b.classList.add('bg-white', 'text-slate-600');
        });
        btn.classList.remove('bg-white', 'text-slate-600');
        btn.classList.add('bg-indigo-600', 'text-white');

        const topic = btn.getAttribute('data-topic');
        searchInput.value = '';
        fetchNews(topic);
    });
});

// Initial load
fetchNews('Technology');