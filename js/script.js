const selectCpu = document.getElementById("cpu");
const mensagem = document.getElementById("mensagem");

selectCpu.addEventListener("change", () => {
  console.log(selectCpu.value);
  mensagem.textContent = "Selecionado: " + selectCpu.value;
});
