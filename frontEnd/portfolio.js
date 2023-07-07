
const menuItems = document.querySelectorAll('.menu-item');
const socialLinks = document.querySelectorAll('.social-link');


function handleMenuItemClick(event) {

  menuItems.forEach((menuItem) => {
    menuItem.classList.remove('active');
  });


  event.target.classList.add('active');
}


function handleSocialLinkClick(event) {

  const url = event.target.href;


  window.open(url, '_blank');
}


menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', handleMenuItemClick);
});

socialLinks.forEach((socialLink) => {
  socialLink.addEventListener('click', handleSocialLinkClick);
});


function setActiveLink() {
  const currentPage = window.location.pathname;
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}


function addNavListeners() {
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const href = link.getAttribute("href");
      if (href.startsWith("#")) {
        scrollToSection(href);
      }
    });
  });
}


function scrollToSection(href) {
  const target = document.querySelector(href);
  if (target) {
    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth",
    });
  }
}


function initPortfolio() {
  setActiveLink();
  addNavListeners();
}


document.addEventListener("DOMContentLoaded", initPortfolio);


document.addEventListener('DOMContentLoaded', () => {

  

  const backButton = document.querySelector('.back-button');
  backButton.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
  

});


document.addEventListener('DOMContentLoaded', () => {
  
  

  const backButton = document.querySelector('.back-button');
  backButton.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
  
 
});


document.addEventListener('DOMContentLoaded', () => {

  

  const backButton = document.querySelector('.back-button');
  backButton.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
  
  
});


document.addEventListener('DOMContentLoaded', () => {
 
  
 
  const backButton = document.querySelector('.back-button');
  backButton.addEventListener('click', () => {
    window.location.href = 'index.html';
  });

  const githubButton = document.querySelector('.github-button');
  githubButton.addEventListener('click', () => {
    window.location.href = 'https://github.com/deraldabbe/deraldabbe.github.io.git';
  });
  
  
});


document.addEventListener('DOMContentLoaded', () => {

  
 
  const form = document.querySelector('#contact-form');
  form.addEventListener('submit', event => {
    event.preventDefault();
    
 
    
    
    form.reset();
  });
  

});
