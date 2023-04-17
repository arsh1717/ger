let chatbotArea = document.querySelectorAll('.chatbot-area');
const content = document.querySelectorAll('.content-area');
const h=content[0].getAttribute('height');
import elements from './this.js';

// import data from './questions.json';
// console.log(data);

document.getElementById('chatbot-icon').addEventListener('click', popup);
document.getElementById('sendBtn').addEventListener('click', send);
const input = document.getElementById('userinput');

input.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("sendBtn").click();
    }
  })


function popup() {
    if (chatbotArea[0].classList.contains('hide')) {
        chatbotArea[0].classList.remove('hide');
    }
}
function send() {
    let text = document.getElementById('userinput').value;
    document.getElementById('userinput').value = "";
    let createEl = document.createElement('div');
    createEl.innerText = text;
    createEl.classList.add('chat-reply');

    content[0].appendChild(createEl);
    if(content[0].offsetHeight > h){
        content[0].scrollBy(0,createEl.offsetHeight+10);
    }
    
    setTimeout(botResponse, 600, text);
}

function botResponse(usertext) {
    let resp = document.createElement('div');
    resp.classList.add('bot-reply');
    let write_text = "Sorry, I don't understand that";
    //Iterating through an object
    Object.entries(elements).map(entry => {
        let value = entry[1];
        if (value["pattern"].includes(usertext.toLowerCase())) {
            let response = value["responses"];
            let r_int = Math.floor(Math.random() * response.length);
            write_text = response[r_int];
            resp.innerHTML = `<div class="upwardT"></div><div class="bot-text">${write_text}</div>`;
            content[0].appendChild(resp);
            //downward scroll
            if(content[0].offsetHeight > h){
                content[0].scrollBy(0,resp.offsetHeight+10);
            }
            return;
        }
    });

    resp.innerHTML = `<div class="upwardT"></div><div class="bot-text">${write_text}</div>`;
    content[0].appendChild(resp);
    if(content[0].offsetHeight > h){
        content[0].scrollBy(0,resp.offsetHeight+10);
    }
    return;
}