function getText() {
    const params = new URLSearchParams(window.location.search)
    const text = params.get("ryne-toolkit-selection")
   
    return text
}

function getHumanizerButton() {
    const divs = document.querySelectorAll('div')
    const innerText = Array.from(divs).find(div => div.textContent.trim() === "Humanize")
    const humanizerButton = innerText.closest('button').parentElement

    return humanizerButton
}

function simulate() {
    const waitForInputElement = setInterval(() => {
        const inputElement = document.querySelector(`div[data-placeholder="Paste AI Text here and click 'Humanize' to get started"]`)
        
        if (inputElement) {
            clearInterval(waitForInputElement)
            
            inputElement.textContent = getText()
            inputElement.focus()

            // I belive its impossible to automatically do this. 
            // Ryne must have a isTrusted check or maybe their framework does.
            // setTimeout(() => {
            //     const humanizerButton = getHumanizerButton()
            //     humanizerButton.dispatchEvent(new PointerEvent('click', { bubbles: true, cancelable: true, view: window, button: 0 }))
            // }, 100)
        }
    }, 100)
}

function main() {
    if (window.__highlightFunctionHumanizeInitialized) {
        return
    } else {
        console.log("[Ryne Toolkit] Initializing Humanization...")

        window.__highlightFunctionHumanizeInitialized = true

        simulate()
    }
}

main()