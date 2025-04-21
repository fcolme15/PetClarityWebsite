import {COMETCHAT_CONSTANTS} from "./const.js"

//Initializes all icon dropdowns on the page
function initIconDropdowns() {
    const containers = document.querySelectorAll('.icon-container');

    containers.forEach(container => {
      const icon = container.querySelector('.icon'); // The circular image
      const text = container.querySelector('.icon-text'); // The label below the image
      const dropdown = container.querySelector('.dropdown'); // The dropdown menu
  
      //Toggle the visibility of this container's dropdown
      function toggleDropdown() {
        //Close any other open dropdowns first
        closeAllDropdownsExcept(dropdown);
  
        //Toggle this dropdown
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
      }
  
      //Add click listeners to both the image and the text
      icon.addEventListener('click', toggleDropdown);
      text.addEventListener('click', toggleDropdown);
    });
  
    //Add a global listener to close dropdowns when clicking outside 
    window.addEventListener('click', handleOutsideClick);
}
  
//Closes all dropdowns excluding the one clicked
function closeAllDropdownsExcept(exception = null) {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
      if (dropdown !== exception) {
        dropdown.style.display = 'none';
      }
    });
  }
  
//Close all dropdowns if the user clicks outside dropdowns (.icon-container)
function handleOutsideClick(event) {
    if (!event.target.closest('.icon-container')) {
      closeAllDropdownsExcept(); 
    }
}

//END Icon Drowdowns

//START CometChat


const appID = COMETCHAT_CONSTANTS.APP_ID;  // Replace with your CometChat App ID
const region = COMETCHAT_CONSTANTS.REGION;  // Replace with your CometChat Region
const authKey = COMETCHAT_CONSTANTS.AUTH_KEY;  // Replace with your CometChat Auth Key

let currentChatUID = null;

//Initialize CometChat
function initializeCometChat() {
    const appSetting = new CometChat.AppSettingsBuilder()
        .subscribePresenceForAllUsers()
        .setRegion(region)
        .build();

    return CometChat.init(appID, appSetting);
}

//Login user
function loginUser(uid) {
    return CometChat.login(uid, authKey);
}

//Setup CometChat
function setupCometChat(uid) {
    initializeCometChat()
        .then(() => loginUser(uid))
        .then(user => {
            console.log("User logged in:", user);
            addMessageListener("chat_listener");
            listUsers();  // Fetch list of users
        })
        .catch(console.error);
}

//List users
function listUsers() {
    const usersRequest = new CometChat.UsersRequestBuilder()
        .setLimit(10)
        .build();

    usersRequest.fetchNext().then(users => {
        const usersListDiv = document.getElementById("usersList");
        usersListDiv.innerHTML = "";

        users.forEach(user => {
            const userBtn = document.createElement("button");
            userBtn.innerText = user.name;
            userBtn.onclick = () => {
                currentChatUID = user.uid;
                document.getElementById("chatWindow").innerHTML = "";
                fetchMessages(user.uid, CometChat.RECEIVER_TYPE.USER);
            };
            usersListDiv.appendChild(userBtn);
        });
    });
}

//Fetch previous messages
function fetchMessages(receiverID, receiverType) {
    const messagesRequest = new CometChat.MessagesRequestBuilder()
        .setUID(receiverID)
        .setLimit(30)
        .build();

    messagesRequest.fetchPrevious().then(messages => {
        messages.forEach(msg => displayMessage(msg));
    });
}

//Display message in chat window
function displayMessage(message) {
    const chatWindow = document.getElementById("chatWindow");
    const messageDiv = document.createElement("div");
    messageDiv.innerText = `${message.sender.name}: ${message.text}`;
    chatWindow.appendChild(messageDiv);
}

//Send a message
function sendUserMessage() {
    const text = document.getElementById("messageInput").value;
    if (!currentChatUID || !text) return;

    const msg = new CometChat.TextMessage(
        currentChatUID,
        text,
        CometChat.RECEIVER_TYPE.USER
    );

    CometChat.sendMessage(msg).then(message => {
        displayMessage(message);
        document.getElementById("messageInput").value = "";
    });
}

//Add message listener for real-time updates
function addMessageListener(listenerID) {
    CometChat.addMessageListener(
        listenerID,
        new CometChat.MessageListener({
            onTextMessageReceived: message => {
                if (message.sender.uid === currentChatUID) {
                    displayMessage(message);
                }
            }
        })
    );
}

function attachClickHandler(id, callback) {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener('click', callback);
    } else {
      console.warn(`Element with ID "${id}" not found.`);
    }
}


//END CometChat

//Initialize when the page is ready
window.addEventListener("DOMContentLoaded", () => {
    initIconDropdowns(); // Initialize nav drop downs (change pet & language)
    const uid = "cometchat-uid-1";  
    setupCometChat(uid);
    attachClickHandler('sendBtn', sendUserMessage);
});
