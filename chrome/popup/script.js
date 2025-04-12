/* ---------------------------------- INIT ---------------------------------- */
// ELEMENTS
const refreshButton = document.querySelector(".refresh-button")
const toggleHistoryDeleteButton = document.getElementById("toggle-history-delete-button")

// STORAGE STATES
chrome.storage.sync.get(["historyDeleteButton"]).then(res => {
    toggleHistoryDeleteButton.checked = res.historyDeleteButton || false;
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
toggleHistoryDeleteButton.addEventListener("change", async (e) => {
    const state = e.target.checked
    chrome.storage.sync.set({ historyDeleteButton: state })
})

