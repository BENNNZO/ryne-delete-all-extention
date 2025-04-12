function setupStyles() {
    if (document.getElementById("style-changes-styles")) return

    const style = document.createElement("style")
    style.id = "style-changes-styles"
    style.textContent = `
        .chat-main-bottom {
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(5px);
            border: none;
            border-top: 1px solid rgba(255, 255, 255, 0.25);
        }

        .chat-bot {
            backdrop-filter: blur(5px);
        }

        .chat-messages + div {
            display: none;
        }

        header {
            border: none !important;
            border-top: 1px solid rgba(255, 255, 255, 0.25) !important;
            padding-right: 4px;
        }
    `

    document.head.appendChild(style)
}

function main() {
    if (window.__styleChangesInitialized) {
        return
    } else {
        console.log("[Ryne Toolkit] Initializing Style Changes...")
        
        window.__styleChangesInitialized = true

        setupStyles()
    }
}

main()

// saving old background color incase I want to switch back
// background: linear-gradient(to bottom, rgba(22, 29, 74, 0.5), black);