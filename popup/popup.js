document.getElementById('activation').addEventListener("click", () => {
    chrome.runtime.sendmessage({action: "start"})
});