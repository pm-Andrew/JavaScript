// NYT API key & URL
const API_KEY = '<API-KEY>'; // removed API for security
const BASE_URL = 'https://api.nytimes.com/svc/topstories/v2'

// DOM elements
const sectionSelect = document.getElementById('sectionSelect')
const refreshButton = document.getElementById('refreshButton')
const newsContainer = document.getElementById('newsContainer')

// Format date to a more readable format "May 4, 2025, 08:00"
const formatDate = (dateString) => {
    const options = {
        // display year as number
        year: 'numeric',
        // showing full month
        month: 'long',
        // display day as number
        day: 'numeric',
        // 00:
        hour: '2-digit',
        // :00
        minute: '2-digit'
    }
    // return the converted date and time to local in english, with formatting
    return new Date(dateString).toLocaleDateString('en-US', options)
}

// Create static hero section that rotates through 5 top stories
const createHeroSection = (stories) => {
    // Get top 5 stories using slice
    const topStories = stories.slice(0, 5)
    // start with first story
    let currentIndex = 0

    // create the hero section
    const heroHTML = `
        <div class="hero mb-5 d-sm-none d-none d-lg-block">
            <div class="container-fluid px-4 py-5">
                <div class="row g-4">
                    <!-- Featured Story (Left) -->
                    <div class="col-md-4" id="featuredStory">
                        <div class="position-relative">
                            <!-- img with error handling -->
                            <a href="${topStories[0].url}" class="text-decoration-none">
                                <img src="${topStories[0].multimedia[1]?.url || 'https://placehold.co/600x400?text=No+Image+Available'}" 
                                    class="img-fluid mb-3 object-fit-cover hero-img" 
                                    alt="${topStories[0].title}">
                            </a>
                            <span class="position-absolute top-0 start-0 m-2 badge bg-danger text-uppercase">${topStories[0].section}</span>
                        </div>
                        <div class="mt-3">
                            <a href="${topStories[0].url}" class="text-decoration-none">
                                <h2 class="mb-2 story-title text-dark">${topStories[0].title}</h2>
                            </a>
                            <p class="text-body-secondary">${topStories[0].abstract}</p>
                            <small class="text-muted">${formatDate(topStories[0].published_date)}</small>
                        </div>
                    </div>
                    <!-- Story List (Right) -->
                    <div class="col-md-8 border-start">
                        <div class="list-group bg-transparent story-list-container overflow-auto">
                            ${topStories.map((story, index) => `
                                <div class="list-group-item border-0 border-bottom py-3 story-item transition-all${index === 0 ? 'active' : ''}" 
                                    data-index="${index}">
                                    <div class="p-3">
                                        <span class="badge bg-danger text-uppercase mb-2">${story.section}</span>
                                        <a href="${story.url}" class="text-decoration-none">
                                            <h3 class="h5 mb-2 text-dark">${story.title}</h3>
                                        </a>
                                        <p class="mb-2 d-none d-lg-block text-body-secondary">${story.abstract}</p>
                                        <small class="text-muted">${formatDate(story.published_date)}</small>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `

    // After rendering, set up the rotation
    setTimeout(() => {
        const featuredStory = document.getElementById('featuredStory')
        const storyItems = document.querySelectorAll('.story-item')

        // Rotate stories every 8 seconds
        setInterval(() => {
            // Remove active class and background from current story
            storyItems[currentIndex].classList.remove('active')
            storyItems[currentIndex].querySelector('div').classList.remove('bg-dark', 'bg-opacity-50')

            // Update index
            currentIndex = (currentIndex + 1) % topStories.length

            // Update featured story
            const nextStory = topStories[currentIndex]
            featuredStory.innerHTML = `
                <div class="position-relative">
                    <a href="${nextStory.url}" class="text-decoration-none">
                        <img src="${nextStory.multimedia[1]?.url || 'https://placehold.co/600x400?text=No+Image+Available'}" 
                            class="img-fluid mb-3 object-fit-cover hero-img" 
                            alt="${nextStory.title}">
                    </a>
                    <span class="position-absolute top-0 start-0 m-2 badge bg-danger text-uppercase">${nextStory.section}</span>
                </div>
                <div class="mt-3">
                    <a href="${nextStory.url}" class="text-decoration-none">
                        <h2 class="mb-2 story-title text-dark">${nextStory.title}</h2>
                    </a>
                    <p class="text-body-secondary">${nextStory.abstract}</p>
                    <small class="text-muted">${formatDate(nextStory.published_date)}</small>
                </div>
            `

            // Add active class and background to new story
            storyItems[currentIndex].classList.add('active')
            storyItems[currentIndex].querySelector('div').classList.add('bg-dark', 'bg-opacity-50')
        }, 8000)
    }, 0)

    return heroHTML
}

// Create HTML for a news card
const createNewsCard = (story) => {
    // create img variables to scope for storage
    let imageUrl
    let imageCaption
    // checking if story has any multimedia
    if (story.multimedia) {
        // grabbing the img size: [0] "Super Jumbo" [1] "threeByTwoSmallAt2X" [2] "Large Thumbnail"
        if (story.multimedia[1]) {
            // img
            imageUrl = story.multimedia[1].url
            // caption
            imageCaption = story.multimedia[1].caption
        } else { // if multimedia comes up null do this for imageURL & imageCaption
            imageUrl = 'https://placehold.co/600x400?text=No+Image+Available'
            imageCaption = 'News image'
        }
    } else { // if multimedia comes up null do this for imageURL & imageCaption
        imageUrl = 'https://placehold.co/600x400?text=No+Image+Available'
        imageCaption = 'News image'
    }
    // testing
    console.log(story)

    return `
        <div class="col-12 col-sm-6 col-md-4 col-xl-3 mb-4">
        <article class="card h-100 transition-all">
            <a href="${story.url}" class="text-decoration-none position-relative">
                <img src="${imageUrl}" class="card-img-top img-fluid mb-0 object-fit-cover news-card-img" alt="${imageCaption}" loading="lazy">
                <span class="position-absolute top-0 start-0 m-2 badge bg-danger text-uppercase">${story.section}</span>
                <span class="position-absolute bottom-0 start-0 m-2 badge bg-light">${formatDate(story.published_date)}</span>
            </a>
            <div class="card-body pt-3 pb-2">
                <h2 class="card-title mb-2">${story.title}</h2>
                <p class="card-text d-none d-md-block text-body-secondary">
                    ${story.abstract}
                </p>
            </div>
            <div class="card-footer bg-transparent border-0 pt-0">
                <small class="text-muted fst-italic">
                    ${story.byline}
                </small>
            </div>
        </article>
    </div>
    `
}

// Fetch news from the API using fetch 
const fetchNews = (section, callback) => {
    // constructing the URL based on previous variables declared
    const url = `${BASE_URL}/${section}.json?api-key=${API_KEY}`

    // fectch data from url
    fetch(url)
        .then((response) => {
            // checking status if "ok" (200-299 range)
            if (!response.ok) {
                // if promise returned is not between 200-299 
                // throw the created class Error message and HTTP status 
                throw new Error('HTTP Error: ' + response.status)
            }
            // conver to JSON and return parsed JSON
            return response.json()
        }) // grab the data from JSON
        .then((data) => {
            // return no errors and results
            callback(null, data.results)
        }) // if any errors occur catch
        .catch((error) => {
            // return error to the console
            callback(error)
        })
}

// Display news stories from section selected
const displayNews = (section) => {
    // display a loading message
    newsContainer.innerHTML = `
        <div class="text-center py-5">
            <div class="spinner-border spinner-border-sm text-dark me-2" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <span>Loading latest stories...</span>
        </div>`

    // fetch section defualt to home section, if error callback error
    // callback stories if no errors
    fetchNews(section || 'home', (error, stories) => {
        if (error) {
            // sending error to the console
            console.error('Error fetching news:', error)
            // error message to the HTML/ glass
            newsContainer.innerHTML = `
                <div class="text-center py-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-circle mb-3 text-danger" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                    </svg>
                    <h4 class="h5 mb-2">Unable to Load Stories</h4>
                    <p class="text-muted mb-0">Please try refreshing the page.</p>
                    <small class="text-muted d-block mt-2">Error: ${error.message}</small>
                </div>
            `
            return
        }

        // no problems && there are more than 0 stories loaded
        if (stories && stories.length > 0) {
            // Create hero section HTML
            const heroHTML = createHeroSection(stories)

            // Create card section with proper grid wrapping
            const cardSection = `
                <div class="container-fluid px-4">
                    <div class="row g-4">
                        ${stories.map((story) => createNewsCard(story)).join('')}
                    </div>
                </div>
            `

            // Combine hero and card sections
            newsContainer.innerHTML = heroHTML + cardSection
        }
    })
}

// Event Listeners for section selection
sectionSelect.addEventListener('change', (e) => {
    // get value from changed value
    displayNews(e.target.value)
})

// refresh button 
refreshButton.addEventListener('click', () => {
    // this scope only 
    displayNews(sectionSelect.value)
})

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    // home section is initial section
    displayNews('home')
})

