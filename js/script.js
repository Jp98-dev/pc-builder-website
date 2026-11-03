const processadores = [
  { id: "r5500", nome: "Ryzen 5 5500", soquete: "AM4" },
  { id: "r5600", nome: "Ryzen 5 5600", soquete: "AM4" },
  { id: "r5700", nome: "Ryzen 7 5700X", soquete: "AM4" },
  { id: "r7600", nome: "Ryzen 5 7600", soquete: "AM5" },
  { id: "i12400", nome: "Core i5-12400", soquete: "LGA1700" }
];

const placasMae = [
  { nome: "B450", soquete: "AM4" },
  { nome: "B550", soquete: "AM4" },
  { nome: "A520", soquete: "AM4" },
  { nome: "B650", soquete: "AM5" },
  { nome: "B660", soquete: "LGA1700" },
  { nome: "Z690", soquete: "LGA1700" }
];

const selectCpu = document.getElementById("cpu");
const mensagem = document.getElementById("mensagem");
const listaPlacas = document.getElementById("lista-placas");

selectCpu.addEventListener("change", () => {
  mensagem.textContent = "Selecionado: " + selectCpu.value;
  listaPlacas.textContent = "";

  const cpu = processadores.find((p) => p.id === selectCpu.value);
  if (!cpu) {
    return;
  }

  const compativeis = placasMae.filter((placa) => placa.soquete === cpu.soquete);

  compativeis.forEach((placa) => {
    const item = document.createElement("li");
    item.textContent = placa.nome;
    listaPlacas.appendChild(item);
  });
});