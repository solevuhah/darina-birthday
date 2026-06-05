// Фото (добавь свои пути)
const photos = [
    'media/photo1.jpg',
    'media/photo2.jpg',
    'media/photo3.jpg',
    'media/photo4.jpg'
];

// Видео (добавь свои пути)
const videos = [
    'media/video1.mp4',
    'media/video2.mp4'
];

function openGift() {
    document.getElementById('giftBox').classList.remove('hidden');
}

function closeGift() {
    document.getElementById('giftBox').classList.add('hidden');
}

function openMedia(type) {
    const viewer = document.getElementById('mediaViewer');
    const content = document.getElementById('mediaContent');
    
    content.innerHTML = '';
    
    if (type === 'photo') {
        photos.forEach(photo => {
            const img = document.createElement('img');
            img.src = photo;
            img.alt = 'Фото с Дариной';
            img.loading = 'lazy';
            content.appendChild(img);
        });
    } else if (type === 'video') {
        videos.forEach(video => {
            const videoEl = document.createElement('video');
            videoEl.src = video;
            videoEl.controls = true;
            content.appendChild(videoEl);
        });
    }
    
    viewer.classList.remove('hidden');
    closeGift();
}

function closeMedia() {
    const viewer = document.getElementById('mediaViewer');
    const content = document.getElementById('mediaContent');
    
    const videos = content.querySelectorAll('video');
    videos.forEach(v => v.pause());
    
    viewer.classList.add('hidden');
    content.innerHTML = '';
}

// Закрытие по клавише Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeGift();
        closeMedia();
    }
});

// Закрытие по клику на фон
document.getElementById('giftBox').addEventListener('click', function(e) {
    if (e.target === this) closeGift();
});

document.getElementById('mediaViewer').addEventListener('click', function(e) {
    if (e.target === this) closeMedia();
});
