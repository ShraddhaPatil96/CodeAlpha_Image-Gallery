let currentScrollPosition = 0;
const gallery = document.querySelector('.gallery');
const galleryWidth = gallery.scrollWidth - gallery.clientWidth;

function jumpToImage(index) {
    const itemWidth = document.querySelector('.gallery-item').clientWidth + 20;
    currentScrollPosition = index * itemWidth;

    if (currentScrollPosition < 0) {
    } else if (currentScrollPosition > galleryWidth) {
        currentScrollPosition = galleryWidth;
    }

    gallery.style.transform = `translateX(-${currentScrollPosition}px)`;
}

// Lightbox functionality
function openLightbox(index) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const imageUrl = galleryItems[index].style.backgroundImage.slice(5, -2);

    lightboxImg.src = imageUrl;
    lightbox.style.display = 'block';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

// Autoscroll functionality
setInterval(() => jumpToImage((currentScrollPosition / 250 + 1) % document.querySelectorAll('.gallery-item').length), 3000);
