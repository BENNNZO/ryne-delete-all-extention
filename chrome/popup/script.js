// History Cleaner

/* ---------------------------------- INIT ---------------------------------- */
// ELEMENTS
const refreshButton = document.querySelector(".refresh-button")
const inputHistoryCleaner = document.getElementById("input-history-cleaner")
const switchHistoryCleaner = document.getElementById("switch-history-cleaner")

// STORAGE STATES
chrome.storage.sync.get(["historyCleaner"]).then(res => {
    inputHistoryCleaner.checked = res.historyCleaner || false;
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

// TODO: need to do something about these really long variable names