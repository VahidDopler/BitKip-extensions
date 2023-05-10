document
  .getElementById('form-string')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    var linkRegex = document.getElementById('stringinput').value;
    chrome.runtime.sendMessage({ type: 'exatractLinkswithSpecificString', linkRegex: linkRegex });
    window.close();
  });

document
  .getElementById('form-regex')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    var linkRegex = document.getElementById('regexinput').value;
    chrome.runtime.sendMessage({ type: 'exatractLinkswithSpecificRegex', linkRegex: linkRegex });
    window.close();
  });

document
  .getElementById('specificStringOption')
  .addEventListener('change', function () {
    if (specificStringOption.checked) {
      document.getElementById('form-regex').style.display = 'none';
      document.getElementById('form-string').style.display = 'block';
    }
  });

regexOption.addEventListener('change', function () {
  if (regexOption.checked) {
    document.getElementById('form-string').style.display = 'none';
    document.getElementById('form-regex').style.display = 'block';
  }
});
