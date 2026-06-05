// Замени пути на свои файлы
const surprises = {
    photo: [
        'media/photo1.jpg',
        'media/photo2.jpg',
        // добавь больше фото
    ],
    gif: [
        'media/gif1.gif',
        'media/gif2.gif',
        // добавь больше гифок
    ],
    video: [
        'media/video1.mp4',
        // добавь больше видео
    ]
};

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function showSurprise(type) {
    const container = document.getElementById('surprise-container');
    const content = document.getElementById('surprise-content');
    
    let mediaUrl;
    
    if (type === 'random') {
        // Выбираем случайный тип
        const types = Object.keys(surprises);
        const randomType = types[Math.floor(Math.random() * types.length)];
        mediaUrl = getRandomItem(surprises[randomType]);
        type = randomType;
    } else {
        mediaUrl = getRandomItem(surprises[type]);
    }
    
    // Очищаем предыдущий контент
    content.innerHTML = '';
    
    // Создаем элемент в зависимости от типа
    if (type === 'video') {
        const video = document.createElement('video');
        video.src = mediaUrl;
        video.controls = true;
        video.autoplay = true;
        video.style.maxWidth = '100%';
        video.style.maxHeight = '90vh';
        content.appendChild(video);
    } else {
        const img = document.createElement('img');
        img.src = mediaUrl;
        img.alt = 'Сюрприз!';
        content.appendChild(img);
    }
    
    // Показываем контейнер
    container.classList.remove('hidden');
}

function closeSurprise() {
    const container = document.getElementById('surprise-container');
    const content = document.getElementById('surprise-content');
    
    // Останавливаем видео если есть
    const video = content.querySelector('video');
    if (video) {
        video.pause();
    }
    
    container.classList.add('hidden');
    content.innerHTML = '';
}

// Закрытие по клику на фон
document.getElementById('surprise-container').addEventListener('click', function(e) {
    if (e.target === this) {
        closeSurprise();
    }
});

// Закрытие по клавише Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeSurprise();
    }
});