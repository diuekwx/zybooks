

document.getElementById('activation').addEventListener("click", () => {
    chrome.runtime.sendMessage({action: "start"})
});