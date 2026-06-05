// ОДНО фото
const photo = 'media/photo.jpg';

// ОДНО видео
const video = 'media/video.mp4';

function openGift() {
    document.getElementById('giftModal').classList.remove('hidden');
}

function closeGift() {
    document.getElementById('giftModal').classList.add('hidden');
}

function openMedia(type) {
    const modal = document.getElementById('mediaModal');
    const content = document.getElementById('mediaContent');
    
    content.innerHTML = '';
    closeGift();
    
    if (type === 'photo') {
        const img = document.createElement('img');
        img.src = photo;
        img.alt = 'Фото';
        content.appendChild(img);
    } else {
        const videoEl = document.createElement('video');
        videoEl.src = video;
        videoEl.controls = true;
        videoEl.autoplay = true;
        content.appendChild(videoEl);
    }
    
    modal.classList.remove('hidden');
}

function closeMedia() {
    const modal = document.getElementById('mediaModal');
    const content = document.getElementById('mediaContent');
    const videoEl = content.querySelector('video');
    if (videoEl) videoEl.pause();
    modal.classList.add('hidden');
    content.innerHTML = '';
}

// Escape
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        closeGift();
        closeMedia();
    }
});

// Клик на фон
document.getElementById('giftModal').addEventListener('click', function(e) {
    if (e.target === this) closeGift();
});
document.getElementById('mediaModal').addEventListener('click', function(e) {
    if (e.target === this) closeMedia();
});
