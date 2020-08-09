chrome.runtime.onMessage.addListener(function (request) {
    try {
        document.querySelector('video').playbackRate = request;
    } catch (error) {}
})