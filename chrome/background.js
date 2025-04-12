chrome.tabs.onUpdated.addListener((tabId, info, tab) => {
    if (tab.url.includes("https://ryne.ai") && info.status === "complete") {
        chrome.storage.sync.get(["toggleDelButton"]).then(res => {
            if (res.toggleDelButton) {
                chrome.scripting.executeScript({
                    target: { tabId: tab.id },
                    files: ["/scripts/content.js"]
                })
            }
        })
    }
})