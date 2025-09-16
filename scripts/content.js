console.log("Content script loaded");

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    console.log("hello")
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
    const divMap = [];
    if (msg.action === "startCounting"){
        console.log("did u get this ");
        const div = document.querySelectorAll('.animation-controls.m-0'); // .m-0
        if (div){
            console.log("found something");
        }
        for (let i = 0; i < div.length; i++){
            const buttonCount = div[i].querySelectorAll('button').length;
            divMap.push({
                divIndex: i,
                buttonCount: buttonCount - 2 // theres the restart button and play dc abt those 
            })
        }
    }
    console.log("counted");
    chrome.runtime.sendMessage({status: "countAmts", map: divMap});
})


