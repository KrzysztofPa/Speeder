function onLoad() {
  const buttonsContainer = document.querySelector('.readyButtonsContainer');
  const accept = document.querySelector('.acceptSpeed')
  const speedInput = document.querySelector('.speedInput')

  buttonsContainer.addEventListener('click', onclick, false)
  accept.addEventListener('click', onAccept, false)
  speedInput.addEventListener('keydown', () => onAccept())

  function onclick(e) {
    try {
      let button = e.target.closest('button');
      let send = button.textContent;

      chrome.tabs.query({
        currentWindow: true,
        active: true
      }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, send)
      })
    } catch (error) {}
  }


  function onAccept() {
    let send = speedInput.value
    chrome.tabs.query({
      currentWindow: true,
      active: true
    }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, send)
    })  
  }
}


window.addEventListener('DOMContentLoaded', () => {
  onLoad()
});