function findPresentButton() {
  // Primary method: Find button with present_to_all icon
  const buttons = document.querySelectorAll('button');
  const presentButton = Array.from(buttons).find(button => 
    button.querySelector('i.google-material-icons')?.textContent === 'present_to_all'
  );

  if (presentButton) return presentButton;

  // Backup method: Look for any button containing 'present' in any attribute or content
  return Array.from(buttons).find(button => {
    const buttonText = button.textContent.toLowerCase();
    const buttonHtml = button.outerHTML.toLowerCase();
    return buttonText.includes('present') || buttonHtml.includes('present');
  });
}

function modifyButton() {
  const presentButton = findPresentButton();
  
  if (presentButton) {
    // Add our custom class
    presentButton.classList.add('meet-button-custom');
  }
}

// Run on page load
modifyButton();

// Also run periodically in case the button loads dynamically
setInterval(modifyButton, 1000);
