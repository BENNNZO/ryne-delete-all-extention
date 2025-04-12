function setupStyles() {
    if (document.getElementById("style-changes-styles")) return

    const style = document.createElement("style")
    style.id = "style-changes-styles"
    style.textContent = `
        .chat-main-bottom {
            background: linear-gradient(to bottom, rgba(22, 29, 74, 0.5), black);
            backdrop-filter: blur(5px);
            border: none;
        }

        .chat-bot {
            backdrop-filter: blur(5px);
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