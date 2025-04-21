
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
      description: 'Annual physical with Dr. Smith',
      icon: '🏥'
    },
    {
      title: 'Take meds',
      start: '2025-04-24',
      description: 'Morning meds: Ibuprofen',
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

// Initialize all listeners when the DOM is done loading
document.addEventListener('DOMContentLoaded', () => {
    initIconDropdowns(); // Initialize nav drop downs (change pet & language)
    initExpandableBox(); // Initialize expand/collapse behavior
    initViewSwitcher(); // Initialize calendar/list view toggle
    initOpenTextSections(); // Initialize openText sections
    initInteractiveCalendar('calendarContainer', sampleCalendarEvents); // Initialize the calendar
});
  
