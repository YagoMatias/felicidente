export default function menuHamburguer() {
  const botaoHamburguer = document.querySelector("#menu-hamburguer");
  const links = document.querySelectorAll(".menu-mobile > li");

  function hamburger(event) {
    event.preventDefault();
    botaoHamburguer.classList.toggle("is-active");
  }

  if (botaoHamburguer) {
    botaoHamburguer.addEventListener("click", hamburger);
  }

  function fecharMenu() {
    botaoHamburguer.classList.remove("is-active");
  }

  links.forEach((item) => {
    item.addEventListener("click", fecharMenu);
  });
}
