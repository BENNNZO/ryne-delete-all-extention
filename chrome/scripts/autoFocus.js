function setupAutoFocus() {
    const textAreaChat = document.querySelector('textarea[placeholder="Ask ryne..."]')
    const textAreaHumanizer = document.querySelector('div[contenteditable="true"]')

    if (!textAreaChat && !textAreaHumanizer) return

    if (textAreaChat) {
        textAreaChat.setAttribute("autoFocus", "")
        textAreaChat.focus()
    } else {
        textAreaHumanizer.setAttribute("autoFocus", "")
        textAreaHumanizer.focus()
    }
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