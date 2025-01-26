// Отримуємо всі фрейми
const frames = document.querySelectorAll('.frame');

// Встановлюємо початковий індекс активного фрейму
let currentFrameIndex = 0;

// Додаємо подію кліку на контейнер
document.querySelector('.container').addEventListener('click', () => {
    // Приховуємо поточний фрейм
    frames[currentFrameIndex].classList.remove('active');

    // Переходимо до наступного фрейму
    currentFrameIndex = (currentFrameIndex + 1) % frames.length;

    // Робимо новий фрейм активним
    frames[currentFrameIndex].classList.add('active');
});