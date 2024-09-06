// document.querySelectorAll('.nav-button').forEach(button => {
//     button.addEventListener('click', function () {
//         document.querySelector('.image__gallery-collection[data-hidden="false"]').setAttribute('data-hidden', 'true');
//         const targetCollection = document.getElementById(button.getAttribute('data-target'));
//         targetCollection.setAttribute('data-hidden', 'false');
//         document.querySelector('.dynamic-title').textContent = button.nextElementSibling.textContent;
//     });
// });

// document.querySelectorAll('.image-item').forEach(item => {
//     item.addEventListener('click', function () {
//         item.classList.toggle('full-screen');
//         document.querySelector('.close-btn').style.display = 'block';
//     });
// });

// document.querySelector('.close-btn').addEventListener('click', function () {
//     document.querySelector('.image-item.full-screen').classList.remove('full-screen');
//     document.querySelector('.close-btn').style.display = 'none';
// });

const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightbox-content');
const closeBtn = document.querySelector('.lightbox .close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let currentImageIndex;

galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentImageIndex = index;
        lightbox.style.display = 'flex';
        lightboxContent.src = item.src;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex === 0) ? galleryItems.length - 1 : currentImageIndex - 1;
    lightboxContent.src = galleryItems[currentImageIndex].src;
});

nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex === galleryItems.length - 1) ? 0 : currentImageIndex + 1;
    lightboxContent.src = galleryItems[currentImageIndex].src;
});
