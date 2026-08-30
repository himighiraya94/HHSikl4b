let currentIndex = 0;
const track = document.querySelector('.carousel-track');
const totalSlides = document.querySelectorAll('.carousel-track img').length;

// Auto swipe every 3.5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}, 3500);