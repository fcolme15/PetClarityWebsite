
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


// Initialize all listeners when the DOM is done loading
document.addEventListener('DOMContentLoaded', () => {
    initIconDropdowns(); // Initialize nav drop downs (change pet & language)
    initInteractiveCalendar('calendarContainer', sampleCalendarEvents); // Initialize the calendar
});
  
