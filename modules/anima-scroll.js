export default function sectionScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  const metadeWindow = window.innerHeight * 0.75;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionVisible = sectionTop - metadeWindow < 0;
      if (sectionVisible) {
        section.classList.add("ativo");
      }
    });
  }
  animaScroll();
  window.addEventListener("scroll", animaScroll);
}
