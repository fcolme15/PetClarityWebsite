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

const appID = COMETCHAT_CONSTANTS.APP_ID;  
const region = COMETCHAT_CONSTANTS.REGION; 
const authKey = COMETCHAT_CONSTANTS.AUTH_KEY; 

let currentChatUID = null;
let loggedInUserUID = null;


function initializeCometChat() {
  const appSetting = new CometChat.AppSettingsBuilder()
    .subscribePresenceForAllUsers()
    .setRegion(region)
    .build();

  return CometChat.init(appID, appSetting);
}


function loginUser(uid) {
  return CometChat.login(uid, authKey);
}

//Setup CometChat
function setupCometChat(uid) {
  initializeCometChat()
    .then(() => loginUser(uid))
    .then(user => {
        console.log("User logged in:", user);
        loggedInUserUID = user.uid;
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

  const defaultUserName = "Today";

  usersRequest.fetchNext().then(users => {
      const usersListDiv = document.getElementById("usersList");
      usersListDiv.innerHTML = "";

      users.forEach(user => {
          const userBtn = document.createElement("button");
          userBtn.innerText = user.name;
          userBtn.classList.add("user");
          userBtn.onclick = () => {
              currentChatUID = user.uid;
              document.getElementById("chatWindow").innerHTML = "";
              fetchMessages(user.uid, CometChat.RECEIVER_TYPE.USER);

              // Highlight the selected user
              document.querySelectorAll(".user").forEach(btn => btn.classList.remove("active"));
              userBtn.classList.add("active");
          };
          usersListDiv.appendChild(userBtn);

          //Preload the specific user
          if (user.name === defaultUserName) {
              currentChatUID = user.uid;
              document.getElementById("chatWindow").innerHTML = "";
              fetchMessages(user.uid, CometChat.RECEIVER_TYPE.USER);
              userBtn.classList.add("active");
          }
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

  const fromUser = message.sender.uid === loggedInUserUID;
  const messageClass = fromUser ? 'sent' : 'received';

  messageDiv.classList.add('chat-message', messageClass);
  
  if (!message.text || message.text === "undefined") return;

  messageDiv.innerText = message.text;
  chatWindow.appendChild(messageDiv);
  chatWindow.scrollTop = chatWindow.scrollHeight;
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
      displayMessage(message, true);
      document.getElementById("messageInput").value = "";
  });
}

//Add message listener
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

//START Pet Selected Using Cookies
function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
}

function setCookie(name, value) {
  document.cookie = `${name}=${value}; path=/`;
}

function setupDropdownProfileSwitch() {
  document.querySelectorAll('#petDropdownMenu p').forEach(item => {
    item.addEventListener('click', () => {
      const selectedProfile = item.getAttribute('data-profile');
      setCookie('selectedProfile', selectedProfile); // Save it
      updateTitles();
      closeAllDropdownsExcept();
    });
  });
}

//END Pet Selected Using Cookies

//START Language change

function updateTitles() {
  const lang = getCookie('selectedLang') || 'English';
  const profile = getCookie('selectedProfile') || 'Luna';
  const langaugeSelected = document.getElementById('languageSelected');
  const dogName = document.getElementById("petProfileName");

    
  if (langaugeSelected) langaugeSelected.innerHTML = lang;
  if (dogName) dogName.innerHTML = profile;
}


function setupDropdownLanguageSwitch() {
  document.querySelectorAll('#langDropdownMenu p').forEach(item => {
    item.addEventListener('click', () => {
      const selectedLang = item.getAttribute('data-lang');
      setCookie('selectedLang', selectedLang); // Save it
      updateTitles();             // Update content
      closeAllDropdownsExcept();
    });
  });
}
//END Language change



//Initialize when the page is ready
window.addEventListener("DOMContentLoaded", () => {
    initIconDropdowns(); // Initialize nav drop downs (change pet & language)
    const uid = "cometchat-uid-1";  
    setupCometChat(uid);
    attachClickHandler('sendBtn', sendUserMessage);
    setupDropdownProfileSwitch();
    setupDropdownLanguageSwitch();
    updateTitles();   
});
