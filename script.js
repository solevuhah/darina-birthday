const photo = 'media/photo.jpg';
const video = 'media/video.mp4';

// Включаем звук при первом клике
document.addEventListener('click', function() {
    const bgVideo = document.getElementById('bgVideo');
    bgVideo.muted = false;
    bgVideo.play();
}, { once: true });

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

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        closeGift();
        closeMedia();
    }
});

document.getElementById('giftModal').addEventListener('click', function(e) {
    if (e.target === this) closeGift();
});
document.getElementById('mediaModal').addEventListener('click', function(e) {
    if (e.target === this) closeMedia();
});
