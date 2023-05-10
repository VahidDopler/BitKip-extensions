chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message === 'extract_links') {
    // var links = [];
    // for (var i = document.links.length; i-- > 0; ) {
    //   if (document.links[i].hostname === location.hostname) {
    //     links.push(document.links[i].href);
    //   }
    // }

    // const currentUrl = location.hostname;

    // // send links to background.js or do something else with them
    // console.log('Current URL:', currentUrl);
    // console.log('Links:', links);

    // sendResponse({ links: links, url: currentUrl });
    const currentUrl = window.location.href;
    if (currentUrl.includes('recaptcha')) {
      return;
    }
    var links = [];
    var allLinks = document.querySelectorAll('a');

    for (var i = 0; i < allLinks.length; i++) {
      links.push(allLinks[i].href);
    }
    setTimeout(function () {
      // Code to access webpage content goes here
    }, 5000); // Delay for 5 seconds

    // send links to background.js or do something else with them
    console.log('Current URL:', currentUrl);
    console.log('Links:', links);

    sendResponse({ links: links, url: currentUrl });
  } else if (message.order == 'getLinks-speicfic-string') {
    const currentUrl = window.location.href;
    if (currentUrl.includes('recaptcha')) {
      return;
    }
    var links = [];
    var allLinks = document.querySelectorAll('a');

    for (var i = 0; i < allLinks.length; i++) {
      links.push(allLinks[i].href);
    }
    console.log(message.linkRegex);

    const filtered_links = [];

    for (let index = 0; index < links.length; index++) {
      if (links[index].includes(message.linkRegex))
        filtered_links.push(links[index]);
    }
    console.log(filtered_links);
    sendResponse({ links: filtered_links });
  } else if (message.order == 'getLinks-speicfic-regex') {
    const currentUrl = window.location.href;
    if (currentUrl.includes('recaptcha')) {
      return;
    }
    var links = [];
    var allLinks = document.querySelectorAll('a');

    for (var i = 0; i < allLinks.length; i++) {
      links.push(allLinks[i].href);
    }
    console.log(message.linkRegex);

    const filtered_links = [];
    const regex = new RegExp(message.linkRegex);
    console.log(regex);
    console.log(links.length);
    for (let index = 0; index < links.length; index++) {
      if (regex.test(links[index])) filtered_links.push(links[index]);
    }
    console.log(filtered_links);
    sendResponse({ links: filtered_links });
  }
});
