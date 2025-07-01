document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger-menu");
  const navbar = document.getElementById("navbar");

  hamburger.addEventListener("click", function () {
    navbar.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 768) {
      navbar.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });

  if (window.innerWidth >= 768) {
    navbar.classList.remove("active");
    hamburger.classList.remove("active");
  }

  // ✅ FECHA O MENU AO CLICAR EM UM LINK
  const navLinks = document.querySelectorAll("#navbar a");

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      navbar.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });
});


function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

const heroTitle = document.querySelector('#hero h1');
const cards = document.querySelectorAll('.card');

function checkAnimations() {
  if (isInViewport(heroTitle)) {
    heroTitle.classList.add('animate');
  } else {
    heroTitle.classList.remove('animate');
  }

  cards.forEach((card, index) => {
    if (isInViewport(card)) {
      // alternar animação para cima e para baixo nos cards
      if (index % 2 === 0) {
        card.classList.add('slide-in-top');
        card.classList.remove('top-hidden');
      } else {
        card.classList.add('slide-in-bottom');
        card.classList.remove('bottom-hidden');
      }
    } else {
      if (index % 2 === 0) {
        card.classList.remove('slide-in-top');
        card.classList.add('top-hidden');
      } else {
        card.classList.remove('slide-in-bottom');
        card.classList.add('bottom-hidden');
      }
    }
  });
}

window.addEventListener('load', checkAnimations);
window.addEventListener('scroll', checkAnimations);
