'use strict';

//My api test route
const APP_BASE_URL = 'http://127.0.0.1:57850/api/v1/tours/myTour';
//It should be https to make connection else it will not create
// const APP_BASE_URL = 'http://127.0.0.1:57850/<YourApiRoute>';

class Connector {
  constructor() {
    this.connected = false;
  }

  postMessage(data) {
    fetch(APP_BASE_URL, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      // headers: {
      //   'Content-Type': 'application/x-www-form-urlencoded',
      // },
      headers: {
        'Content-Type': 'application/json',
        'Content-Disposition': 'attachment; filename="cool.html"',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data),
    })
      .then((recieve) => console.log(recieve))
      .catch((err) => {});
  }
}

//trigger download link and making download link headers and other infos
function triggerDownload(url, filename, referer, size, mime) {
  chrome.cookies.getAll({ url }, (cookies) => {
    const cookieStr = cookies
      ? cookies.map((cookie) => `${cookie.name}=${cookie.value}`).join('; ')
      : null;

    const requestHeaders = { 'User-Agent': [navigator.userAgent] };
    if (referer) {
      requestHeaders['Referer'] = [referer];
    }

    const responseHeaders = {};
    if (size) {
      const fz = +size;
      if (fz > 0) {
        responseHeaders['Content-Length'] = [fz];
      }
    }
    if (mime) {
      responseHeaders['Content-Type'] = [mime];
    }

    const data = {
      url,
      filename: filename,
      cookie: cookieStr,
      requestHeaders,
      responseHeaders,
      fileSize: size,
      mimeType: mime,
    };
    // Initiate the download
    const connector = new Connector();
    connector.postMessage(data);
  });
}

//get infos of tab to make download link infos
//man shak daram vage an mofid hast ya na 🤣
chrome.tabs.onActivated.addListener((activeInfo) => {
  // Get the URL of the active tab
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    // Pass the URL to the connector function
  });
});

//check link to be valid or not
function isSupportedProtocol(url) {
  if (!url) return false;
  let u = new URL(url);
  return u.protocol === 'http:' || u.protocol === 'https:';
}

//Check the download link
//It should be completed in future to check more files
function shouldTakeOver(url, file) {
  let u = new URL(url);
  if (isSupportedProtocol(url)) {
    return true;
  }
  return false;
}

//to check the prrotocl of text be link or not
function sendLinkToBitkip(info, tab) {
  let url = info.linkUrl;
  if (!isSupportedProtocol(url)) {
    url = info.srcUrl;
  }
  if (!isSupportedProtocol(url)) {
    url = info.pageUrl;
  }
  if (!isSupportedProtocol(url)) {
    return;
  }
  triggerDownload(url, null, info.pageUrl, null, null);
}

//to download image
function sendImageToBitKip(info, tab) {
  let url = info.srcUrl;
  if (!isSupportedProtocol(url)) url = info.linkUrl;
  if (!isSupportedProtocol(url)) {
    url = info.pageUrl;
  }
  if (!isSupportedProtocol(url)) {
    return;
  }
  triggerDownload(url, null, info.pageUrl, null, null);
}

//Menu clickers
function onMenuClicked(info, tab) {
  if (info.menuItemId == 'download-any-link') {
    sendLinkToBitkip(info, tab);
  }
  if (info.menuItemId == 'download-image-link') {
    sendImageToBitKip(info, tab);
  }
}

//Adding menus to right-click
chrome.contextMenus.removeAll(function () {
  chrome.contextMenus.create({
    id: 'download-any-link',
    title: 'Download with BitKip',
    contexts: ['link', 'video', 'audio', 'all'],
  });

  chrome.contextMenus.create({
    id: 'download-image-link',
    title: 'Download Image with BitKip',
    contexts: ['image'],
  });
});

//Add BitKip right-click menu to browser page
chrome.contextMenus.onClicked.addListener(onMenuClicked);

//Main code to maintain download link and start doing job
chrome.downloads.onDeterminingFilename.addListener((downloadItem, suggest) => {
  // Prevent the download from starting
  suggest({ cancel: true, filename: downloadItem.filename });
  chrome.downloads.cancel(downloadItem.id, () =>
    chrome.downloads.erase({ id: downloadItem.id })
  );

  //get download link from Chrome Api
  let url = downloadItem.finalUrl || downloadItem.url;
  let referrer = downloadItem.referrer;
  if (!referrer && downloadItem.finalUrl !== downloadItem.url) {
    referrer = downloadItem.url;
  }
  
  fetch(downloadItem.finalUrl)
  .then(response => {
    console.log(response.headers.get('content-type'));
  })
  .catch(error => {
    console.error(error);
  });

  //starting to process on link 
  // if (shouldTakeOver(url)) {
  //   triggerDownload(
  //     url,
  //     downloadItem.filename,
  //     referrer,
  //     downloadItem.fileSize,
  //     downloadItem.mime
  //   );
  // }
});
