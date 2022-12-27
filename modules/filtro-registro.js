export default function filtroRegistro() {
  const botaoDentista = document.querySelector("button.botao-dentista");
  const botaoPaciente = document.querySelector("button.botao-paciente");
  const infosDentista = document.querySelector(".dentistas");

  function showDentista() {
    infosDentista.classList.add("ativo");
  }

  function hideDentista() {
    infosDentista.classList.remove("ativo");
  }

  botaoDentista.addEventListener("click", showDentista);
  botaoPaciente.addEventListener("click", hideDentista);
}
