// Отримуємо всі зображення для десктопу та мобільних пристроїв
const desktopImages = document.querySelectorAll('.desktop-image');
const mobileImages = document.querySelectorAll('.mobile-image');

// Функція для зміни активного зображення
function changeFrame(event) {
    const currentImage = event.target;

    // Зупиняємо анімацію попереднього зображення
    currentImage.classList.remove('active');

    // Знаходимо наступне зображення
    let nextImage = currentImage.nextElementSibling;
    
    // Якщо наступного зображення немає, повертаємось до першого
    if (!nextImage) {
        nextImage = desktopImages[0] || mobileImages[0];
    }

    // Активуємо наступне зображення
    nextImage.classList.add('active');
}

// Додаємо події кліку для кожного зображення
desktopImages.forEach(image => image.addEventListener('click', changeFrame));
mobileImages.forEach(image => image.addEventListener('click', changeFrame));
