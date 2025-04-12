/* ---------------------------------- INIT ---------------------------------- */
// ELEMENTS
const refreshButton = document.querySelector(".refresh-button")
const toggleHistoryDel = document.getElementById("toggle-del-button")

// STORAGE STATES
chrome.storage.sync.get(["toggleDelButton"]).then(res => {
    toggleHistoryDel.checked = res.toggleDelButton || false;
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
toggleHistoryDel.addEventListener("change", async (e) => {
    const state = e.target.checked

    // update cloud storage with new state
    chrome.storage.sync.set({ toggleDelButton: state })

    
    let tabs = await chrome.tabs.query({})
    tabs.forEach(tab => {
        if (tab.url.includes("https://ryne.ai/") && e.target.checked) {
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                files: ["/scripts/content.js"]
            })
        }
    })
})

