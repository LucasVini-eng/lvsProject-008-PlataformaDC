const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
        
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

const searchInput = document.getElementById('searchInput');
const searchSuggestions = document.getElementById('searchSuggestions');
const suggestionItems = document.querySelectorAll('.search-suggestion');

searchInput.addEventListener('focus', () => {
    searchSuggestions.classList.remove('hidden');
});

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase(); 
    suggestionItems.forEach(item => {
        const text = item.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
            item.style.display = 'none';
        }
});

    if (searchTerm.length > 0) {
        searchSuggestions.classList.remove('hidden');
    }
});

document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchSuggestions.contains(e.target)) {
        searchSuggestions.classList.add('hidden');
    }
});

suggestionItems.forEach(item => {
    item.addEventListener('click', (e) => {
    e.preventDefault();
    searchInput.value = item.textContent;
    searchSuggestions.classList.add('hidden');
    console.log('Pesquisando por:', item.textContent);
    });
});

const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indicators = document.querySelectorAll('.indicator');
let currentSlide = 0;
const totalSlides = 5;

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
        indicators.forEach((indicator, index) => {
        if (index === currentSlide) {
            indicator.classList.remove('opacity-50');
            indicator.classList.add('opacity-100');
        } else {
            indicator.classList.remove('opacity-100');
            indicator.classList.add('opacity-50');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

indicators.forEach((indicator, index) => {
indicator.addEventListener('click', () => {
    currentSlide = index;
    updateCarousel();
    });
});

setInterval(nextSlide, 5000);
updateCarousel();
