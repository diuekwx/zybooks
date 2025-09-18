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
                buttonCount: buttonCount - 1 // theres the restart button and play dc abt that 
            })
        }
        chrome.runtime.sendMessage({status: "countAmts", map: divMap});
    }

})


function clickNextPlayButton(div, sequenceCount) {
    if (sequenceCount <= 0) {
        console.log("done");
        return;
    }


    const playBtn = div.querySelector('.zb-button.grey.normalize-controls');
    if (!playBtn) {
        console.log("No button found");
        return;
    }

    console.log("Clicking Play");
    playBtn.click();
    const observer = new MutationObserver(() => {
        const btn = div.querySelector('.zb-button.grey.normalize-controls');

        if (btn) {
            const state = btn.getAttribute("aria-label") || btn.innerText;
            console.log("Button state:", state);

            if (state.includes("Play")) {
                observer.disconnect();
                console.log("Animation done, moving to next");
                clickNextPlayButton(div, sequenceCount - 1);
            }
        }
    });

    observer.observe(div, {childList: true, subtree: true, attributes: true, characterData: true});
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    // msg = action and divs 
    console.log("playing");
    if (msg.action === "play") {
        console.log(msg.divs);
        msg.divs.forEach((divData, i) => {
            const div = document.querySelectorAll('.animation-controls.m-0')[divData.divIndex];
            if (div){
                console.log(div);
                console.log(divData.buttonCount);
                clickNextPlayButton(div, divData.buttonCount);
            }
        })

        chrome.runtime.sendMessage({status: "clicked play buttons"});
    }
})