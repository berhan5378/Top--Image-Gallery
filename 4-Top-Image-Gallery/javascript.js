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
    slides.forEach((slide, index) => {
        let position = (index - currentIndex + totalSlides) % totalSlides;
        slide.classList.remove('active', 'left', 'right', 'hidden');

        if (position === 0) {
            slide.classList.add('active'); // Center image
        } else if (position === 1) {
            slide.classList.add('right'); // Right image
        } else if (position === totalSlides - 1) {
            slide.classList.add('left'); // Left image
        } else {
            slide.classList.add('hidden'); // Hidden images
        }
    });

    // Update dots
    dots.forEach((dot, index) => {
        let position = (index - currentIndex + totalSlides) % totalSlides;
        dot.classList.remove('active', 'left', 'right', 'hidden');

        if (position === 0) {
            dot.classList.add('active');
        } else if (position === 1) {
            dot.classList.add('right');
        } else if (position === totalSlides - 1) {
            dot.classList.add('left');
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