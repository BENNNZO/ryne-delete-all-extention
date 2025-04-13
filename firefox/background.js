browser.tabs.onUpdated.addListener((tabId, info, tab) => {
    if (tab.url.includes("https://ryne.ai") && info.status === "complete") {
        browser.storage.sync.get(["historyCleaner"]).then(res => {
            if (res.historyCleaner) {
                browser.scripting.executeScript({
                    target: { tabId: tab.id },
                    files: ["/scripts/historyCleaner.js"]
                })
            }
        })
        
        browser.storage.sync.get(["autoFocus"]).then(res => {
            if (res.autoFocus) {
                browser.scripting.executeScript({
                    target: { tabId: tab.id },
                    files: ["/scripts/autoFocus.js"]
                })
            }
        })
        
        browser.storage.sync.get(["styleChanges"]).then(res => {
            if (res.styleChanges) {
                browser.scripting.executeScript({
                    target: { tabId: tab.id },
                    files: ["/scripts/styleChanges.js"]
                })
            }
        })
    }
})