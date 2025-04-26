import {EXTRA_TEXT} from "./visitSummaries.js"

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
      start: '2025-04-22',
      description: 'Annual physical with Vet',
      icon: '🏥'
    },
    {
      title: 'Take meds',
      start: '2025-04-24',
      description: 'Morning meds: Carprofen',
      icon: '💊'
    }
];
  

//End calendar

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

  const extraText = EXTRA_TEXT[lang];
  const dashboardTextEl = document.getElementById('dashboardText');
  const calendarTextEl = document.getElementById('calendarText');
    
  if (langaugeSelected) langaugeSelected.innerHTML = lang;
  if (dogName) dogName.innerHTML = profile;
  if(dashboardTextEl) dashboardTextEl.innerHTML = extraText.dashboard
  if(calendarTextEl) calendarTextEl.innerHTML = extraText.calendar
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


// Initialize all listeners when the DOM is done loading
document.addEventListener('DOMContentLoaded', () => {
    initIconDropdowns(); // Initialize nav drop downs (change pet & language)
    initInteractiveCalendar('calendarContainer', sampleCalendarEvents); // Initialize the calendar
    setupDropdownProfileSwitch();
    setupDropdownLanguageSwitch();
    updateTitles();   
});
  
