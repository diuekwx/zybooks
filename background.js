chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action === "start") {
        console.log("ACTIVATION!!!!!!!!!!!!!!!!!!!!!");

        chrome.tabs.query({
            active: true,
            currentWindow: true
        },
        (tabs) => {
            if (tabs[0]) {
                chrome.tabs.sendMessage(tabs[0].id, {action: "start"}, (response) => {
                      if (chrome.runtime.lastError) {
    console.warn("Send failed:", chrome.runtime.lastError.message);
  } else {
    console.log("Got response:", response);
  }
                });
            }
        });
    };
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.status === "done with start buttons") {
        console.log("count bihhhhhhh")
        chrome.tabs.query({
            active: true,
            currentWindow:true
        },
        (tabs) => {
            if (tabs[0]){
                chrome.tabs.sendMessage(tabs[0].id, 
                    {action: "startCounting"});
            }
        });
    }
})

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    console.log("done w counts");
    if (msg.status === "countAmts") {
        console.log(msg.map);
        chrome.tabs.query({
            active: true,
            currentWindow: true
        },
        (tabs) => {
            if (tabs[0]) {
                chrome.tabs.sendMessage(tabs[0].id, 
                    {action: "play",
                        divs: msg.map
                    });
            }
        });
    };
});


chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.status === "clicked play buttons") {
        // chrome.tabs.query({
        //     active: true,
        //     currentWindow: true
        // },
        // (tabs) => {
        //     if (tabs[0]) {
        //         chrome.tabs.sendMessage(tabs[0].id, {action: "play"});
        //     }
        // });
        console.log("done");
    };
});