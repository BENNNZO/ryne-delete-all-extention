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
        
        chrome.storage.sync.get(["autoFocus"]).then(res => {
            if (res.autoFocus) {
                chrome.scripting.executeScript({
                    target: { tabId: tab.id },
                    files: ["/scripts/autoFocus.js"]
                })
            }
        })
        
        chrome.storage.sync.get(["styleChanges"]).then(res => {
            if (res.styleChanges) {
                chrome.scripting.executeScript({
                    target: { tabId: tab.id },
                    files: ["/scripts/styleChanges.js"]
                })
            }
        })
    }

    if (!tab.url.includes("https://ryne.ai") && info.status === "complete") {
        chrome.storage.sync.get(["highlightFunctions"]).then(res => {
            if (res.highlightFunctions) {
                chrome.scripting.executeScript({
                    target: { tabId: tab.id },
                    files: ["/scripts/highlightFunctions.js"]
                })
            }
        })
    }
})