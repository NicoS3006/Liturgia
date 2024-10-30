// Main page menu button
const menuButton = document.getElementById('menu-button');
const menuOverlay = document.querySelector('.menu-page-overlay');

// Event listener for the main menu button to open overlay
menuButton.addEventListener('click', () => {
  menuOverlay.style.visibility = 'visible';
  menuOverlay.classList.add('visible');
});

// Overlay page menu button to close overlay
const menuButton1 = document.getElementById('menu-button1');

// Event listener for the overlay menu button to close overlay
menuButton1.addEventListener('click', () => {
  menuOverlay.classList.remove('visible');

  // Wait for the fade-out transition to complete before hiding
  setTimeout(() => {
    menuOverlay.style.visibility = 'hidden';
  }, 400); // Match with your CSS transition duration
});


// Define the function separately so we can call it on load as well
function updateScrollIndicator() {
    const topLine = document.querySelector('.top-line');
    const bottomLine = document.querySelector('.bottom-line');
    const ball = document.querySelector('.ball');
    const indicatorContainer = document.querySelector('.scroll-indicator');

    // Get the total scrollable height of the page
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Calculate the scroll percentage (0 to 1)
    const scrollPercentage = window.scrollY / scrollableHeight;

    // Set the max heights for the lines and ball movement range
    const maxLineHeight = 265; // Adjust the max line height as needed
    const minLineHeight = 0; // Minimum line length to maintain a gap
    const maxBallMovement = indicatorContainer;

    // Adjust line heights based on scroll position
    const newTopLineHeight = scrollPercentage * maxLineHeight;
    const newBottomLineHeight = (1 - scrollPercentage) * maxLineHeight;

    // Log values to check if they are being calculated correctly
    console.log("Scroll Percentage:", scrollPercentage);
    console.log("Top Line Height:", newTopLineHeight);
    console.log("Bottom Line Height:", newBottomLineHeight);

    // Apply calculated heights to the elements
    topLine.style.height = `${newTopLineHeight}px`;
    bottomLine.style.height = `${newBottomLineHeight}px`;

    // Move the ball based on scroll position
    const ballMovement = scrollPercentage * maxBallMovement;
    ball.style.transform = `translateY(${ballMovement}px)`;
    console.log("Ball Movement:", ballMovement);
}

// Call the function once to set the initial state
updateScrollIndicator();