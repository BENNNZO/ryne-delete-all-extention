function setupDashboardStyles() {
    if (document.getElementById("dashboard-styles")) return
    
    const style = document.createElement("style")
    style.id = "dashboard-styles"
    style.textContent = `
        main > section > :nth-child(4) > :first-child > :first-child {
            display:none
        }

        main > section {
            justify-content: center;
        }
    `

    document.head.appendChild(style)
}

function setupHumanizerStyles() {
    if (document.getElementById("humanizer-styles")) return
    
    const style = document.createElement("style")
    style.id = "humanizer-styles"
    style.textContent = `
        .humanizer-resizable {
            border: none;
            border-top: 1px solid rgba(255, 255, 255, 0.25);
            backdrop-filter: blur(5px);
        }

        .humanizer-resizable > :nth-child(2) {
            position: relative;
            left: 1px;
            width: 1px;
            background: linear-gradient(to bottom, rgba(255, 255, 255, 0.25), transparent);
            z-index: 1000;
        }

        .humanizer-editor-bottom-nav {
            border-top: none;
            height: 31px;
        }

        .humanizer-nav {
            background: rgba(0, 0, 0, 0.75);
            backdrop-filter: blur(16px);
            margin-left: 2px;
            padding: 10px 20px 10px calc(20px + 0.5rem);
            height: 60px;
            border-radius: 0;
        }

        #humanizer-output {
            margin-bottom: 0;
        }

        .humanizer-input div[contenteditable="true"], #humanizer-output {
            height: calc(100% - 31px);
            margin-left: 2px;
        }

        .humanizer-input div[contenteditable="true"]::before {
            content: '';
            position: fixed;
            width: 100%;
            height: 25px;
            left: 0;
            bottom: 31px;
            background: linear-gradient(to bottom, transparent, black);
            z-index: 1;
            pointer-event: none;
        }

        #humanizer-output::before {
            content: '';
            position: fixed;
            width: 100%;
            height: 25px;
            left: 0;
            top: 60px;
            background: linear-gradient(to bottom, black, transparent);
            z-index: 1;
            pointer-event: none;
        }

        /*
        .humanizer-input div[contenteditable="true"]::after {
            content: '';
            position: fixed;
            width: 50%;
            height: 25px;
            left: 0;
            top: 60px;
            background: linear-gradient(to bottom, black, transparent);
            z-index: 0;
        }

        #humanizer-output::after {
            content: '';
            position: fixed;
            width: 50%;
            height: 25px;
            left: calc(50% + 2px);
            top: 60px;
            background: linear-gradient(to bottom, black, transparent);
            z-index: 0;
        }
        */

        #humanizer-output span > div {
            background: rgb(0, 0, 0);
        }
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
            position: fixed;
            left: 50%;
            transform: translateX(-50%);
            bottom: 5px;
            width: 75%;
            max-width: 1000px
        }
        
        .chat-input-box > div:nth-of-type(1) > button, .chat-input-box + div > div > * {
            border: 1px solid rgba(255, 255, 255, 0.08)
        }



        /* fix nav bar */
        header {
            border: none !important;
            border-top: 1px solid rgba(255, 255, 255, 0.25) !important;
            /* padding-right: 4px; ill make it known here I added this before ryne did as well as my code wrapping fix and my fix for code showing under the input box*/
            padding-right: 1px; /* lol call me crazy but for some reason I think it still looks better with this 1px of padding \(o-o)/ */
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
            margin-bottom: 50px;
        }

        .chat-messages::after {
            content: '';
            position: fixed;
            left: 0;
            bottom: 0px;
            background: linear-gradient(to top, black, transparent);
            width: 100%;
            height: 50px;
            pointer-events: none;
        }
        
        .chat-main > div:nth-of-type(1) {
            overflow: visible !important;
            max-width: 100%;
        }



        /* style ai answers */
        .chat-bot {
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: rgba(25, 25, 25, 0.2);
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
            max-width: 100% !important;
            margin-left: 0;
        }

        .chat-icons > button:not(button:nth-of-type(5)) {
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .chat-icons > button:nth-of-type(1), .chat-icons > button:nth-of-type(2) {
            display: none;
        }

        .chat-icons > :first-child {
            pointer-events: none;
            border: 1px solid rgba(255, 255, 255, 0.1);
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
            display: flex;
            flex-direction: column;
            align-items: end;
        }

        .chat:not(.chat-bot) > div:nth-of-type(2) > div:nth-of-type(1) {
            margin-bottom: 0;
        }



        /* fix buggy code sections in ai answers
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
        */

        pre div {
            border: none !important;
        }

        pre {
            width: 100%;
        }

        pre code {
            display: flex !important;
            flex-direction: column;
        }

        pre > div:nth-of-type(1) > div:nth-of-type(2) {
            padding: 10px 15px !important;
        }



        /* history modal style changes */
        .main-container-history > ul > :first-child > a > li {
            border: 1px solid rgba(107, 114, 128, 0.5);
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
        setupDashboardStyles()
    }
}

main()

// saving old background color incase I want to switch back
// background: linear-gradient(to bottom, rgba(22, 29, 74, 0.5), black);