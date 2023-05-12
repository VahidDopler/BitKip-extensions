const similarOption = document.getElementById('similarOption');
const regexOption = document.getElementById('regexOption');
const linkInput = document.getElementById('linkInput');

document.getElementById('form')
    .addEventListener('submit', () => {
        const linkPattern = linkInput.value;
        const isSimilarOption = similarOption.checked;
        if (isSimilarOption)
            chrome.runtime.sendMessage({type: 'extractSimilarLinks', linkPattern: linkPattern});
        else
            chrome.runtime.sendMessage({type: 'extractLinksWithRegex', linkPattern: linkPattern});
        window.close();
    });

similarOption.addEventListener('change', () => {
    if (similarOption.checked) {
        regexOption.checked = false;
        linkInput.placeholder = "Enter only common parts of a link"
    }
});
regexOption.addEventListener('change', () => {
    if (regexOption.checked){
        similarOption.checked = false;
        linkInput.placeholder = "Enter link pattern"
    }
});
