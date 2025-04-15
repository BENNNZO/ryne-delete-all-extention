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
            animation: ryne-toolkit-fade-in 150ms ease-out forwards;
        }

        .select-element button {
            background: transparent;
            border: none;
            padding: 0 15px 0 15px;
            transition: background 150ms ease-out;
            color: white;
            cursor: pointer;
            font-family: "Poppins", sans-serif;
        }

        .select-element button:hover {
            background: rgba(255, 255, 255, 0.05);
        }

        .select-element-divider {
            height: 100%;
            width: 1px;
            background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), transparent);
        }

        .ryne-toolkit-fade-out {
            animation: ryne-toolkit-fade-out 150ms ease-in forwards;
        }

        @keyframes ryne-toolkit-fade-in {
            from {
                opacity: 0;
                transform: translate(10px, calc(5px + -50%));
            }
            to {
                opacity: 1;
                transform: translate(10px, -50%);
            }
        }

        @keyframes ryne-toolkit-fade-out {
            from {
                opacity: 1;
                transform: translate(10px, -50%);
            }
            to {
                opacity: 0.5;
                transform: translate(10px, calc(5px + -50%));
            }
        }
    `

    document.head.appendChild(style)
}

function clearSelectElements() {
    document.querySelectorAll(".select-element").forEach(el => el.classList.add("ryne-toolkit-fade-out"))

    setTimeout(() => {
        document.querySelectorAll(".select-element").forEach(el => el.remove())
    }, 150)
}

function setupSelectElement(x, y, selection) {
    clearSelectElements()

    setTimeout(() => {
        const container = document.createElement("div")
        container.classList.add("select-element")
        container.style = `left: ${x}px; top: ${y}px`
        
        const divider = document.createElement("div")
        divider.classList.add("select-element-divider")
    
        const buttonHumanizeElement = document.createElement("button")
        const buttonDetectAIElement = document.createElement("button")
        buttonHumanizeElement.onclick = () => {
            console.log("humanize button clicked")
            console.log(selection)
            window.open(`https://ryne.ai/tools/humanizer?ryne-toolkit-selection=${selection}`)
        }
        buttonDetectAIElement.onclick = () => {
            console.log("detect AI button clicked")
            console.log(selection)
            window.open(`https://reilaa.com/?ryne-toolkit-selection=${selection}`)
        }
    
        buttonHumanizeElement.innerText = "Humanize"
        buttonDetectAIElement.innerText = "Detect AI"
    
        container.appendChild(buttonHumanizeElement)
        container.appendChild(divider)
        container.appendChild(buttonDetectAIElement)
    
        document.body.appendChild(container)
    }, 150)
}

function setupEventListener() {
    document.addEventListener('mouseup', e => {
        setTimeout(() => {
            const selection = window.getSelection()
    
            if (selection.type === "Range" && e.target.parentElement.className !== "select-element") {
                setupSelectElement(e.clientX, e.clientY, selection.toString())
            } else if (selection.type !== "Range") {
                clearSelectElements()
            }
        }, 25)
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