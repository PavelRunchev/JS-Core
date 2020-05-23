function solve() {
   let chatMessages = document.getElementById('chat_messages');
   let sendBtn = document.getElementById('send');
   sendBtn.addEventListener('click', sendMessage);

   function sendMessage(e) {
      e.preventDefault();

      let inputMessage = document.getElementById('chat_input');
      if(inputMessage === '') return;

      let div = document.createElement('div');
      div.classList = 'message my-message';
      div.textContent = inputMessage.value;
      chatMessages.appendChild(div);

      inputMessage.value = '';
   }
}


