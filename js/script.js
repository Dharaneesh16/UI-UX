const screenshots = document.querySelectorAll('.screenshot-img');
const overlay = document.querySelector('.screenshot-overlay');
const enlargedImg = document.querySelector('#enlarged-img');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentImageIndex = 0;

screenshots.forEach((screenshot, index) => {
    screenshot.addEventListener('click', () => {
        currentImageIndex = index;
        const imgSrc = screenshot.getAttribute('src');
        enlargedImg.setAttribute('src', imgSrc);
        overlay.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
});

prevBtn.addEventListener('click', showPreviousImage);
nextBtn.addEventListener('click', showNextImage);

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        showPreviousImage();
    } else if (e.key === 'ArrowRight') {
        showNextImage();
    }
});

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % screenshots.length;
    const imgSrc = screenshots[currentImageIndex].getAttribute('src');
    enlargedImg.setAttribute('src', imgSrc);
}

function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + screenshots.length) % screenshots.length;
    const imgSrc = screenshots[currentImageIndex].getAttribute('src');
    enlargedImg.setAttribute('src', imgSrc);
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var adminSection = document.getElementById("customer");
    var backToTopBtn = document.getElementById("backToTopBtn");

    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition > adminSection.offsetTop) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
