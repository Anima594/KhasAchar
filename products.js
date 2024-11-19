// Select modal, close button, and all Buy buttons
const modal = document.querySelector('#order-modal'); // Modal element
const closeButton = document.querySelector('.close'); // Cross button inside the modal
const buyButtons = document.querySelectorAll('.buy-button'); // All Buy buttons on the page

// Function to open the modal
function openModal() {
    modal.style.display = 'block'; // Show the modal
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none'; // Hide the modal
}

// Attach event listener to all Buy buttons
buyButtons.forEach(button => {
    button.addEventListener('click', openModal); // Open modal when a Buy button is clicked
});

// Attach event listener to the close button
closeButton.addEventListener('click', closeModal); // Close modal when the cross button is clicked

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal(); // Hide the modal
    }
});
