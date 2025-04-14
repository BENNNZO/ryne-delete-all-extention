function setupSelectElementStyles() {
    if (document.getElementById("select-element-styles")) return

    const style = document.createElement("style")
    style.id = "select-element-styles"
    style.textContent = `
        .select-element {
            position: absolute;
            transform: translate(10px, -50%);
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(16px);
            padding: 4px;
            border-radius: 1000px;
            border: 1px solid rgba(255, 255, 255, 0.1)
            display: flex;
            gap: 4px
        }
    `

    document.head.appendChild(style)
}

function clearSelectElements() {
    document.querySelectorAll(".select-element").forEach(el => {
        el.remove()
    })
}

function setupSelectElement(x, y) {
    clearSelectElements()

    const element = document.createElement("div")
    element.classList.add("select-element")
    element.innerHTML = `<button>Humanizer</button><button>Detect AI</button>`
    element.style = `left: ${x}px; top: ${y}px`

    document.body.appendChild(element)
}

function setupEventListener() {
    document.addEventListener('mouseup', e => {
        const selection = window.getSelection()

        if (selection.type === "Range") {
            console.log(selection)
            console.log(selection.toString())
            console.log({ x: e.clientX, y: e.clientY })
            console.log(e)
            setupSelectElement(e.clientX, e.clientY)
        } else {
            clearSelectElements()
        }
    })
}

function main() {
    if (window.__highlightFunctionInitialized) {
        return
    } else {
        console.log("[Ryne Toolkit] Initializing Highlight Function...")

        window.__highlightFunctionInitialized = true

        setupEventListener()
        setupSelectElementStyles()
    }
}

main()