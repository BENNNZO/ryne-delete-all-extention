function setupStyles() {
    if (document.getElementById("style-changes-styles")) return

    const style = document.createElement("style")
    style.id = "style-changes-styles"
    style.textContent = `
        /* fix input area */
        .chat-main-bottom {
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(5px);
            border: none;
            border-top: 1px solid rgba(255, 255, 255, 0.25);
        }

        /* fix nav bar */
        header {
            border: none !important;
            border-top: 1px solid rgba(255, 255, 255, 0.25) !important;
            padding-right: 4px;
        }

        /* remove intro welcome hero */
        .chat-messages + div {
            display: none;
        }

        /* add gap to message column */
        .chat-messages {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        /* style ai answers */
        .chat-bot {
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(5px);
            margin-bottom: 0;
            flex-direction: column
        }

        .chat-bot > :first-child {
            position: static;
        }

        .chat-bot > :first-child img {
            display: none;
        }

        .chat-bot > :first-child div:nth-of-type(1) {
            bottom: 15px;
            right: 15px;
            background: rgba(0, 0, 0, 0.5);
        }

        .chat-bot > :nth-child(2) {
            max-width: 100%;
            margin-left: 0;
        }

        /* style user prompts */
        .chat:not(.chat-bot) {
            border-radius: 15px;

            width: 90%;
            margin-left: auto;

            padding: 10px 15px;
        }

        .chat:not(.chat-bot) > div:nth-of-type(1) {
            /* remove user profile image */
            display: none;
        }

        .chat:not(.chat-bot) > div:nth-of-type(2) {
            /* position user prompt text */
            margin-left: auto;
        }

        .chat:not(.chat-bot) > div:nth-of-type(2) > div:nth-of-type(1) {
            /* remove random margin element */
            display: none;
        }

        /* fix buggy code sections in ai answers */
        pre {
            border: 1px solid rgba(255, 255, 255, 0.1);
            padding: 0 !important;
        }

        pre code {
            display: inline-block;
            white-space: nowrap !important;
        }

        pre  {
            overflow-x: scroll;
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