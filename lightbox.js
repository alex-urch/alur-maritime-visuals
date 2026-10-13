const photos = document.querySelectorAll('.jv74-collage img');
const lightbox = document.querySelector('.lightbox');
const bigImg = document.querySelector('.lightbox-img');
let current = 0;

function show(index) {
    // wrap around: after the last photo comes the first, and vice versa
    current = (index + photos.length) % photos.length;
    bigImg.src = photos[current].src;
    bigImg.alt = photos[current].alt;
}

photos.forEach((photo, index) => {
    photo.addEventListener('click', () => {
        show(index);
        lightbox.showModal();
    });
});

document.querySelector('.lightbox-prev').addEventListener('click', () => show(current - 1));
document.querySelector('.lightbox-next').addEventListener('click', () => show(current + 1));
document.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());

// keyboard arrows
document.addEventListener('keydown', (e) => {
    if (!lightbox.open) return;
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
});

// clicking the dark area around the photo closes it
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.close();
});