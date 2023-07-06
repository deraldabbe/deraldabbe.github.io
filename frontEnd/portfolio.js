// DOM elements
const menuItems = document.querySelectorAll('.menu-item');
const socialLinks = document.querySelectorAll('.social-link');

// Function to handle menu item click
function handleMenuItemClick(event) {
  // Remove active class from all menu items
  menuItems.forEach((menuItem) => {
    menuItem.classList.remove('active');
  });

  // Add active class to the clicked menu item
  event.target.classList.add('active');
}

// Function to handle social link click
function handleSocialLinkClick(event) {
  // Get the clicked social link URL
  const url = event.target.href;

  // Open the URL in a new tab/window
  window.open(url, '_blank');
}

// Event listeners
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', handleMenuItemClick);
});

socialLinks.forEach((socialLink) => {
  socialLink.addEventListener('click', handleSocialLinkClick);
});
