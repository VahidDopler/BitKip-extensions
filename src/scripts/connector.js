'use strict';

let port = 9563;


const updatePort = () => {
    chrome.storage.sync.get(["port"])
        .then((result) => {
            if (isObjectEmpty(result) || result === undefined) chrome.storage.sync.set({port});
            else port = result.port;
        });
}

updatePort();
const postLinks = async (data, isBatch) => {
    console.log(data)
    await updatePort()
    let URL_TO_POST = `http://localhost:${port}/single`;
    if (isBatch)
        URL_TO_POST = `http://localhost:${port}/batch`;
    fetch(URL_TO_POST, {
        method: 'POST',
        body: JSON.stringify(data),
    }).then(res => {
        console.log(res);
    }).catch(e => {
        console.log(e);
    });
}


const loadedContentScripts = {};
chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    switch (message.type) {
        case "captcha":
            const tabId = sender.tab.id;
            loadedContentScripts[tabId] = false;
            sendResponse({isOkToAddListener: true});
            break;
        case "storeFirstUrl":
            const tabId2 = sender.tab.id;
            if (!loadedContentScripts[tabId2]) {
                sendResponse({isOkToAddListener: true});
                loadedContentScripts[tabId2] = true;
            } else sendResponse({isOkToAddListener: false});
            break;
        case "extractSimilarLinks":
        case "extractLinksWithRegex":
            const tabs = await chrome.tabs.query({active: true, currentWindow: true, lastFocusedWindow: true});
            const resData = await chrome.tabs.sendMessage(tabs[0].id, message);
            postLinks(resData, true)
            break;
        case "setPort":
            chrome.storage.sync.set({port: message.value});
            break;
    }
});


const downloadTrigger = async (downloadItem, suggest) => {
    // Prevent the download from starting
    // get download link from Chrome Api
    // final url is used when url itself is a redirecting link
    let url = downloadItem.finalUrl || downloadItem.url;
    console.log(downloadItem)
    // only cancel urls if are supported
    if (isSupportedProtocol(url)) {
        suggest({cancel: true, filename: downloadItem.filename});
        chrome.downloads.cancel(downloadItem.id, () =>
            chrome.downloads.erase({id: downloadItem.id})
        );
        let data = {
            url,
            filename: downloadItem.filename,
            fileSize: downloadItem.fileSize,
            mimeType: downloadItem.mime,
            agent: navigator.userAgent
        };
        postLinks(data, false);
    }

}

//Main code to maintain download link and start doing job
chrome.downloads.onDeterminingFilename.addListener(downloadTrigger);

//Add BitKip right-click menu listener to browser page
chrome.contextMenus.onClicked.addListener((info) => {
    if (info.menuItemId === "extract_selected_link") {
        if (isSupportedProtocol(info.linkUrl))
            chrome.downloads.download({url: info.linkUrl})
    }/* else if (info.menuItemId === "batch_extract")
        chrome.action.openPopup();
    */
});

//Adding menus to right-click
chrome.contextMenus.removeAll(() => {
    chrome.contextMenus.create({
        id: '',
        title: 'Download this link',
        contexts: ['all'],
    });
    // chrome.contextMenus.create({
    //     id: 'batch_extract',
    //     title: 'Extract links',
    //     contexts: ['all'],
    // });
});


//check link to be valid or not
const isSupportedProtocol = (url) => {
    if (!url) return false;
    let u = new URL(url);
    return u.protocol === 'http:' || u.protocol === 'https:';
}


const isObjectEmpty = (objectName) => {
    return JSON.stringify(objectName) === "{}";
};
