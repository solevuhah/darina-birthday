// Добавь свои фото
const photos = [
    'media/photo1.jpg',
    'media/photo2.jpg',
    'media/photo3.jpg'
];

// Добавь свои видео
const videos = [
    'media/video1.mp4',
    'media/video2.mp4'
];

function showButtons() {
    const btn = document.getElementById('giftBtn');
    const group = document.getElementById('buttonsGroup');
    
    // Прячем кнопку с анимацией
    btn.style.animation = 'none';
    btn.style.opacity = '0';
    btn.style.transform = 'scale(0)';
    btn.style.transition = 'all 0.5s ease';
    
    setTimeout(() => {
        btn.classList.add('hidden');
        group.classList.remove('hidden');
    }, 500);
}

function openMedia(type) {
    const viewer = document.getElementById('mediaViewer');
    const content = document.getElementById('mediaContent');
    
    content.innerHTML = '';
    
    if (type === 'photo') {
        photos.forEach(photo => {
            const img = document.createElement('img');
            img.src = photo;
            img.alt = 'Фото';
            img.loading = 'lazy';
            img.onclick = function() {
                // Открыть фото на весь экран
                const full = document.createElement('div');
                full.style.cssText = `
                    position: fixed;
                    top: 0; left: 0;
                    width: 100%; height: 100%;
                    background: black;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 3000;
                    cursor: pointer;
                `;
                const fullImg = document.createElement('img');
                fullImg.src = photo;
                fullImg.style.cssText = 'max-width: 95%; max-height: 95%; object-fit: contain;';
                full.appendChild(fullImg);
                full.onclick = () => full.remove();
                document.body.appendChild(full);
            };
            content.appendChild(img);
        });
    } else if (type === 'video') {
        videos.forEach(video => {
            const videoEl = document.createElement('video');
            videoEl.src = video;
            videoEl.controls = true;
            videoEl.autoplay = true;
            content.appendChild(videoEl);
        });
    }
    
    viewer.classList.remove('hidden');
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
        closeMedia();
    }
});

// Закрытие по клику на фон
document.getElementById('mediaViewer').addEventListener('click', function(e) {
    if (e.target === this) closeMedia();
});
