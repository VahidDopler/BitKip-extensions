'use strict';

const postLinks = (data, isBatch) => {
    console.log(data)

    let URL_TO_POST = "http://localhost:1354/single";

    if (isBatch)
        URL_TO_POST = "http://localhost:1354/batch";

    fetch(URL_TO_POST, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            'Content-Disposition': 'attachment; filename="cool.html"',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data),
    }).then(_ => {
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
            break
    }
});


const downloadTrigger = (downloadItem, suggest) => {
    // Prevent the download from starting
    // get download link from Chrome Api
    // final url is used when url itself is a redirecting link
    let url = downloadItem.finalUrl || downloadItem.url;
    // only cancel urls if are supported
    if (isSupportedProtocol(url)) {
        suggest({cancel: true, filename: downloadItem.filename});
        chrome.downloads.cancel(downloadItem.id, () =>
            chrome.downloads.erase({id: downloadItem.id})
        );

        fetch(url)
            .then((response) => {
                const data = {
                    url,
                    filename: downloadItem.filename,
                    fileSize: downloadItem.fileSize,
                    mimeType: downloadItem.mime,
                    resumable: response.headers.get('accept-ranges') === "bytes"
                };
                postLinks(data, false);
            })
            .catch((error) => {
                console.error(error);
            });
    }

}

//Main code to maintain download link and start doing job
chrome.downloads.onDeterminingFilename.addListener(downloadTrigger);

//Add BitKip right-click menu listener to browser page
chrome.contextMenus.onClicked.addListener((info) => {
    if (isSupportedProtocol(info.linkUrl))
        chrome.downloads.download({url: info.linkUrl})
});

//Adding menus to right-click
chrome.contextMenus.removeAll(() => {
    chrome.contextMenus.create({
        id: 'extract_selected_link',
        title: 'Download this link',
        contexts: ['all'],
    });
});


//check link to be valid or not
const isSupportedProtocol = (url) => {
    if (!url) return false;
    let u = new URL(url);
    return u.protocol === 'http:' || u.protocol === 'https:';
}

chrome.action.setPopup({popup: './src/resources/extension.html'});
