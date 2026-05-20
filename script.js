// ===========================
// SCREEN SWITCHING
// ===========================

// This function shows one screen and hides all others
function showScreen(screenId) {
  // Get all phone screens
  const allScreens = document.querySelectorAll('.phone');

  // Hide every screen first
  allScreens.forEach(function(screen) {
    screen.classList.add('hidden');
  });

  // Show only the screen we want
  const targetScreen = document.getElementById(screenId);
  if (targetScreen) {
    targetScreen.classList.remove('hidden');
  }
}


// ===========================
// TEXT INPUT → SHOW SIGN SCREEN
// ===========================

// When user types something and presses Enter,
// show it on the sign language screen
document.addEventListener('DOMContentLoaded', function() {

  // Find the text input on the home screen
  const homeInput = document.querySelector('#screen-home .type-input');

  homeInput.addEventListener('keydown', function(event) {
    // Check if user pressed Enter key
    if (event.key === 'Enter') {
      const userText = homeInput.value.trim();

      // Only proceed if user typed something
      if (userText !== '') {
        // Update the typed word shown on screen 3
        const typedWordDisplay = document.querySelector('#screen-text .typed-word');
        typedWordDisplay.textContent = '"' + userText + '"';

        // Update the input box on screen 3 to show what was typed
        const screen3Input = document.querySelector('#screen-text .type-input');
        screen3Input.value = userText;

        // Switch to the sign language screen
        showScreen('screen-text');
      }
    }
  });


  // ===========================
  // SEND BUTTON on screen 3
  // ===========================
  // When user clicks the send button on screen 3, go back to home
  const sendBtn = document.querySelector('#screen-text .send-btn');
  if (sendBtn) {
    sendBtn.addEventListener('click', function() {
      // Clear the home input
      homeInput.value = '';
      // Go back to home
      showScreen('screen-home');
    });
  }


  // ===========================
  // CAMERA BUTTON → CAMERA SCREEN
  // ===========================
  const camBtn = document.querySelector('#screen-home .cam-btn');
  if (camBtn) {
    camBtn.addEventListener('click', function() {
      showScreen('screen-camera');
    });
  }


  // ===========================
  // SIMULATE: Camera detects a sign after 3 seconds
  // ===========================
  // This simulates what your AI model would do in real life
  // In the real app, your trained model would replace this
  function simulateCameraDetection() {
    const fakeDetectedWords = ['Hello', 'Thank you', 'Yes', 'No', 'Please', 'Help'];

    // Pick a random word (in real app, your model picks this)
    const randomWord = fakeDetectedWords[Math.floor(Math.random() * fakeDetectedWords.length)];

    // Update the detected word on screen
    const detectedWordEl = document.querySelector('#screen-camera .detected-word');
    if (detectedWordEl) {
      detectedWordEl.textContent = randomWord;
    }
  }

  // Run the simulation every 3 seconds
  setInterval(simulateCameraDetection, 3000);

});