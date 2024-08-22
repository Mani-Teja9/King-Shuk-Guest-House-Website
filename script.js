'use strict';

/**
 * Ensure DOM is loaded before running script
 */
document.addEventListener('DOMContentLoaded', () => {

  /**
   * Smooth Scroll for Internal Links
   */
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  /**
   * Navbar Toggle
   */
  const overlay = document.querySelector("[data-overlay]");
  const navOpenBtn = document.querySelector("[data-nav-open-btn]");
  const navbar = document.querySelector("[data-navbar]");
  const navCloseBtn = document.querySelector("[data-nav-close-btn]");
  const navLinks = document.querySelectorAll("[data-nav-link]");

  const navElemArr = [navOpenBtn, navCloseBtn, overlay];

  const navToggleEvent = function (elem) {
    elem.forEach(element => {
      if (element) {
        element.addEventListener("click", function () {
          if (navbar && overlay) {
            navbar.classList.toggle("active");
            overlay.classList.toggle("active");
          }
        });
      }
    });
  };

  if (navElemArr.length > 0 && navbar && overlay) {
    navToggleEvent(navElemArr);
  }

  if (navLinks.length > 0) {
    navToggleEvent(navLinks);
  }

  /**
   * Header Sticky & Go to Top Button
   */
  const header = document.querySelector("[data-header]");
  const goTopBtn = document.querySelector("[data-go-top]");

  window.addEventListener("scroll", function () {
    if (header) {
      header.classList.toggle("active", window.scrollY >= 200);
    }

    if (goTopBtn) {
      if (window.scrollY >= 200) {
        goTopBtn.classList.add("active");
      } else {
        goTopBtn.classList.remove("active");
      }
    }
  });

  /**
   * About Section Interaction
   */
  const aboutSection = document.querySelector('#about');

  if (aboutSection) {
    const bookNowButton = aboutSection.querySelector('.about__btn button');
    if (bookNowButton) {
      bookNowButton.addEventListener('click', () => {
        console.log('BOOK NOW button clicked!');
      });
    }
  }

  /**
   * ScrollReveal Animations
   */
  const scrollRevealOption = {
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
    easing: 'ease-in-out',
    reset: false
  };

  // Reveal elements for the header
  ScrollReveal().reveal('.header__container p', {
    ...scrollRevealOption,
    delay: 300
  });

  ScrollReveal().reveal('.header__container h1', {
    ...scrollRevealOption,
    delay: 600
  });

  // Reveal elements in the about section
  ScrollReveal().reveal('.about__image img', {
    ...scrollRevealOption,
    origin: 'left',
    delay: 400
  });

  ScrollReveal().reveal('.about__content .section__subheader', {
    ...scrollRevealOption,
    delay: 600
  });

  ScrollReveal().reveal('.about__content .section__header', {
    ...scrollRevealOption,
    delay: 900
  });

  ScrollReveal().reveal('.about__content .section__description', {
    ...scrollRevealOption,
    delay: 1200
  });

  ScrollReveal().reveal('.about__btn', {
    ...scrollRevealOption,
    delay: 1500
  });

  // Reveal elements for the room section
  ScrollReveal().reveal('.room__card', {
    ...scrollRevealOption,
    interval: 300,
    origin: 'bottom'
  });

  // Reveal elements for the service section
  ScrollReveal().reveal('.service__list li', {
    ...scrollRevealOption,
    interval: 300,
    origin: 'right'
  });
});
