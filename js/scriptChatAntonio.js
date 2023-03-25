function mostrarUser(){
    var user = document.getElementById('UserInfo');
    if(user.style.display === 'none'){
        user.style.display = 'block';
    }else{
        user.style.display = 'none';
    }

    
}

const inputField = document.getElementById('input-field');
const sendButton = document.getElementById('send-button');
const messagesDiv = document.getElementById('messages');

sendButton.addEventListener('click', () => {
  const message = inputField.value;
  inputField.value = '';

  messagesDiv.scrollTop = messagesDiv.scrollHeight;

  const newMessage = document.createElement('div');
  newMessage.textContent = message;
  messagesDiv.appendChild(newMessage);
});

document.getElementById("Back").addEventListener("click", function() {
    window.location.href = "chatBancas.html";
});
