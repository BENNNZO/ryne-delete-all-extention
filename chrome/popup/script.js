// History Cleaner

/* ---------------------------------- INIT ---------------------------------- */
// ELEMENTS
const refreshButton = document.querySelector(".refresh-button")

const inputHistoryCleaner = document.getElementById("input-history-cleaner")
const switchHistoryCleaner = document.getElementById("switch-history-cleaner")

const inputStyleChanges = document.getElementById("input-style-changes")
const switchStyleChanges = document.getElementById("switch-style-changes")

const inputAutoFocus = document.getElementById("input-auto-focus")
const switchAutoFocus = document.getElementById("switch-auto-focus")

// STORAGE STATES
chrome.storage.sync.get(["historyCleaner"]).then(res => {
    inputHistoryCleaner.checked = res.historyCleaner || false;
})

chrome.storage.sync.get(["styleChanges"]).then(res => {
    inputStyleChanges.checked = res.styleChanges || false;
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
// the refresh button will only refresh ryne specific pages so
// you dont have to worry about your other tabs!
refreshButton.addEventListener("click", reloadRyneTabs)

/* --------------------------------- TOGGLES -------------------------------- */
// History Delete Button
switchHistoryCleaner.addEventListener("click", () => {
    inputHistoryCleaner.checked = !inputHistoryCleaner.checked
    chrome.storage.sync.set({ historyCleaner: inputHistoryCleaner.checked })
})

switchStyleChanges.addEventListener("click", () => {
    inputStyleChanges.checked = !inputStyleChanges.checked
    chrome.storage.sync.set({ styleChanges: inputStyleChanges.checked })
})

switchAutoFocus.addEventListener("click", () => {
    inputAutoFocus.checked = !inputAutoFocus.checked
    chrome.storage.sync.set({ autoFocus: inputAutoFocus.checked })
})

// TODO: need to do something about these really long variable names