// Loading screen logic
document.addEventListener('DOMContentLoaded', function() {
  const loadingScreen = document.querySelector('.loading-screen');
  const header = document.querySelector('.header');
  
  // Show loading screen initially
  loadingScreen.style.display = 'flex';
  header.style.display = 'none';

  // Hide loading screen after delay
  setTimeout(function() {
    loadingScreen.style.display = 'none';
    header.style.display = 'flex';
  }, 1500);
});

// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", function(e) {
  const isOpen = navLinks.classList.contains("open");
  
  // Toggle menu state
  if (isOpen) {
    navLinks.classList.add("closing");
    navLinks.addEventListener("animationend", function() {
      navLinks.classList.remove("open", "closing");
      menuBtnIcon.className = "ri-menu-line";
    }, { once: true });
  } else {
    navLinks.classList.add("open");
    menuBtnIcon.className = "ri-close-line";
  }
});

// Close menu when clicking a link
navLinks.addEventListener("click", function(e) {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    menuBtnIcon.className = "ri-menu-line";
  }
});

// ScrollReveal configuration
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 800,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  interval: 100
};

// Header animations
ScrollReveal().reveal(".header__content .section__subheader", {
  ...scrollRevealOption,
  delay: 300
});

ScrollReveal().reveal(".header__content .section__header", {
  ...scrollRevealOption,
  delay: 600
});

ScrollReveal().reveal(".header__socials", {
  ...scrollRevealOption,
  origin: "left",
  delay: 900
});

// About section animations
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left"
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 300
});

ScrollReveal().reveal(".about__content p", {
  ...scrollRevealOption,
  delay: 600
});

// Portfolio section animations
ScrollReveal().reveal(".portfolio .section__subheader", {
  ...scrollRevealOption
});

ScrollReveal().reveal(".portfolio .section__header", {
  ...scrollRevealOption,
  delay: 300
});

ScrollReveal().reveal(".portfolio__nav", {
  ...scrollRevealOption,
  delay: 600
});

ScrollReveal().reveal(".portfolio__card", {
  ...scrollRevealOption,
  interval: 200,
  delay: 900
});

// Gallery section animations
ScrollReveal().reveal(".gallery .section__header", {
  ...scrollRevealOption
});

ScrollReveal().reveal(".gallery .section__subheader", {
  ...scrollRevealOption,
  delay: 300
});

ScrollReveal().reveal(".gallery__grid", {
  ...scrollRevealOption,
  delay: 600
});

// Initialize MixItUp for portfolio filtering
let mixer;
document.addEventListener('DOMContentLoaded', function() {
  if (document.querySelector('.portfolio__grid')) {
    mixer = mixitup('.portfolio__grid', {
      selectors: {
        target: '.portfolio__card'
      },
      animation: {
        duration: 400,
        effects: 'fade translateY(-20px)',
        easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
      },
      load: {
        filter: 'all'
      },
      controls: {
        toggleLogic: 'and'
      },
      callbacks: {
        onMixFail: function() {
          console.log('No items matched the filter criteria');
        },
        onMixEnd: function(state) {
          console.log('Filter operation completed:', state.activeFilter.selector);
        }
      }
    });
  }
});