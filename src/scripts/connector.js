'use strict';

const postLinks = (data) => {
    console.log(data);

    // fetch(APP_BASE_URL, {
    //     method: 'POST',
    //     mode: 'cors',
    //     cache: 'no-cache',
    //     credentials: 'same-origin',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Content-Disposition': 'attachment; filename="cool.html"',
    //     },
    //     redirect: 'follow',
    //     referrerPolicy: 'no-referrer',
    //     body: JSON.stringify(data),
    // }).then(r => {
    // });
}


const loadedContentScripts = {};
// listener for string pattern and find links using pattern and send to local
chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    switch (message.type) {
        case "captcha":
            const tabId = sender.tab.id;
            loadedContentScripts[tabId] = false;
            sendResponse({isOk: true});
            break;
        case "storeFirstUrl":
            const tabId2 = sender.tab.id;
            if (!loadedContentScripts[tabId2]) {
                sendResponse({isOk: true});
                loadedContentScripts[tabId2] = true;
            } else sendResponse({isOk: false});
            break;
        case "extractSimilarLinks":
        case "extractLinksWithRegex":
            const [tab] = await chrome.tabs.query({active: true, currentWindow: true, lastFocusedWindow: true});
            const resData = await chrome.tabs.sendMessage(tab.id, message);
            postLinks(resData)
            break
    }
});


const downloadTrigger = (downloadItem, suggest) => {

    console.log(downloadItem);
    console.log(suggest)
    // Prevent the download from starting
    suggest({cancel: true, filename: downloadItem.filename});
    chrome.downloads.cancel(downloadItem.id, () =>
        chrome.downloads.erase({id: downloadItem.id})
    );

    // get download link from Chrome Api
    // final url is used when url itself is a redirecting link
    let url = downloadItem.finalUrl || downloadItem.url;

    fetch(url)
        .then((response) => {
            if (isSupportedProtocol(url)) {
                const data = {
                    url,
                    filename: downloadItem.filename,
                    fileSize: downloadItem.fileSize,
                    mimeType: downloadItem.mime,
                    resumable: response.headers.get('accept-ranges') === "bytes"
                };
                postLinks(data);
            }
        })
        .catch((error) => {
            console.error(error);
        });
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


const extractSimilarLinks = (linkPattern) => {
    const links = [];
    const allLinks = document.querySelectorAll('a');

    for (let li of allLinks)
        if (li.includes(linkPattern))
            links.push(li);

    console.log(links)

}

//check link to be valid or not
const isSupportedProtocol = (url) => {
    if (!url) return false;
    let u = new URL(url);
    return u.protocol === 'http:' || u.protocol === 'https:';
}

chrome.action.setPopup({popup: './src/resources/extension.html'});
