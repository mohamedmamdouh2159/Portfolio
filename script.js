// ===== Scroll Animations =====
const aboutText = document.querySelector(".about-text");
const projectCards = document.querySelectorAll(".project-card");
const serviceCards = document.querySelectorAll(".service-card");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  if (aboutText) {
    const aboutTop = aboutText.getBoundingClientRect().top;
    if (aboutTop < windowHeight - 150) {
      aboutText.classList.add("visible");
    }
  }

  projectCards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < windowHeight - 100) {
      card.classList.add("visible");
    }
  });

  serviceCards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < windowHeight - 100) {
      card.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ===== Contact Form Submit =====
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Your message has been sent successfully!");
  this.reset();
});
