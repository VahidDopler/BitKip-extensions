const similarOption = document.getElementById('similarOption');
const regexOption = document.getElementById('regexOption');

document.getElementById('form')
    .addEventListener('submit', () => {
        const linkPattern = document.getElementById('linkInput').value;
        const isSimilarOption = similarOption.checked;
        if (isSimilarOption)
            chrome.runtime.sendMessage({type: 'extractSimilarLinks', pattern: linkPattern});
        else
            chrome.runtime.sendMessage({type: 'extractLinksWithRegex', pattern: linkPattern});
        window.close();
    });

similarOption.addEventListener('change', () => {
    if (similarOption.checked)
        regexOption.checked = false;
});
regexOption.addEventListener('change', () => {
    if (regexOption.checked)
        similarOption.checked = false;
});
