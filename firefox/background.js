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

    if (!tab.url.includes("https://ryne.ai") && !tab.url.includes("chrome://") && !tab.url.includes("https://reilaa.com") && info.status === "complete") {
        browser.storage.sync.get(["highlightFunctions"]).then(res => {
            if (res.highlightFunctions) {
                browser.tabs.executeScript(tab.id, {
                    file: "/scripts/highlightFunctions.js"
                })
            }
        })
    }

    if (tab.url.includes("https://reilaa.com") && info.status === "complete") {
        browser.storage.sync.get(["highlightFunctions"]).then(res => {
            if (res.highlightFunctions) {
                browser.tabs.executeScript(tab.id, {
                    file: "/scripts/highlightDetectAI.js"
                })
            }
        })
    }

    if (tab.url.includes("https://ryne.ai/tools/humanizer") && info.status === "complete") {
        browser.storage.sync.get(["highlightFunctions"]).then(res => {
            if (res.highlightFunctions) {
                browser.tabs.executeScript(tab.id, {
                    file: "/scripts/highlightHumanize.js"
                })
            }
        })
    }
})
