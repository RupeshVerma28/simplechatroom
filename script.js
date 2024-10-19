const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');


sendBtn.addEventListener('click', () => {
    sendMessage();
});


function sendMessage() {
    const message = messageInput.value.trim();

    if (message) {
        
        const sentMessage = document.createElement('div');
        sentMessage.classList.add('message', 'sent');
        sentMessage.innerHTML = `<p>${message}</p>`;
        chatBox.appendChild(sentMessage);

       
        messageInput.value = '';

        
        setTimeout(() => {
            const receivedMessage = document.createElement('div');
            receivedMessage.classList.add('message', 'received');
            receivedMessage.innerHTML = `<p>Auto reply: ${message}</p>`;
            chatBox.appendChild(receivedMessage);

            
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 1000);
    }
}


messageInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
