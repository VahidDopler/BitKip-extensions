'use strict';

const APP_BASE_URL = 'http://127.0.0.1:57850/api/v1/tours/myTour';

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
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data),
    })
      .then((recieve) => console.log(recieve))
      .catch((err) => {});
  }
}

//trigger download link
function triggerDownload(url, filename, referer, size, mime) {
  chrome.cookies.getAll({ url }, (cookies) => {
    const cookieStr = cookies ? cookies.map((cookie) => `${cookie.name}=${cookie.value}`).join("; ") : null;

    const requestHeaders = { "User-Agent": [navigator.userAgent] };
    if (referer) {
      requestHeaders["Referer"] = [referer];
    }

    const responseHeaders = {};
    if (size) {
      const fz = +size;
      if (fz > 0) {
        responseHeaders["Content-Length"] = [fz];
      }
    }
    if (mime) {
      responseHeaders["Content-Type"] = [mime];
    }

    const data = {
      url,
      cookie: cookieStr,
      requestHeaders,
      responseHeaders,
      filename,
      fileSize: size,
      mimeType: mime,
    };

    console.log(data);

    // Initiate the download
    chrome.downloads.download({
      url,
      filename,
      headers: requestHeaders,
      saveAs: false, // Set to true if you want the user to choose a filename
    });
  });
}



chrome.tabs.onActivated.addListener((activeInfo) => {
  // Get the URL of the active tab
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    // Pass the URL to the connector function
  });
});

chrome.downloads.onDeterminingFilename.addListener((downloadItem, suggest) => {
  // Prevent the download from starting
  suggest({ cancel: true });
  chrome.downloads.cancel(downloadItem.id, () =>
    chrome.downloads.erase({ id: downloadItem.id })
  );
  const connector = new Connector();

  // Pass the download link to the connector function
  connector.postMessage(downloadItem.finalUrl);
});
