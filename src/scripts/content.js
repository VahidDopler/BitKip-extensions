const url = window.location.href;
// store first loaded url
// some pages load more than once like soft98 pages. this is how to prevent
chrome.runtime.sendMessage({type: "storeFirstUrl", loadedUrl: url}, (res) => {
    if (res.isOkToAddListener)
        chrome.runtime.onMessage.addListener(listen);
});

const listen = (message, sender, sendResponse) => {
    const currentUrl = window.location.href;
    if (currentUrl.includes('recaptcha')) {
        sendResponse({type: "captcha"});
        return;
    }
    const parameter = {linkPattern: message.linkPattern, currentUrl, sendResponse};
    switch (message.type) {
        case "extractSimilarLinks":
            extractSimilarLinks(parameter);
            break;
        case "extractLinksWithRegex":
            extractLinksWithRegex(parameter);
            break;
        case "getUserAgent":
            message.data.agent = window.navigator.userAgent;
            sendResponse(message);
            break;
    }
};

const extractSimilarLinks = ({linkPattern, baseUrl, sendResponse}) => {
    const links = [];
    const allLinks = document.querySelectorAll('a');
    for (let a of allLinks)
        if (a.href.includes(linkPattern))
            links.push(a.href);
    sendResponse({links, baseUrl});
}


const extractLinksWithRegex = ({linkPattern, baseUrl, sendResponse}) => {
    console.log(linkPattern);
    console.log(escapeRegExp(linkPattern));
    const reg = new RegExp(escapeRegExp(linkPattern));
    const links = [];
    const allLinks = document.querySelectorAll('a');
    for (let a of allLinks)
        if (reg.test(a.href))
            links.push(a.href);
    sendResponse({links, baseUrl});
}

const escapeRegExp = (reg) => {
    return reg.replace(/[()+?/.|#\s]/g, '\\$&');
}