function setupSelectElementStyles() {
    
}

function setupSelectElement() {

}

function setupEventListener() {
    document.addEventListener('mouseup', e => {
        const selection = window.getSelection()

        if (selection.type === "Range") console.log(selection)
        if (selection.type === "Range") console.log(selection.toString())
        if (selection.type === "Range") console.log({ x: e.clientX, y: e.clientY })
        if (selection.type === "Range") console.log(e)
    })
}

function main() {
    if (window.__highlightFunctionInitialized) {
        return
    } else {
        console.log("[Ryne Toolkit] Initializing Highlight Function...")

        window.__highlightFunctionInitialized = true

        console.log("Hello, World!")
    }
}

main()