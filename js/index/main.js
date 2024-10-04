const texts = [
    "НАДЕЖНЫХ",
    "БЫСТРЫХ",
    "КРАСИВЫХ",
    "ПРОДАЮЩИХ"
];

let currentTextIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 150; // Скорость набора символов
const deletingSpeed = 100; // Скорость удаления символов
const pauseBetween = 1000; // Пауза перед переключением текста

const textElement = document.getElementById('main-text');

function type() {
    const currentText = texts[currentTextIndex];

    if (isDeleting) {
        textElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            currentTextIndex = (currentTextIndex + 1) % texts.length;
        }
    } else {
        textElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, pauseBetween);
            return;
        }
    }

    const delay = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(type, delay);
}

// Запуск анимации
setTimeout(type, typingSpeed);
