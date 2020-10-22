chrome.runtime.onMessage.addListener(function (request) {
    try {
        const videos1 = document.querySelectorAll('video');
        videos1.forEach(el => {
            el.playbackRate = request;
        });
        const videos2 =  document.querySelectorAll('.video');
        videos2.forEach(el => {
            el.playbackRate = request;
        });
    } catch (error) {}
})