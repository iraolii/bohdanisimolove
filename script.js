// Отримуємо всі зображення для десктопу та мобільних пристроїв
const desktopImages = document.querySelectorAll('.desktop-image');
const mobileImages = document.querySelectorAll('.mobile-image');

// Функція для зміни активного зображення
function changeFrame(event) {
    event.preventDefault();  // Запобігаємо стандартному переходу при кліку

    const currentImage = event.target;

    // Перевіряємо, чи це не останнє зображення
    let nextImage = currentImage.nextElementSibling;

    // Якщо наступного зображення немає, повертаємось до першого
    if (!nextImage) {
        nextImage = desktopImages[0] || mobileImages[0];
    }

    // Перемикаємо зображення: видаляємо клас 'active' з поточного та додаємо до наступного
    currentImage.classList.remove('active');
    nextImage.classList.add('active');
}

// Додаємо події кліку для кожного зображення для десктопу та мобільних пристроїв
desktopImages.forEach(image => image.addEventListener('click', changeFrame));
mobileImages.forEach(image => image.addEventListener('click', changeFrame));
