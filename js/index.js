document.querySelector('.login-btn').addEventListener('click', () => {
  alert('Login clicked');
});

window.addEventListener("scroll", updateScrollIndicator);

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



window.addEventListener('scroll', function () {
  const headerLogo = document.querySelector('.header-logo');
  const leftColumnLogo = document.querySelector('.left-column-logo');
  const header = document.querySelector('.header');

  // Check if the header has scrolled out of view
  const headerHeight = header.offsetHeight;
  const scrollPosition = window.scrollY;

  if (scrollPosition >= headerHeight) {
    // Hide the header logo and show the left-column logo
    headerLogo.classList.add('hidden');
    leftColumnLogo.classList.remove('hidden');
  } else {
    // Show the header logo and hide the left-column logo
    headerLogo.classList.remove('hidden');
    leftColumnLogo.classList.add('hidden');
  }
});


const video = document.getElementById('inline-video');
const customPlayPause = document.querySelector('.custom-play-pause');

// URLs for play and pause icons
const pauseIconUrl = 'assets/img/Pause-Icon.svg';
const playIconUrl = 'assets/img/Play-Icon.svg';

// Variable to hold the timeout ID
let iconTimeout;

function toggleVideo() {
    if (video.paused) {
        video.play();
        showIcon(playIconUrl); // Show pause icon when playing
    } else {
        video.pause();
        showIcon(pauseIconUrl); // Show play icon when paused
    }
}

function showIcon(iconUrl) {
    // Clear any existing timeout to avoid overlapping
    clearTimeout(iconTimeout);
    
    // Set the icon and make it visible
    customPlayPause.style.backgroundImage = `url(${iconUrl})`;
    customPlayPause.style.opacity = '0.7';

    // Start a new timeout to hide the icon after 1.8 seconds
    iconTimeout = setTimeout(() => {
        customPlayPause.style.opacity = '0';
    }, 1400);
}

// Event listener for clicking on the video container to toggle play/pause
document.querySelector('.video-container').addEventListener('click', toggleVideo);

// Show the play icon briefly when the video ends
video.addEventListener('ended', () => {
    showIcon(playIconUrl);
});


// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".gsap-fade-in1", 
  { 
    opacity: 0,  // Start invisible
    y: 50        // Optional: Add vertical offset for a nice upwards fade
  }, 
  { 
    opacity: 1,   // Fade to fully visible
    y: 0,         // Move to the final position
    duration: 1.5, // Duration of animation
    ease: "power2.out", // Smooth easing function
    scrollTrigger: {
      trigger: ".features-section",  // Element to watch
      start: "top 90%",           // When top of the element hits 80% of the viewport
      end: "bottom 20%",          // When the bottom of the element is 20% from the viewport bottom
      scrub: true,                // Smooth transition when scrolling up or down
      toggleActions: "play reverse play reverse", // Ensures fade in on both scroll directions
      markers: false,             // Set to true if you want to see debug markers in the viewport
    }
  }
);

gsap.fromTo(".gsap-fade-in2", 
  { 
    opacity: 0,  // Start invisible
    y: 50        // Optional: Add vertical offset for a nice upwards fade
  }, 
  { 
    opacity: 1,   // Fade to fully visible
    y: 0,         // Move to the final position
    duration: 1.5, // Duration of animation
    ease: "power2.out", // Smooth easing function
    scrollTrigger: {
      trigger: ".features-grid",  // Element to watch
      start: "top 90%",           // When top of the element hits 80% of the viewport
      end: "bottom 20%",          // When the bottom of the element is 20% from the viewport bottom
      scrub: true,                // Smooth transition when scrolling up or down
      toggleActions: "play reverse play reverse", // Ensures fade in on both scroll directions
      markers: false,             // Set to true if you want to see debug markers in the viewport
    }
  }
);

gsap.fromTo(".gsap-fade-in3", 
  { 
    opacity: 0,  // Start invisible
    y: 50        // Optional: Add vertical offset for a nice upwards fade
  }, 
  { 
    opacity: 1,   // Fade to fully visible
    y: 0,         // Move to the final position
    duration: 1.5, // Duration of animation
    ease: "power2.out", // Smooth easing function
    scrollTrigger: {
      trigger: ".functionality-section",  // Element to watch
      start: "top 80%",           // When top of the element hits 80% of the viewport
      end: "bottom 20%",          // When the bottom of the element is 20% from the viewport bottom
      scrub: true,                // Smooth transition when scrolling up or down
      toggleActions: "play reverse play reverse", // Ensures fade in on both scroll directions
      markers: false,             // Set to true if you want to see debug markers in the viewport
    }
  }
);

gsap.fromTo(".gsap-fade-in4", 
  { 
    opacity: 0,  // Start invisible
    y: 50        // Optional: Add vertical offset for a nice upwards fade
  }, 
  { 
    opacity: 1,   // Fade to fully visible
    y: 0,         // Move to the final position
    duration: 1.5, // Duration of animation
    ease: "power2.out", // Smooth easing function
    scrollTrigger: {
      trigger: ".functionality-section",  // Element to watch
      start: "top 50%",           // When top of the element hits 80% of the viewport
      end: "bottom 20%",          // When the bottom of the element is 20% from the viewport bottom
      scrub: true,                // Smooth transition when scrolling up or down
      toggleActions: "play reverse play reverse", // Ensures fade in on both scroll directions
      markers: false,             // Set to true if you want to see debug markers in the viewport
    }
  }
);

gsap.fromTo(".gsap-fade-in5", 
  { 
    opacity: 0,  // Start invisible
    y: 50        // Optional: Add vertical offset for a nice upwards fade
  }, 
  { 
    opacity: 1,   // Fade to fully visible
    y: 0,         // Move to the final position
    duration: 2, // Duration of animation
    ease: "power2.out", // Smooth easing function
    scrollTrigger: {
      trigger: ".functionality-section",  // Element to watch
      start: "top 40%",           // When top of the element hits 80% of the viewport
      end: "bottom 20%",          // When the bottom of the element is 20% from the viewport bottom
      scrub: true,                // Smooth transition when scrolling up or down
      toggleActions: "play reverse play reverse", // Ensures fade in on both scroll directions
      markers: false,             // Set to true if you want to see debug markers in the viewport
    }
  }
);

const featureData = {
  "Feature W": [
      { title: "Feature W No.1", text: "Description for first Feature W" },
      { title: "Feature W No.2", text: "Description for second Feature W" },
      { title: "Feature W No.3", text: "Description for third Feature W" }
  ],
  "Feature X": [
      { title: "Feature X No.1", text: "Description for first Feature X" },
      { title: "Feature X No.2", text: "Description for second Feature X" },
      { title: "Feature X No.3", text: "Description for third Feature X" }
    ],
  "Feature Y": [
      { title: "Feature Y No.1", text: "Description for first Feature Y" },
      { title: "Feature Y No.2", text: "Description for second Feature Y" },
      { title: "Feature Y No.3", text: "Description for third Feature Y" }
  ],
  "Feature Z": [
      { title: "Feature Z No.1", text: "Description for first Feature Z" },
      { title: "Feature Z No.2", text: "Description for second Feature Z" },
      { title: "Feature Z No.3", text: "Description for third Feature Z" }
  ]
};

// Function to update all feature boxes based on the selected feature
function updateFeatureBoxes(feature) {
  console.log(`Updating feature boxes for: ${feature}`);

  // Retrieve the content array for the selected feature
  const boxesContent = featureData[feature];

  if (!boxesContent) {
      console.warn(`Feature "${feature}" not found in featureData`);
      return;
  }

  // Select all elements with the class feature-box and update each one individually
  const featureBoxes = document.querySelectorAll('.feature-box');

  featureBoxes.forEach((box, index) => {
      const titleElement = box.querySelector('.feature-title');
      const textElement = box.querySelector('p');

      // Check if there's content for this box index
      if (boxesContent[index]) {
          const { title, text } = boxesContent[index];
          console.log(`Setting title for box ${index + 1} to: ${title}`);
          console.log(`Setting text for box ${index + 1} to: ${text}`);

          // Update the title and text for each box
          titleElement.textContent = title;
          textElement.textContent = text;
      } else {
          console.warn(`No content found for box index ${index} under feature "${feature}"`);
      }
  });
}

// Add event listeners to each feature option
document.querySelectorAll('.feature-option').forEach(option => {
  option.addEventListener('click', () => {
      const feature = option.getAttribute('data-feature');
      console.log(`Feature option clicked: ${feature}`);
      updateFeatureBoxes(feature);
  });
});

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

