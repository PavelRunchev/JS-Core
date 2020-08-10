function encodeAndDecodeMessages() {
    const buttons = document.querySelectorAll('#main div button');
    //append click event
    buttons[0].addEventListener('click', encodeMessage);
    buttons[1].addEventListener('click', decodeMessage);
    let [message, recieveMessage] = document.querySelectorAll('#main div textarea');

    function encodeMessage(e) {
        let encodeText = '';
        for (let char of message.value) {
            encodeText += String.fromCharCode(char.charCodeAt(0) + 1);
        }

        recieveMessage.value = encodeText;
        message.value = '';
    }

    function decodeMessage(e) {
        let decodeText = '';
        for (let char of recieveMessage.value) {
            decodeText += String.fromCharCode(char.charCodeAt(0) - 1);
        }

        recieveMessage.value = decodeText;
    }
}