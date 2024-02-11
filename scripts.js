// Get references to the slideshow and slides
const slideshow = document.getElementById('slideshow');
const slides = slideshow.querySelectorAll('.slide');

// Initialize current slide index
let currentIndex = 0;

// Function to show the current slide
function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    
    // Show the slide at the specified index
    slides[index].style.display = 'block';
}

// Function to show the next slide
function showNextSlide() {
    currentIndex++;

    // Check if we reached the last slide
    if (currentIndex >= slides.length) {
        // If so, stop the slideshow
        currentIndex = slides.length - 1;
    }

    // Show the next slide
    showSlide(currentIndex);
}

// Show the first slide initially
showSlide(0);
