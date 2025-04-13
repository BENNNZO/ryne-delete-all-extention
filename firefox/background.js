browser.tabs.onUpdated.addListener((tabId, info, tab) => {
    if (tab.url.includes("https://ryne.ai") && info.status === "complete") {
        browser.storage.sync.get(["historyCleaner"]).then(res => {
            if (res.historyCleaner) {
                browser.tabs.executeScript(tab.id, {
                    file: "/scripts/historyCleaner.js"
                })
            }
        })
        
        browser.storage.sync.get(["autoFocus"]).then(res => {
            if (res.autoFocus) {
                browser.tabs.executeScript(tab.id, {
                    file: "/scripts/autoFocus.js"
                })
            }
        })
        
        browser.storage.sync.get(["styleChanges"]).then(res => {
            if (res.styleChanges) {
                browser.tabs.executeScript(tab.id, {
                    file: "/scripts/styleChanges.js"
                })
            }
        })
    }
})
