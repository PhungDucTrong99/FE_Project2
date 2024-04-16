// Define a function to handle scrolling to the corresponding section when clicking the button in the navigation
function scrollToSection() {
  // Get all the buttons in the navigation
  const buttons = document.querySelectorAll(".navbar a");
  const sections = document.querySelectorAll(".line");

  // Loop through each button and add a click event to each button
  buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      // Delete class 'active' of all buttons
      buttons.forEach(function (btn) {
        btn.classList.remove("active");
      });
      // Add class 'active' in current button
      button.classList.add("active");
      //Get the id of the section corresponding to the clicked button
      const sectionId = button.textContent.toLowerCase().replace(/\s+/g, "");
      // Find element section
      const section = document.getElementById(sectionId);
      // scroll to the section's location
      section.scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Add scroll event to window to handle adding 'active' class to the corresponding button when scrolling to each section
  window.addEventListener("scroll", function () {
    const currentScroll = window.scrollY;

    sections.forEach(function (section) {
      const rect = section.getBoundingClientRect();
      // Check if section is in viewport
      if (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2
      ) {
        const sectionId = section.id;
        // Find the corresponding button and add class 'active'
        const correspondingButton = document.querySelector(
          `.navbar a[href="#${sectionId}"]`
        );
        if (correspondingButton) {
          // Remove 'active' class from all buttons
          buttons.forEach(function (btn) {
            btn.classList.remove("active");
          });
          // Add 'active' class to the corresponding button
          correspondingButton.classList.add("active");
        }
      }
    });
  });
}

// call function scrollToSection to execute processing when the document is loaded
document.addEventListener("DOMContentLoaded", scrollToSection);
