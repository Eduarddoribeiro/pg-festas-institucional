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
const portfolioCards = document.querySelectorAll('.card-foto'); // ⬅️ Novidade

function checkAnimations() {
  // Anima o título da seção hero
  if (isInViewport(heroTitle)) {
    heroTitle.classList.add('animate');
  } else {
    heroTitle.classList.remove('animate');
  }

  // Anima os cards principais
  cards.forEach((card, index) => {
    if (isInViewport(card)) {
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

  // cards
  const portfolioCards = document.querySelectorAll('.card-foto');
  portfolioCards.forEach((card, index) => {
    if (isInViewport(card)) {
      if (index % 2 === 0) {
        card.classList.add('slide-in-left');
        card.classList.remove('left-hidden');
      } else {
        card.classList.add('slide-in-right');
        card.classList.remove('right-hidden');
      }
    } else {
      if (index % 2 === 0) {
        card.classList.remove('slide-in-left');
        card.classList.add('left-hidden');
      } else {
        card.classList.remove('slide-in-right');
        card.classList.add('right-hidden');
      }
    }
  });
  const cardTrabalhe = document.querySelector('.card-trabalhe-conosco');

if (cardTrabalhe && isInViewport(cardTrabalhe)) {
  cardTrabalhe.classList.add('fade-in');
} else if (cardTrabalhe) {
  cardTrabalhe.classList.remove('fade-in');
}
}

window.addEventListener('load', checkAnimations);
window.addEventListener('scroll', checkAnimations);
