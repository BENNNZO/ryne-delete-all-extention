chrome.tabs.onUpdated.addListener(async (tabId, info, tab) => {
    if (tab.url.includes("https://ryne.ai") && info.status === "complete") {
        chrome.storage.sync.get(["historyCleaner"]).then(res => {
            if (res.historyCleaner) {
                chrome.scripting.executeScript({
                    target: { tabId },
                    files: ["/scripts/historyCleaner.js"]
                })
            }
        })
        
        chrome.storage.sync.get(["autoFocus"]).then(res => {
            if (res.autoFocus) {
                chrome.scripting.executeScript({
                    target: { tabId },
                    files: ["/scripts/autoFocus.js"]
                })
            }
        })
        
        chrome.storage.sync.get(["styleChanges"]).then(res => {
            if (res.styleChanges) {
                chrome.scripting.executeScript({
                    target: { tabId },
                    files: ["/scripts/styleChanges.js"]
                })
            }
        })
    }

    if (tab.url.includes("https://reilaa.com") && info.status === "complete") {
        chrome.storage.sync.get(["highlightFunctions"]).then(res => {
            if (res.highlightFunctions) {
                chrome.scripting.executeScript({
                    target: { tabId },
                    files: ["/scripts/highlightDetectAI.js"]
                })
            }
        })
    }

    if (tab.url.includes("https://ryne.ai/tools/ryne-chat") && info.status === "complete") {
        chrome.storage.sync.get(["quickActions"]).then(res => {
            if (res.quickActions) {
                chrome.scripting.executeScript({
                    target: { tabId },
                    files: ["/scripts/quickActions.js"]
                })
            }
        })
    }

    if (tab.url.includes("https://ryne.ai/tools/humanizer") && info.status === "complete") {        
        chrome.scripting.executeScript({
            target: { tabId },
            files: ["/scripts/highlightHumanize.js"]
        })
    }
    
    const hasPermissions = await chrome.permissions.contains({ origins: ["<all_urls>"] })
    if (hasPermissions) {
        if (!tab.url.includes("https://ryne.ai") && !tab.url.includes("chrome://") && !tab.url.includes("https://reilaa.com") && info.status === "complete") {
            chrome.storage.sync.get(["highlightFunctions"]).then(res => {
                if (res.highlightFunctions) {
                    chrome.scripting.executeScript({
                        target: { tabId },
                        files: ["/scripts/highlightFunctions.js"]
                    })
                }
            })
        }
    }
})