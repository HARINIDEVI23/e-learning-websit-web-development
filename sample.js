document.addEventListener("DOMContentLoaded", function() {
    const showMoreButton = document.getElementById('show-more-btn');
    const hiddenCardsContainer = document.querySelector('.hidden-cards');

    // Event listener for the "Show More" button
    showMoreButton.addEventListener('click', function() {
        // Toggle the display of the hidden cards container
        hiddenCardsContainer.style.display = 'flex';
        // Hide the "Show More" button after revealing all cards
        showMoreButton.style.display = 'none';
    });
});





document.addEventListener("DOMContentLoaded", function() {
    const showMoreButton = document.getElementById('show-more-btn');
    const hiddenCardsContainer = document.querySelector('.hidden-cards');
    const hiddenCards = hiddenCardsContainer.querySelectorAll('.card');
    let currentIndex = 0; // Keep track of the index of the next card to show

    // Hide the "Show More" button if there are no more hidden cards
    function checkHiddenCards() {
        if (currentIndex >= hiddenCards.length) {
            showMoreButton.style.display = 'none';
        }
    }

    // Function to show the next hidden card
    function showNextCard() {
        if (currentIndex < hiddenCards.length) {
            hiddenCards[currentIndex].style.display = 'block';
            currentIndex++;
            checkHiddenCards();
        }
    }

    // Add event listener to the "Show More" button
    showMoreButton.addEventListener('click', function() {
        showNextCard();
    });

    // Add event listener to each "Read More" button in the visible cards
    const readMoreButtons = document.querySelectorAll('.card-content .btn');
    readMoreButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            showNextCard();
        });
    });
});
