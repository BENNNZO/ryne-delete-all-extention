// refresh button > click
document.querySelector(".refresh-button").addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true })
    chrome.tabs.reload(tab.id)
})