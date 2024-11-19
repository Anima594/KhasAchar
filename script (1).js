document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector('.modal'); // Replace '.modal' with your form container class
const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => {
    modal.style.display = 'none'; // Hide the modal
});
        modal.style.display = 'block'; // Make the form visible
    });
});
console.log("Buy button clicked!");
