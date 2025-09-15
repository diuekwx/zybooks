chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action === "start") {
        console.log("ACTIVATION!!!!!!!!!!!!!!!!!!!!!");

        chrome.tabs.query({
            active: true,
            currentWindow: true
        },
        (tabs) => {
            if (tabs[0]) {
                chrome.tabs.sendMessage(tabs[0].id, {action: "play"});
            }
        });
    };
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.status === "done with start buttons") {
        console.log("get play buttons");
        chrome.tabs.query({
            active: true,
            currentWindow: true
        },
        (tabs) => {
            if (tabs[0]) {
                chrome.tabs.sendMessage(tabs[0].id, {action: "play"});
            }
        });
    };
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action === "countAmts") {
        console.log("count bihhhhhhh")
        chrome.tabs.query({
            active: true,
            currentWindow:true
        },
        (tabs) => {
            if (tabs[0]){
                chrome.tabs.sendMessage(tabs[0].id, {actions: "startCounting"});
            }
        });
    }
})


chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.status === "clicked play buttons") {
        console.log("get play buttons");
        chrome.tabs.query({
            active: true,
            currentWindow: true
        },
        (tabs) => {
            if (tabs[0]) {
                chrome.tabs.sendMessage(tabs[0].id, {action: "play"});
            }
        });
    };
});