function setupHumanizerButtonStyles() {
    if (document.getElementById("ryne-toolkit-humanizer-button-styles")) return

    const style = document.createElement("style")
    style.id = "ryne-toolkit-humanizer-button-styles"
    style.textContent = `
        .ryne-toolkit-humanizer-button {
            position: relative;
        }

        .ryne-toolkit-humanizer-button button {
            position: absolute;
            height: 100%;
            aspect-ratio: 1/1;
            left: 0px;
            bottom: 1px;
            border-radius: 100px;
            background: #0a0a1a;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: background 150ms ease-out;
        }

        .ryne-toolkit-humanizer-button button:hover {
            background:rgb(24, 24, 57);
        }

        .ryne-toolkit-humanizer-button div {
            background: linear-gradient(90deg,#8a2be2,indigo,#9370db,#483d8b,#6a5acd,#8a2be2);
            height: 100%;
            aspect-ratio: 1/1;
            border-radius: 100px;
            background-size: 200%;
        }

        .chat-icons > button:nth-of-type(5) svg {
            display: none;
        }

        .chat-icons > button:nth-of-type(5) > button {
            padding: 5px 10px
        }
    `

    document.head.appendChild(style)
}

function setupHumanizerButton(node, copyButton) {
    const humanizerContainer = document.createElement('div')
    humanizerContainer.classList.add("ryne-toolkit-humanizer-button")

    const humanizerDiv = document.createElement('div')
    humanizerDiv.classList.add("animate-rainbow")

    const humanizerButton = document.createElement('button')
    humanizerButton.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`
    humanizerButton.onclick = () => {
        copyButton.dispatchEvent(new Event('click', { bubbles: true }))
        setTimeout(() => {
            navigator.clipboard.readText().then(text => {
                window.open(`https://ryne.ai/tools/humanizer?ryne-toolkit-selection=${encodeURIComponent(text)}`)
            })
        }, 100)
    }

    humanizerContainer.appendChild(humanizerDiv)
    humanizerContainer.appendChild(humanizerButton)

    node.appendChild(humanizerContainer)
}

function setupObserver() {
    const chatMessagesContainer = document.querySelector(".chat-messages")

    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            Array.from(mutation.addedNodes).forEach(async (node) => {
                if (node.className.includes("chat-icons")) {
                    setupHumanizerButton(node, node.childNodes[3])
                }
            })
        })
    })

    observer.observe(chatMessagesContainer, { childList: true, subtree: true })
}

function setupNewChatButtonStyles() {
    if (document.getElementById("ryne-toolkit-new-chat-button-styles")) return

    const style = document.createElement("style")
    style.id = "ryne-toolkit-new-chat-button-styles"
    style.textContent = `
        .ryne-toolkit-new-chat-button {
            background: #090A1A;
            padding: 0.375rem;
            border-radius: 0.5rem;
        }

        .ryne-toolkit-new-chat-button:hover {
            background: #1A1C2C;
        }
    `

    document.head.appendChild(style)
}

function setupNewChatButton() {
    const chatInputBoxButtonsContainer = document.querySelector(".chat-input-box").nextSibling.firstChild

    const newChatButton = document.createElement('a')
    newChatButton.classList.add("ryne-toolkit-new-chat-button")
    newChatButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" width="20px" height="20px"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 112v288M400 256H112"/></svg>`
    newChatButton.href = "/tools/ryne-chat"

    chatInputBoxButtonsContainer.insertBefore(newChatButton, chatInputBoxButtonsContainer.childNodes[0])
}

function main() {
    if (window.__quickActionsInitialized) {
        return
    } else {
        console.log("[Ryne Toolkit] Initializing Quick Actions...")

        window.__quickActionsInitialized = true
        
        let lastURL = location.href

        const observer = new MutationObserver(() => {
            const url = location.href

            if (url !== lastURL) {
                lastURL = url
                
                if (!document.querySelector(".ryne-toolkit-new-chat-button")) {
                    setupObserver()
            
                    setupNewChatButton()
            
                    setupNewChatButtonStyles()
                    setupHumanizerButtonStyles()
                }
            }
        })
        
        observer.observe(document, { subtree: true, childList: true })

        if (!document.querySelector(".ryne-toolkit-new-chat-button")) {
            setupObserver()
    
            setupNewChatButton()
    
            setupNewChatButtonStyles()
            setupHumanizerButtonStyles()
        }
    }
}

main()