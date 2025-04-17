/* ---------------------------------- INIT ---------------------------------- */
// ELEMENTS
const refreshButton = document.querySelector(".refresh-button")

const inputHighlightFunctions = document.getElementById("input-highlight-functions")
const switchHighlightFunctions = document.getElementById("switch-highlight-functions")

const inputHistoryCleaner = document.getElementById("input-history-cleaner")
const switchHistoryCleaner = document.getElementById("switch-history-cleaner")

const inputStyleChanges = document.getElementById("input-style-changes")
const switchStyleChanges = document.getElementById("switch-style-changes")

const inputQuickActions = document.getElementById("input-quick-actions")
const switchQuickActions = document.getElementById("switch-quick-actions")

const inputAutoFocus = document.getElementById("input-auto-focus")
const switchAutoFocus = document.getElementById("switch-auto-focus")

// STORAGE STATES
chrome.storage.sync.get(["highlightFunctions"]).then(res => {
    inputHighlightFunctions.checked = res.highlightFunctions || false;
})
chrome.storage.sync.get(["historyCleaner"]).then(res => {
    inputHistoryCleaner.checked = res.historyCleaner || false;
})

chrome.storage.sync.get(["styleChanges"]).then(res => {
    inputStyleChanges.checked = res.styleChanges || false;
})

chrome.storage.sync.get(["quickActions"]).then(res => {
    inputQuickActions.checked = res.quickActions || false;
})

chrome.storage.sync.get(["autoFocus"]).then(res => {
    inputAutoFocus.checked = res.autoFocus || false;
})

//FUNCTIONS
async function reloadRyneTabs() {
    let tabs = await chrome.tabs.query({})

    tabs.forEach(tab => {
        if (tab.url.includes("https://ryne.ai/")) chrome.tabs.reload(tab.id)
    })
}

/* ----------------------------- REFRESH BUTTON ----------------------------- */
refreshButton.addEventListener("click", reloadRyneTabs)

/* --------------------------------- TOGGLES -------------------------------- */
switchHighlightFunctions.addEventListener("click", async () => {
    if (!inputHighlightFunctions.checked) {
        const granted = await chrome.permissions.request({ origins: ["<all_urls>"] })

        if (granted) {
            inputHighlightFunctions.checked = true
            chrome.storage.sync.set({ highlightFunctions: true })
        } else {
            inputHighlightFunctions.checked = false
            chrome.storage.sync.set({ highlightFunctions: false })
        }
    
    } else {
        await chrome.permissions.remove({ origins: ["<all_urls>"] })

        inputHighlightFunctions.checked = false
        chrome.storage.sync.set({ highlightFunctions: false })
    }

})

switchHistoryCleaner.addEventListener("click", () => {
    inputHistoryCleaner.checked = !inputHistoryCleaner.checked
    chrome.storage.sync.set({ historyCleaner: inputHistoryCleaner.checked })
})

switchStyleChanges.addEventListener("click", () => {
    inputStyleChanges.checked = !inputStyleChanges.checked
    chrome.storage.sync.set({ styleChanges: inputStyleChanges.checked })
})

switchQuickActions.addEventListener("click", () => {
    inputQuickActions.checked = !inputQuickActions.checked
    chrome.storage.sync.set({ quickActions: inputQuickActions.checked })
})

switchAutoFocus.addEventListener("click", () => {
    inputAutoFocus.checked = !inputAutoFocus.checked
    chrome.storage.sync.set({ autoFocus: inputAutoFocus.checked })
})

// TODO: need to do something about these really long variable names