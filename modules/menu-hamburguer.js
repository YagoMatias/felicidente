export default function menuHamburguer() {
  const botaoHamburguer = document.querySelector("#menu-hamburguer");
  console.log(botaoHamburguer);

  function hamburger(event) {
    event.preventDefault();
    botaoHamburguer.classList.toggle("is-active");
  }

  if (botaoHamburguer) {
    botaoHamburguer.addEventListener("click", hamburger);
  }
}
