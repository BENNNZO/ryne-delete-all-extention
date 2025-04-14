function setupStyles() {
    if (document.getElementById("delete-all-button-styles")) return

    const style = document.createElement("style")
    style.id = "delete-all-button-styles"
    style.textContent = `
        .delete-all-button {
            background: rgb(36, 21, 21);
            border-radius: 0.75rem;
            border: 1px solid rgb(77, 36, 36);
            transition: ease-in-out 150ms;
            max-height: 35.5px;
            padding: 4px;
        }

        .delete-all-button:hover {
            background: rgb(68, 33, 33);
            border-color: rgb(156, 58, 58);
        }

        .delete-all-button svg {
            filter: invert(1);
            height: 100%;
            opacity: 0.8;
            transition: ease-in-out 50ms;
        }

        .delete-all-button:hover svg {
            filter: invert(1);
            height: 100%;
            opacity: 1;
        }
    `

    document.head.appendChild(style)
}

function injectButton(target) {
    if (document.querySelector(".delete-all-button")) return

    const container = target.querySelector(".main-container-history > .mt-4")
    container.style = "display: flex; gap: 4px"

    const button = document.createElement("button")
    button.classList.add("delete-all-button")
    button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" width="36px" height="36px"><path d="M296 64h-80a7.91 7.91 0 00-8 8v24h96V72a7.91 7.91 0 00-8-8z" fill="none"/><path d="M432 96h-96V72a40 40 0 00-40-40h-80a40 40 0 00-40 40v24H80a16 16 0 000 32h17l19 304.92c1.42 26.85 22 47.08 48 47.08h184c26.13 0 46.3-19.78 48-47l19-305h17a16 16 0 000-32zM192.57 416H192a16 16 0 01-16-15.43l-8-224a16 16 0 1132-1.14l8 224A16 16 0 01192.57 416zM272 400a16 16 0 01-32 0V176a16 16 0 0132 0zm32-304h-96V72a7.91 7.91 0 018-8h80a7.91 7.91 0 018 8zm32 304.57A16 16 0 01320 416h-.58A16 16 0 01304 399.43l8-224a16 16 0 1132 1.14z"/></svg>`
    button.addEventListener("click", () => {
        const deleteButtons = document.querySelectorAll(".cursor-pointer.history-rise-shake.text-rose-500")

        deleteButtons.forEach(deleteButton => {
            deleteButton.dispatchEvent(new MouseEvent("click", { bubbles: true, view: window, cancelable: true, shiftKey: true }))
        })

        location.reload()
    })

    container.appendChild(button)
}

function setupObserver() {
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.querySelector(".main-container-history")) injectButton(node)
            })
        })
    })

    observer.observe(document.body, { childList: true })
}

function main() {
    if (window.__historyCleanerInitialized) {
        return
    } else {
        console.log("[Ryne Toolkit] Initializing History Cleaner...")

        window.__historyCleanerInitialized = true

        setupStyles()
        setupObserver()
    }

}

main()