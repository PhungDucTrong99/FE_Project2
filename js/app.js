function openNavbar() {
    document.getElementById("sideNavigationBar")
        .style.width = "50%";
}
function closeNavbar() {
    document.getElementById("sideNavigationBar")
        .style.width = "0%";
}

// Define a function to handle scrolling to the corresponding section when clicking the button in the navigation
function scrollToSection() {
    // Get all the buttons in the navigation
    const buttons = document.querySelectorAll('.navbar a');

    // Loop through each button and add a click event to each button
    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            
            event.preventDefault();

            // Delete class 'active' of all button
            buttons.forEach(function(btn) {
                btn.classList.remove('active');
            });

            // Add class 'active' in current button
            button.classList.add('active');

            //Get the id of the section corresponding to the clicked button
            const sectionId = button.textContent.toLowerCase().replace(/\s+/g, '');

            // Find element section
            const section = document.getElementById(sectionId);

            // scroll to the section's location
            section.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// call function scrollToSection to execute processing when the document is loaded
document.addEventListener('DOMContentLoaded', scrollToSection);