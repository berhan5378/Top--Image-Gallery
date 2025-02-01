let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots-container');
const totalSlides = slides.length;

// Create dots
slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function updateSlider() {
    // Update slides
    slides.forEach((slide, index) => {
        let position = (index - currentIndex + totalSlides) % totalSlides;
        slide.classList.remove('active', 'left', 'right', 'far-left', 'far-right', 'hidden');

        if (position === 0) {
            slide.classList.add('active');
        } else if (position === 1) {
            slide.classList.add('right');
        } else if (position === totalSlides - 1) {
            slide.classList.add('left'); 
        } else if (position === 2) {
            slide.classList.add('far-right'); 
        } else if (position === totalSlides - 2) {
            slide.classList.add('far-left'); 
        } else {
            slide.classList.add('hidden'); 
        }
    });

    // Update dots
    dots.forEach((dot, index) => {
        let position = (index - currentIndex + totalSlides) % totalSlides;
        dot.classList.remove('active', 'left', 'right', 'far-left', 'far-right', 'hidden');

        if (position === 0) {
            dot.classList.add('active');
        } else if (position === 1) {
            dot.classList.add('right');
        } else if (position === totalSlides - 1) {
            dot.classList.add('left');
        } else if (position === 2) {
            dot.classList.add('far-right');
        } else if (position === totalSlides - 2) {
            dot.classList.add('far-left');
        } else {
            dot.classList.add('hidden'); 
        }
    });
}

function rotateSlider(direction) {
    if (direction === 'left') {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Move anticlockwise
    } else if (direction === 'right') {
        currentIndex = (currentIndex + 1) % totalSlides; // Move clockwise
    }
    updateSlider();
}

function goToSlide(index) {
    currentIndex = index;
    updateSlider();
}

// Initialize slider
updateSlider();