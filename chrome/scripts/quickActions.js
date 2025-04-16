function setupHumanizerButtonStyles() {
    if (document.getElementById("ryne-toolkit-humanizer-button-styles")) return

    const style = document.createElement("style")
    style.id = "ryne-toolkit-humanizer-button-styles"
    style.textContent = `
    
    `

    document.head.appendChild(style)
}

function setupHumanizerButton(node) {
    const humanizerButton = document.createElement('button')
    humanizerButton.classList.add("ryne-toolkit-humanizer-button")
    humanizerButton.innerHTML = `<svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`

    const chatIconsContainer = node.querySelector(".chat-icons")
    chatIconsContainer.appendChild(humanizerButton)
}

function setupObserver() {
    const chatMessagesContainer = document.querySelector(".chat-messages")

    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                node.childNodes.forEach(child => {
                    if (Array.from(child.classList).includes("chat-bot")) {
                        console.log(child)
                        setupHumanizerButton(child)
                    }
                })
            })
        })
    })
    
    observer.observe(chatMessagesContainer, { childList: true })
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

        setupObserver()

        setupNewChatButton()

        setupNewChatButtonStyles()
        setupHumanizerButtonStyles()
    }
}

main()