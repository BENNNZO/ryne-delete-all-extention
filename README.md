# Ryne Toolkit Extention
This extention aims to add quality of life updates to Ryne. Anything from auto focusing on the text elements to re-styling the website. All of the settings are able to be toggled on and off easity by turning it off in the extention popup and refreshing the page

## Features
- Auto place your cursor in the text area (works on both chat and humanizer pages)
- History delete button that allows you to quickly and easily delete all your chats from Ryne's humanizer and chat pages.
- New styling for the Dashboard, Chat, and Humanizer pages.
- After highlighting text onany website you will have the option to humanize or detect for AI!
<!-- - Fixed a bug where if AI output code, it would weirdly wrap, and be hard to read. Now the code simply outputs with a horizontal scrollbar. -->

## Known Bugs
- (not really a bug) I would like to make the highlight humanizer option automatically switch to an already opened humanizer tab if one is already present.
- Using more than one LLM at a time seems to not work need to investigate.

[Fixed in next release]
- the bottom of the AI responses seems to barely overlap with the chat input box.
- the humanizer graidents cause some visual glitched which should be fixed very soon
- sometimes sites have an element that spans over the whole page so I will have to add a really high z-index to the highlight popup
  
## Feature & Style Change Examples

### New Popup Window
- All new popup window when you click on the extension that allows you to enable and disable certain features!

![Popup Window](https://raw.githubusercontent.com/bennnzo/ryne-delete-all-extention/main/readme-images/popup.png)

### New Highlight Options
- All new options when selecting text you can easily and effortlessly detect AI or humanize the selected text!

![Highlight Options](https://raw.githubusercontent.com/bennnzo/ryne-delete-all-extention/main/readme-images/highlight.png)

### Chat Page Updates (Before: left, After: right)
<!-- - Fixed bug were AI's code output would weirdly wrap and become unreadable. Now its simply output with a horizontal scrollbar -->
- Removed the "What would you like to explore" content in the middle
- Removed user's profile picture
- Moved user prompts to the right side of the screen
- Removed like and dislike buttons
- Added glass effect on the input bar

<!-- ![Chat Text Updates](https://raw.githubusercontent.com/bennnzo/ryne-delete-all-extention/main/readme-images/code/edited.png) -->
![Chat Page Updates](https://raw.githubusercontent.com/bennnzo/ryne-delete-all-extention/main/readme-images/chat/screen-edited.png)
![Chat Text Updates](https://raw.githubusercontent.com/bennnzo/ryne-delete-all-extention/main/readme-images/chat/text-edited.png)

### Humanizer Page Updates (Before: left, After: right)
- Changed thick border to thin (similar to nav bar changes)
- Added a fade in and out effect on the scrollable text

![Humanizer Page Updates](https://raw.githubusercontent.com/bennnzo/ryne-delete-all-extention/main/readme-images/humanizer/edited.png)

### Navigation Bar Updates (Before: top, After: bottom)
- Changed thick border to thin
- Added some padding on the right side to make the spacing even

![Navigation Bar Updates](https://raw.githubusercontent.com/bennnzo/ryne-delete-all-extention/main/readme-images/nav/edited.png)

### Auto-focus Feature
- Feature: Auto-focus the text cursor on both chat and humanization pages

![Auto-focus Feature](https://raw.githubusercontent.com/bennnzo/ryne-delete-all-extention/main/readme-images/auto-focus.png)

### History Clear Feature
- Feature: Button that allows the user to easily and quickly delete all their history

![History Clear Feature](https://raw.githubusercontent.com/bennnzo/ryne-delete-all-extention/main/readme-images/history-clear.png)

## Installation
### Web Store
 - ChromeYou can install the Chrome version of this extension from the [Chrome Web Store](https://chromewebstore.google.com/detail/ryne-batch-delete/djpnjpfjeakffgfnhfdnpheofebplolc?authuser=0&hl=en).
 - FirefoxYou can install the Firefox version of this extension from the [Firefox Add-ons Store](https://addons.mozilla.org/en-US/firefox/addon/ryne-batch-delete/).

### Source Code
If you prefer not to install the extension from the Chrome Web Store or Firefox Add-ons Store, you can load it manually from the source code.

#### Chrome
1. Clone or download the repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top-right corner.
4. Click "Load unpacked" and select the `chrome` directory from the repository.
5. The extension will now be loaded and ready to use.

#### Firefox
1. Clone or download the repository to your local machine.
2. Open Firefox and navigate to `about:debugging#/runtime/this-firefox`.
3. Click "Load Temporary Add-on" and select any file from the `firefox` directory in the repository.
4. The extension will now be loaded temporarily and ready to use. Note that it will need to be reloaded each time Firefox restarts.
