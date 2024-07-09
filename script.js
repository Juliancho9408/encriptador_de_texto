function encryptText() {
    const inputText = document.getElementById('inputText').value;
    let encryptedText = '';

    const vowelMap = {
        'a': 'ai', 'e': 'enter', 'i': 'imes', 'o': 'ober', 'u': 'ufat',
        'A': 'Ai', 'E': 'Enter', 'I': 'Imes', 'O': 'Ober', 'U': 'Ufat'
    };

    for (let i = 0; i < inputText.length; i++) {
        let char = inputText[i];

        if (vowelMap[char]) {
            encryptedText += vowelMap[char];
        } else {
            encryptedText += char;
        }
    }

    document.getElementById('outputText').value = encryptedText;
}

function decryptText() {
    const inputText = document.getElementById('inputText').value;
    let decryptedText = inputText;

    const reverseVowelMap = {
        'ai': 'a', 'enter': 'e', 'imes': 'i', 'ober': 'o', 'ufat': 'u',
        'Ai': 'A', 'Enter': 'E', 'Imes': 'I', 'Ober': 'O', 'Ufat': 'U'
    };

    for (let [key, value] of Object.entries(reverseVowelMap)) {
        const regex = new RegExp(key, 'g');
        decryptedText = decryptedText.replace(regex, value);
    }

    document.getElementById('outputText').value = decryptedText;
}
