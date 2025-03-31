// class div.main-container-history > div.mt-4 { add flex flex-row gap-2 + add delete all button }

// delete all button should click all svg's with a class of "cursor-pointer history-rise-shake text-rose-500"

console.log("Hello, World!")

// function injectButton() {
//     console.log("injecting button")

//     const historyContainer = document.querySelector(".main-container-history")
//     const searchContainer = historyContainer.querySelector("mt-4")

//     console.log(searchContainer)
// }

const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node.querySelector(".main-container-history")) console.log("HEY THATS THE HISTORY LOG LOL")
        })
    })
})

observer.observe(document.body, { childList: true })