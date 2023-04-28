chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === 'extract_links') {
    const currentUrl = window.location.href;
    var links = [];
    var allLinks = document.getElementsByTagName('a');

    for (var i = 0; i < allLinks.length; i++) {
      links.push(allLinks[i].href);
    }

    // send links to background.js or do something else with them
    console.log('Current URL:', currentUrl);
    console.log('Links:', links);

    sendResponse({ links: links });
  }
});
