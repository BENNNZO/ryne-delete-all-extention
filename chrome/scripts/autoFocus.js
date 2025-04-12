function setupAutoFocus() {
    const textArea = document.querySelector('textarea[placeholder="Ask ryne..."]')
    if (!textArea) return

    textArea.setAttribute("autoFocus", "")
    textArea.focus()
}

function setupObserver() {
    let lastURL = location.href

    const observer = new MutationObserver(() => {
        const url = location.href

        if (url !== lastURL) {
            lastURL = url
            setupAutoFocus()
        }
    })

    observer.observe(document, { subtree: true, childList: true })
}

function main() {
    if (window.__autoFocusInitialized) {
        return
    } else {
        console.log("[Ryne Toolkit] Loading Auto Focus...")

        window.__autoFocusInitialized = true

        setupObserver()
        setupAutoFocus()
    }
}

main()