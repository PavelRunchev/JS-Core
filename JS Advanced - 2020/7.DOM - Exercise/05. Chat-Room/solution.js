function solve() {
   document.querySelector('#send').addEventListener('click', addMessage);

   function addMessage(e) {
      e.preventDefault();
      let inputMessage = document.querySelector('#chat_input');
      let message = document.createElement('div');
      message.textContent = inputMessage.value;
      message.className = 'message my-message';
      document.querySelector('#chat_messages').appendChild(message);

      inputMessage.value = '';
   }
}


