function onLoad() {
  const buttonsContainer = document.querySelector('.readyButtonsContainer');
  const accept = document.querySelector('.acceptSpeed')
  const speedInput = document.querySelector('.speedInput')
  const speedInputValue = document.querySelector('.actualSpeed')
  speedInputValue.textContent = speedInput.value;


  buttonsContainer.addEventListener('click', onclick)
  accept.addEventListener('click', onAccept)
  speedInput.addEventListener('keydown', ()=>{
    if (e.keyCode == 13){
      onAcept()
    }
  })

  speedInput.oninput = function() {
    speedInputValue.innerHTML = this.value;
  }

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