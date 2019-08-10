function encodeAndDecodeMessages() {
    document.getElementsByTagName('button')[0]
        .addEventListener('click', encodeMessage);
    document.getElementsByTagName('button')[1]
        .addEventListener('click', decodeMessage);

    function encodeMessage() {
        let encodeArea = document.getElementsByTagName('textarea')[0];
        let decodeArea = document.getElementsByTagName('textarea')[1];

        let send = '';
        [...encodeArea.value].forEach(el => send += String.fromCharCode(el.charCodeAt() + 1));

        decodeArea.value = send;
        encodeArea.value = '';
    }

    function decodeMessage() {
        let textArea = document.getElementsByTagName('textarea')[1];

        let decodeText = '';
        [...textArea.value].forEach(l => decodeText += String.fromCharCode(l.charCodeAt() - 1));
        textArea.value = decodeText;
    }
}