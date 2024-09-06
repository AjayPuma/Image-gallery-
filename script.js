const imageWrapper = document.querySelector('.image-wrapper');
const currentImage = document.getElementById('current-image');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const imageCount = document.getElementById('image-count');

const images = [
    './photo/image1.jpg',
    './photo/image2.jpg',
    './photo/image3.jpg',
    './photo/image4.jpg',
    './photo/image5.jpg',
    './photo/image6.jpg',
    './photo/image7.jpg',
    './photo/image8.jpg',
    './photo/image9.jpg',
    './photo/image10.jpg',
];

let index = 1;


function updateImage(newIndex) {
    ind = newIndex;
    currentImage.src = `./photo/image${ind}.jpg`;
    console.log(currentImage.src);

    imageCount.innerText = `${ind}/${images.length}` // Update image count
}

function showNextImage() {
    index = (index % images.length) + 1;
    console.log(index);

    updateImage(index);
}

function showPrevImage() {
    index = (index)
    updateImage(newIndex);
}
updateImage(index)
prevBtn.addEventListener('click', showPrevImage);
nextBtn.addEventListener('click', showNextImage);