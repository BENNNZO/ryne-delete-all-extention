function setupSelectElementStyles() {
    if (document.getElementById("select-element-styles")) return

    const style = document.createElement("style")
    style.id = "select-element-styles"
    style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

        .select-element {
            position: absolute;
            background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(25, 25, 25, 0.5));
            transform: translate(10px, -50%);
            backdrop-filter: blur(16px);
            border-radius: 1000px;
            border-top: 1px solid rgba(255, 255, 255, 0.75);
            border-bottom: 1px solid rgba(0, 0, 0, 0.75);
            display: flex;
            overflow: hidden;
            height: 36px;
            font-family: "Poppins", sans-serif;
        }

        .select-element button {
            background: transparent;
            border: none;
            padding: 0 15px 0 15px;
            transition: background 150ms ease-out;
        }

        .select-element button:hover {
            background: rgba(255, 255, 255, 0.05);
        }

        .select-element-divider {
            height: 100%;
            width: 1px;
            background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), transparent);
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
    element.innerHTML = `<button>Humanize</button><div class="select-element-divider"></div><button>Detect AI</button>`
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
        setupSelectElement(100, 100)
    }
}

main()