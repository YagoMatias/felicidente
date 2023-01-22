import outsideClick from "./outsideclick.js";

export default function menuMobile() {
  const botaoHamburguer = document.querySelector("#menu-hamburguer");
  const mobileMenu = document.querySelector(".menu-mobile");
  const links = document.querySelectorAll(".menu-mobile > li");
  const main = document.querySelector("main");
  console.log(links);

  function abrirMenu() {
    mobileMenu.classList.toggle("menu-ativado");
  }

  function fecharMenu() {
    mobileMenu.classList.remove("menu-ativado");
  }

  botaoHamburguer.addEventListener("click", abrirMenu);
  links.forEach((item) => {
    item.addEventListener("click", fecharMenu);
  });

  // function abrirMenu(event) {
  //   event.preventDefault();
  //   // this.classList.add("menu-ativado");
  //   outsideClick(this, ["touchstart", "click"], () => {
  //     this.classList.remove("menu-ativado");
  //   });
  // }
}
