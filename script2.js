const nav = document.querySelector("nav");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");
const footer = document.getElementById("bottom-footer");
const contactSection = document.getElementById("contact");
const contactForm = document.getElementById("contact-form");

if (footer) footer.style.display = "none";

window.addEventListener("scroll", () => {
  nav.style.backgroundColor = window.scrollY > 50 ? "#111" : "#222";

  let currentSection = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === "#" + currentSection
    );
  });
  if (contactSection && footer) {
    const contactRect = contactSection.getBoundingClientRect();
    footer.style.display =
      contactRect.top < window.innerHeight && contactRect.bottom > 0
        ? "flex"
        : "none";
  }
});

if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");
    contactForm.reset();
  });
}

