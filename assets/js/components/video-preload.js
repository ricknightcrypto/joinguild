export function videoPreload() {
    const videoWrapper = document.querySelector('[data-video-wrapper]')
    const videoElement = document.querySelector('[data-video-wrapper] video')
    setTimeout(() => {
        videoElement.querySelectorAll('data-src').forEach(item => {
            const source = document.createElement('source');
            source.src = item.getAttribute('src');
            source.type = item.getAttribute('type');
            videoElement.appendChild(source);
            videoElement.removeChild(item);
        })
        videoElement.addEventListener('loadeddata', function () {
            videoWrapper.querySelector('[data-loader]').classList.add('hide')
        })
    }, 2000);
    videoElement.addEventListener('click', function () {
        if (videoWrapper.classList.contains('play')) {
            videoWrapper.classList.remove('play')
            videoElement.pause();
        } else {
            videoWrapper.classList.add('play')
            videoElement.play();
        }
    })
}