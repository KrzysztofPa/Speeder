chrome.runtime.onMessage.addListener(function (request) {
    try {
        const videos = document.querySelectorAll('video, .video, .html5-main-video');
        videos.forEach(el => {
            el.playbackRate = request;
        });
    } catch (error) {}
})