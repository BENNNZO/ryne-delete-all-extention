function setupHumanizerStyles() {
    if (document.getElementById("humanizer-styles")) return

    const style = document.createElement("style")
    style.id = "humanizer-styles"
    style.textContent = `

    `

    document.head.appendChild(style)
}

function setupChatStyles() {
    if (document.getElementById("chat-styles")) return

    const style = document.createElement("style")
    style.id = "chat-styles"
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
            flex-direction: column;
            padding: 15px 20px;
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

        .chat-icons > *:not(:last-child) {
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .chat-icons > :nth-child(2), .chat-icons > :nth-child(3) {
            display: none;
        }

        .chat-icons > :nth-child(1), .chat-icons > :nth-child(5) {
            padding: 5px 8px;
        }



        /* style user prompts */
        .chat:not(.chat-bot) {
            border-radius: 15px;

            width: 90%;
            margin-left: auto;

            padding: 10px 15px;
        }

        .chat:not(.chat-bot) > div:nth-of-type(1) {
            display: none; /* remove user profile image */
        }

        .chat:not(.chat-bot) > div:nth-of-type(2) {
            margin-left: auto; /* position user prompt text */
        }

        .chat:not(.chat-bot) > div:nth-of-type(2) > div:nth-of-type(1) {
            display: none; /* remove random margin element */
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

        setupChatStyles()
        setupHumanizerStyles()
    }
}

main()

// saving old background color incase I want to switch back
// background: linear-gradient(to bottom, rgba(22, 29, 74, 0.5), black);