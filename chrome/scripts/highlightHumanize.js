function getText() {
    const params = new URLSearchParams(window.location.search)
   
    return params.get("ryne-toolkit-selection")
}

function simulate() {
    const inputElement = document.querySelector(`input[data-placeholder="Paste AI Text here and click 'Humanize' to get started"]`)

    console.log(inputElement)
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