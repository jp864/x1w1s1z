// Play SIUUU sound on Buy Now click
const buyNowButton = document.getElementById('buy-now-button');
buyNowButton.addEventListener('click', () => {
  document.getElementById('siuuu-sound').play();
  alert('Redirecting to PancakeSwap...');
  window.open('https://pancakeswap.finance/', '_blank'); // Replace with the correct link
});

// FAQ Toggle Functionality
document.querySelectorAll('.faq-question').forEach((question) => {
  question.addEventListener('click', () => {
    const faqItem = question.parentElement;
    faqItem.classList.toggle('active');
  });
});

// Hide the loading spinner when the page is fully loaded
window.addEventListener('load', () => {
  console.log('Page loaded');
  const loadingSpinner = document.getElementById('loading-spinner');
  if (loadingSpinner) {
    loadingSpinner.classList.add('hide-spinner'); // Hide spinner
  }
});

// Fallback: Hide the spinner after 5 seconds (even if the page isn't fully loaded)
setTimeout(() => {
  const loadingSpinner = document.getElementById('loading-spinner');
  if (loadingSpinner) {
    loadingSpinner.classList.add('hide-spinner');
  }
}, 5000); // 5 seconds
// Flag click functionality
document.querySelectorAll('.country-card').forEach((card) => {
  card.addEventListener('click', () => {
    const bgImage = card.getAttribute('data-bg'); // Get the background image URL
    const countryName = card.getAttribute('data-country'); // Get the country name

    // Create an overlay for the transition
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    // Fade in the overlay
    setTimeout(() => {
      overlay.classList.add('visible');
    }, 10);

    // After the overlay is visible, show the country-specific page
    setTimeout(() => {
      const countryPage = document.getElementById('country-page');
      countryPage.style.backgroundImage = `url(${bgImage})`;
      
      // Update the country name in both elements
      countryPage.querySelector('#country-name').textContent = countryName;
      countryPage.querySelector('#country-name-span').textContent = countryName;

      countryPage.classList.add('visible');

      // Add the country to the list
      const countryList = document.getElementById('country-names');
      if (!Array.from(countryList.children).some(li => li.textContent === countryName)) {
        const listItem = document.createElement('li');
        listItem.textContent = countryName;
        countryList.appendChild(listItem);
      }
    }, 500); // Delay to allow the overlay to fade in
  });
});
// Close the country page when clicking outside
document.addEventListener('click', (e) => {
  const countryPage = document.getElementById('country-page');
  const overlay = document.querySelector('.overlay');

  // Check if the click occurred outside the country page
  if (countryPage.classList.contains('visible') && !e.target.closest('#country-page')) {
    countryPage.classList.remove('visible');

    // Remove the overlay
    if (overlay) {
      overlay.classList.remove('visible');
      setTimeout(() => {
        overlay.remove();
      }, 500); // Delay to allow the overlay to fade out
    }
  }
});

// Share on X (Twitter)
const shareOnXButton = document.getElementById('share-on-x');
shareOnXButton.addEventListener('click', () => {
  const tweetText = encodeURIComponent("I just joined the Official CR7 Memecoin movement! 🚀 #CR7Memecoin #SIUUU");
  const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
  window.open(tweetUrl, '_blank');
});


// JavaScript for Flip Effect and SIUUU Sound
document.querySelectorAll('.achievement-card').forEach((card) => {
  card.addEventListener('click', () => {
    const siuuuSound = document.getElementById('siuuu-sound');
    
    // Check if the card is already flipped
    if (!card.classList.contains('flipped')) {
      // Play the SIUUU sound only when flipping to the back
      siuuuSound.play();
    }

    // Toggle the flipped state
    card.classList.toggle('flipped');
  });
});

const joinMovementButton = document.getElementById('join-movement-button');
joinMovementButton.addEventListener('click', () => {
  // Play the SIUUU sound
  const siuuuSound = document.getElementById('siuuu-sound');
  siuuuSound.play();

  // Show a loading spinner
  const loadingSpinner = document.getElementById('loading-spinner');
  loadingSpinner.classList.remove('hide-spinner');

  // Redirect after a short delay (e.g., 2 seconds)
  setTimeout(() => {
    window.open('https://x.com/cr7coin_onsol', '_blank'); // Replace with your desired link
    loadingSpinner.classList.add('hide-spinner'); // Hide spinner after redirect
  }, 2000); // 2-second delay
});

// Play SIUUU sound and redirect on "Buy $URCR7 Now" button click
const ctaButton = document.getElementById('cta-button');
ctaButton.addEventListener('click', () => {
  // Play the SIUUU sound
  const siuuuSound = document.getElementById('siuuu-sound');
  siuuuSound.play();

  // Redirect to PancakeSwap or your desired link
  alert('Redirecting to PancakeSwap...');
  window.open('https://pancakeswap.finance/', '_blank'); // Replace with the correct link
});