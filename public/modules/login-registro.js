export default function loginRegistro() {
  const formLogin = document.querySelector(".content-login");
  const formRegistro = document.querySelector(".content-registro");
  const botaoLogin = document.querySelectorAll(".logar");
  const botaoRegistro = document.querySelectorAll(".registrar");

  function showRegistro() {
    formRegistro.classList.add("ativo");
    formLogin.classList.add("ativo");
  }

  function showLogin() {
    formRegistro.classList.remove("ativo");
    formLogin.classList.remove("ativo");
  }

  botaoRegistro.forEach((item) => {
    item.addEventListener("click", showRegistro);
  });

  botaoLogin.forEach((item) => {
    item.addEventListener("click", showLogin);
  });
}
