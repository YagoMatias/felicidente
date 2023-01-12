export default function filtroRegistro() {
  const botaoDentista = document.querySelector(".botao-dentista");
  const botaoPaciente = document.querySelector(".botao-paciente");
  const infosDentista = document.querySelector(".dentistas");

  function showDentista() {
    infosDentista.classList.add("ativou");
  }

  function hideDentista() {
    infosDentista.classList.remove("ativou");
  }

  if (botaoDentista) {
    botaoDentista.addEventListener("click", showDentista);
    botaoPaciente.addEventListener("click", hideDentista);
  }
}
