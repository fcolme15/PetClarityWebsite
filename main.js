import {COMETCHAT_CONSTANTS} from "./const.js"
import {VISIT_SUMMARIES} from "./visitSummaries.js"

const profiles = {
  Luna: {
    breed: "Boxer",
    age: "2 Years",
    weight: "61 Pounds",
    birthday: "1/11/23"
  },
  Tank: {
    breed: "Golden Retriever",
    age: "3 Years",
    weight: "78 Pounds",
    birthday: "5/04/22"
  },
  Bean: {
    breed: "French Bulldog",
    age: "1 Year",
    weight: "22 Pounds",
    birthday: "8/12/23"
  }
};

//START Icon Dropdowns

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

// Initialize date dropdown in summary section
function initDateDropdown() {
  const button = document.querySelector('.dropbtn');
  const dropdown = document.getElementById('dateDropdownMenu');

  function toggleDropdown(event){
    event.stopPropagation();
    closeAllDropdownsExcept(dropdown);
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  }

  button.addEventListener('click', toggleDropdown);

  window.addEventListener('click', () => {
    dropdown.style.display = 'none';
  });
}
  
//Closes all dropdowns excluding the one clicked
function closeAllDropdownsExcept(exception = null) {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
      if (dropdown !== exception) {
        dropdown.style.display = 'none';
      }
    });
    document.querySelectorAll('.dropdownMenu').forEach(dropdown => {
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

//START Exapandable bottom right box
  
//Initialize the toggle functionality for the bottom expandable box
function initExpandableBox() {
    const toggleBtn = document.getElementById("toggleBtn"); //Toggle button 
    const bottomBox = document.getElementById("expandable"); //The bottom-right box
    const rightBox = bottomBox?.parentElement; //Container holding both top and bottom boxes

    if (!toggleBtn || !bottomBox || !rightBox) return;

    toggleBtn.addEventListener("click", () => {
      toggleClass(bottomBox, "expanded");  //Make the bottom box span both rows
      toggleClass(rightBox, "expanded");   //Hide the top box when bottom is expanded
    });
}
//END Exapandable bottom right box
  
//START View swap top right box
//Initialize the ability to switch between Calendar View and List View
function initViewSwitcher() {
    const swapBtn = document.getElementById("swapViewBtn"); //Button to toggle views
    const calendarView = document.getElementById("calendarView"); //Calendar content
    const listView = document.getElementById("listView"); //List content
    
    if (!swapBtn || !calendarView || !listView) return; //Error null element

    const title = swapBtn.previousElementSibling; // Gets the <h2> element (sibling before button)
  
    swapBtn.addEventListener("click", () => {
      //Check which view is currently visible
      const showingCalendar = calendarView.style.display !== "none";  
  
      // Toggle display
      calendarView.style.display = showingCalendar ? "none" : "block";
      listView.style.display = showingCalendar ? "block" : "none";

      // Update <h2> text content
      if (title) {
        title.textContent = showingCalendar ? "📋 List View" : "🗓️ Calendar View";
      }

      // Update button background image
      swapBtn.style.backgroundImage = showingCalendar
          ?  "url('./imgs/calendarIcon.webp')"
          :  "url('./imgs/checkListIcon.png')"; 
    });
}
//END View swap top right box


//Start open text
function initOpenTextSections() {
    const sections = document.querySelectorAll('.open-text');
  
    sections.forEach(section => {
      const title = section.querySelector('.open-text-title');
      title.addEventListener('click', () => {
        section.classList.toggle('open');
      });
    });
}
//End open text
  

//Start calendar
// Calendar Initialization Function
function initInteractiveCalendar(containerId, eventsData = []) {
    const calendarEl = document.getElementById(containerId);
    if (!calendarEl) {
      console.warn(`Calendar container with ID "${containerId}" not found.`);
      return;
    }
  
    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      height: 'auto',
      contentHeight: 'auto',
      events: eventsData,
      eventColor: '#E83A0E',
      eventDidMount: function(info) {
        const icon = info.event.extendedProps.icon;
  
        // Prepend icon if provided
        if (icon) {
          info.el.innerHTML = `${icon} ${info.el.innerHTML}`;
        }
  
        // Create tooltip
        const tooltip = document.createElement('div');
        tooltip.textContent = info.event.extendedProps.description || '';
        tooltip.className = 'tooltip';
        info.el.appendChild(tooltip);
  
        // Show/hide on hover
        info.el.addEventListener('mouseenter', () => {
          tooltip.style.display = 'block';
        });
        info.el.addEventListener('mouseleave', () => {
          tooltip.style.display = 'none';
        });
      }
    });
  
    calendar.render();
}
  
// Example Events Data (replace or fetch dynamically as needed)
const sampleCalendarEvents = [
    {
      title: 'Checkup',
      start: '2025-04-15',
      description: 'Annual physical with Dr. Smith',
      icon: '🏥'
    },
    {
      title: 'Take meds',
      start: '2025-04-18',
      description: 'Morning meds: Carprofen',
      icon: '💊'
    }
];
  

//End calendar
//Toggles a class on an element
function toggleClass(element, className) {
    element.classList.toggle(className);
}
  
  
//Sets the display property of an element
function setDisplay(element, value) {
    if (element) {
      element.style.display = value;
    }
}

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

function updateDogSummary(profileName) {
  const profile = profiles[profileName];
  if (!profile) return; 

  const dogSummary = document.getElementById("dogSummary");
  const dogName = document.getElementById("petProfileName");
  dogName.innerHTML = `${profileName}`
  dogSummary.innerHTML = `
    <span>Breed: ${profile.breed}</span>
    <span style="margin-left: 5rem">Age: ${profile.age}</span><br>
    <span>Weight: ${profile.weight}</span>
    <span style="margin-left: 2.4rem">Birthday: ${profile.birthday}</span><br>
  `;
}

function initProfileSelection() {
  let profile = getCookie('selectedProfile');

  // If no cookie exists, set a default profile (e.g., "guest")
  if (!profile) {
    profile = 'Luna'; //Default profile 
    setCookie('selectedProfile', profile);
  }

  updateDogSummary(profile); // Only this is needed to update the visit summary content
  
}

function setupDropdownProfileSwitch() {
  document.querySelectorAll('#petDropdownMenu p').forEach(item => {
    item.addEventListener('click', () => {
      const selectedProfile = item.getAttribute('data-profile');
      setCookie('selectedProfile', selectedProfile); // Save it
      updateDogSummary(selectedProfile);             // Update content
      closeAllDropdownsExcept();
    });
  });
}

//END Pet Selected Using Cookies

//START Language change
function initLanguageSelection() {
  let profile = getCookie('selectedLang');

  // If no cookie exists, set a default profile (e.g., "guest")
  if (!profile) {
    profile = 'English'; //Default profile 
    setCookie('selectedLang', profile);
  }

  updateVisitSummary();             // Update content
}

function updateVisitSummary() {
  const lang = getCookie('selectedLang') || 'English';
  const visit = getCookie('selectedVisit') || 'SprainedAnkle';

  const summaries = VISIT_SUMMARIES[lang][visit];
  

  if (summaries) {
    const evaluationEl = document.getElementById('evaluationContent');
    const medicationEl = document.getElementById('medicationContent');
    const treatmentEl = document.getElementById('treatmentContent');
    const langaugeSelected = document.getElementById('languageSelected');
    const visitSelected = document.getElementById('visitSelected');

    if (evaluationEl) evaluationEl.innerHTML = summaries.evaluation;
    if (medicationEl) medicationEl.innerHTML = summaries.medication;
    if (treatmentEl) treatmentEl.innerHTML = summaries.treatment;
    if (langaugeSelected) langaugeSelected.innerHTML = lang;
    if (visitSelected) visitSelected.innerHTML = visit;
  }
}


function setupDropdownLanguageSwitch() {
  document.querySelectorAll('#langDropdownMenu p').forEach(item => {
    item.addEventListener('click', () => {
      const selectedLang = item.getAttribute('data-lang');
      setCookie('selectedLang', selectedLang); // Save it
      updateVisitSummary();             // Update content
      closeAllDropdownsExcept();
    });
  });
}
//END Language change

//START Visit change
function initVisitSelection() {
  let profile = getCookie('selectedLang');

  // If no cookie exists, set a default profile (e.g., "guest")
  if (!profile) {
    profile = 'SprainedAnkle'; //Default profile 
    setCookie('selectedVisit', profile);
  }
  
}

function setupDropdownVisitwitch() {
  document.querySelectorAll('#dateDropdownMenu p').forEach(item => {
    item.addEventListener('click', () => {
      const selectedVisit = item.getAttribute('data-visit');
      setCookie('selectedVisit', selectedVisit); // Save it
      updateVisitSummary();             // Update content
      closeAllDropdownsExcept();
    });
  });
}
//END Language change



// Initialize all listeners when the DOM is done loading
document.addEventListener('DOMContentLoaded', () => {
    initIconDropdowns(); // Initialize nav drop downs (change pet & language)
    initDateDropdown(); // Initialize date drop downs (found in summary section)
    initExpandableBox(); // Initialize expand/collapse behavior
    initViewSwitcher(); // Initialize calendar/list view toggle
    initOpenTextSections(); // Initialize openText sections
    initInteractiveCalendar('calendarContainer', sampleCalendarEvents); // Initialize the calendar
    const uid = "cometchat-uid-1";  
    setupCometChat(uid);
    attachClickHandler('sendBtn', sendUserMessage);
    initProfileSelection();
    setupDropdownProfileSwitch();
    initVisitSelection();
    initLanguageSelection();
    setupDropdownLanguageSwitch();
    setupDropdownVisitwitch();
});
  


