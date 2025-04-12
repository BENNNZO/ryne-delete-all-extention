function injectStyles() {
    if (document.getElementById("delete-all-button-styles")) return

    const style = document.createElement("style")
    style.id = "delete-all-button-styles"
    style.textContent = `
        .delete-all-button {
            background: black; 
            color: rgb(229, 231, 235); 
            border-radius: 0.75rem; 
            padding: 0rem 1rem; 
            border: 1px solid rgb(31, 41, 55);
            transition: ease-in-out 150ms
        }

        .delete-all-button:hover {
            border-color: rgb(55, 65, 81);
        }
    `

    document.head.appendChild(style)
}

function injectButton(target) {
    const container = target.querySelector(".main-container-history > .mt-4")
    container.style = "display: flex; gap: 2px"

    const button = document.createElement("button")
    button.classList.add("delete-all-button")
    button.innerText = "DEL"
    button.addEventListener("click", () => {
        const deleteButtons = document.querySelectorAll(".cursor-pointer.history-rise-shake.text-rose-500")

        deleteButtons.forEach(deleteButton => {
            deleteButton.dispatchEvent(new MouseEvent("click", { bubbles: true, view: window, cancelable: true, shiftKey: true }))
        })

        location.reload()
    })

    container.appendChild(button)
}

function getObserver() {
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.querySelector(".main-container-history")) injectButton(node)
            })
        })
    })

    return observer
}

function main() {
    injectStyles()
    
    const observer = getObserver()
    observer.observe(document.body, { childList: true })

    chrome.runtime.onMessage.addListener(msg => {
        switch (msg.stopScript) {
            case ("historyDel"):
                console.log("turning off history button")
                break
            default:
                console.log("unknown msg")
                console.log(msg)
                break
        }
    })
}

main()