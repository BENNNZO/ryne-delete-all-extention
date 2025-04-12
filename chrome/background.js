chrome.tabs.onUpdated.addListener((tabId, info, tab) => {
    if (tab.url.includes("https://ryne.ai") && info.status === "complete") {
        chrome.storage.sync.get(["historyCleaner"]).then(res => {
            if (res.historyCleaner) {
                chrome.scripting.executeScript({
                    target: { tabId: tab.id },
                    files: ["/scripts/historyCleaner.js"]
                })
            }
        })
    }
})