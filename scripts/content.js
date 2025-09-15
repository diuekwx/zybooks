chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action === "start") {
        const startbuttons = document.querySelectorAll('button span').forEach(btn => {
            if (btn.innerText.includes('Start')){
                btn.click();
            }
        });
        chrome.runtime.sendMessage({status: "done with start buttons"});
        
    }
})

// grp in one function laterlol
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action === "startCounting"){
        let num = 0;
        
    }
})

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action === "play") {
        const playbutton = document.querySelectorAll('button span').forEach(btn => {
            if (btn.innerText.includes('Play')){
                btn.click();
            }
        });
        chrome.runtime.sendMessage({status: "clciked play buttons"});
        
    }
})