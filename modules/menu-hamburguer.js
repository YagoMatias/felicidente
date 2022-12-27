export default function menuHamburguer() {

  const botaoHamburguer = document.querySelector('.botaoHamburguer .hamburguer');
  console.log(botaoHamburguer);

  function activeButton() {
    botaoHamburguer.classList.toggle('is-active')
  }

  if(!!botaoHamburguer) {
  botaoHamburguer.addEventListener('click', activeButton)
  }
}