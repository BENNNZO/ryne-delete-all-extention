function getText() {
    const params = new URLSearchParams(window.location.search)
   
    return params.get("ryne-toolkit-selection")
}

function simulate() {
    const inputElement = document.querySelector('textarea[placeholder="Paste your text here to analyze with Turnitin Lite, our basic AI detection model (approximately 50% accurate)..."]')
    const analyzeButton = inputElement.parentElement.nextSibling

    inputElement.value = getText()
    inputElement.dispatchEvent(new Event('input', { bubbles: true }))

    analyzeButton.click()
}

function main() {
    if (window.__highlightFunctionDetectAIInitialized) {
        return
    } else {
        console.log("[Ryne Toolkit] Initializing Detection...")

        window.__highlightFunctionDetectAIInitialized = true

        simulate()
    }
}

main()