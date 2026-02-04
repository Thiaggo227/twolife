// ================================
// MENU MOBILE
// ================================

const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");

menuIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    menuIcon.classList.remove("bi-list");
    menuIcon.classList.add("bi-x");
  } else {
    menuIcon.classList.remove("bi-x");
    menuIcon.classList.add("bi-list");
  }
});

// Fecha menu ao clicar fora
document.addEventListener("click", (e) => {
  if (
    menu.classList.contains("active") &&
    !menu.contains(e.target) &&
    !menuIcon.contains(e.target)
  ) {
    menu.classList.remove("active");
    menuIcon.classList.remove("bi-x");
    menuIcon.classList.add("bi-list");
  }
});


// ================================
// AGENDAMENTO POPUP
// ================================

const btnAgendar = document.getElementById("btnAgendar");
const containerSend = document.getElementById("containerSend");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");

const btnConfirmar = document.getElementById("btnConfirmar");
const mensagem = document.getElementById("mensagem");

// Inputs
const inputNome = document.getElementById("nome");
const inputData = document.getElementById("data");
const inputHorario = document.getElementById("horario");


// ================================
// FUNÇÕES POPUP
// ================================

function abrirPopup() {
  containerSend.style.display = "block";
  overlay.style.display = "block";
  mensagem.style.display = "none";
}

function fecharPopup() {
  containerSend.style.display = "none";
  overlay.style.display = "none";
}


// ================================
// EVENTOS DE ABRIR E FECHAR
// ================================

btnAgendar.addEventListener("click", abrirPopup);
closeBtn.addEventListener("click", fecharPopup);
overlay.addEventListener("click", fecharPopup);

btnConfirmar.addEventListener("click", () => {

  let nome = inputNome.value.trim();
  let data = inputData.value;
  let horario = inputHorario.value;

  if (nome === "" || data === "" || horario === "") {
    mensagem.style.display = "block";
    mensagem.style.color = "red";
    mensagem.innerText = "⚠️ Preencha todos os campos!";
    return;
  }

  // ✅ MOSTRAR A MENSAGEM
  mensagem.style.display = "block";
  mensagem.style.color = "lime";

  // ✅ Mensagem estilizada
  mensagem.innerHTML = `
    <div class="msgBox">
      <h3>✅ Agendamento Confirmado!</h3>

      <p><strong>Cliente:</strong> ${nome}</p>
      <p><strong>📅 Data:</strong> ${data}</p>
      <p><strong>⏰ Horário:</strong> ${horario}</p>
    </div>
  `;

  // Limpa os inputs
  inputNome.value = "";
  inputData.value = "";
  inputHorario.value = "";

});
