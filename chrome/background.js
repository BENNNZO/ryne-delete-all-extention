chrome.tabs.onUpdated.addListener((tabId, info, tab) => {
    if (tab.url.includes("https://ryne.ai") && info.status === "complete") {
        chrome.storage.sync.get(["historyDeleteButton"]).then(res => {
            if (res.historyDeleteButton) {
                chrome.scripting.executeScript({
                    target: { tabId: tab.id },
                    files: ["/scripts/historyDeleteButton.js"]
                })
            }
        })
    }
})